"use client";

import Image from "next/image";
import Link from "next/link";

interface Review {
  id: number;
  name: string;
  avatar: string;
  flag: string;
  rating: number;
  date: string;
  review: string;
}

interface ReviewRate {
  averageRating: number;
  totalReviews: number;
}
interface Reviews{
reviewRate: ReviewRate[],
review: Review[]
}



export default function ReviewsSection( { reviewRate , review}: Reviews ) {

   
  return (
    <section className=" w-[90%]  mx-auto py-10 rounded-2xl border border-neutral-200 bg-white p-7">

      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-3xl font-bold text-neutral-900">
          For Real Experiences see what Travelers Say About this tour            
          </h2>

          <div className="mt-2 flex items-center gap-2">

            <span className="text-[#F59E0B] text-lg">
              ★
            </span>

            <span className="text-neutral-700">
              <strong>{reviewRate[0]?.averageRating}</strong> out of 5
            </span>

            <span className="text-neutral-500">
              ({reviewRate[0]?.totalReviews} reviews)
            </span>

          </div>

        </div>

        <Link href="https://www.tripadvisor.com/UserReviewEdit-g293733-d27417833-Moorish_Tour-Fez_Fez_Meknes.html" className="rounded-lg border border-amber-600 px-5 py-3 text-sm font-semibold text-amber-600 transition hover:bg-amber-600 hover:text-white">
          Write a Review
        </Link>

      </div>

      {/* Reviews */}

      <div className="mt-8 grid gap-5 lg:grid-cols-4">

        {review.map((review) => (
          <article
            key={review.id}
            className="rounded-xl border border-neutral-200 bg-white p-5 transition hover:shadow-lg"
          >

            {/* Top */}

            <div className="flex items-start gap-3">

              <Image
                src={review.avatar}
                alt={review.name}
                width={42}
                height={42}
                className="rounded-full object-cover"
              />

              <div className="flex-1">

                <div className="flex items-center gap-2">

                  <h3 className="font-semibold text-neutral-900">
                    {review.name}
                  </h3>

                  <span className="text-lg">
                    {review.flag}
                  </span>

                </div>

                <div className="mt-1 flex items-center gap-2">

                  <div className="text-sm tracking-wide text-[#F59E0B]">
                    {"★★★★★"}
                  </div>

                  <span className="text-xs text-neutral-400">
                    {review.date}
                  </span>

                </div>

              </div>

            </div>

            {/* Review */}

            <p className="mt-5 text-[15px] leading-7 text-neutral-600">
              {review.review}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
}