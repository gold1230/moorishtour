import MoroccoToursHero from "@/Compentents/tourFrom/tourFrom"
import PopularMoroccoTours from "@/Compentents/tourFrom/mustPopular";
import  image1 from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg"
import TopDestinations from "@/Compentents/tourFrom/destinations";
import WhyTravelWithUs from "@/Compentents/tourFrom/whytravel";
import AchievementsCTA from "@/Compentents/tourFrom/ready";




const travelerReviews= [
  {
    quote:
      "The 3-day desert tour was the highlight of our Morocco trip! Everything was perfectly organized and our guide was amazing.",
    name: "Sarah Johnson",
    country: "United States",
    avatar: image1.src,
    avatarAlt: "Sarah Johnson",
    rating: 5,
  },
  {
    quote:
      "Our Marrakech to Merzouga journey was incredible. The itinerary was well planned, the desert camp was beautiful, and every day felt special.",
    name: "Michael Anderson",
    country: "Canada",
    avatar: image1.src,
    avatarAlt: "Michael Anderson",
    rating: 5,
  },
  {
    quote:
      "We loved having a private Morocco tour that was customized around our family. Everything was comfortable and easy from start to finish.",
    name: "Emily Carter",
    country: "United Kingdom",
    avatar: image1.src,
    avatarAlt: "Emily Carter",
    rating: 5,
  },
  {
    quote:
      "From Marrakech to the Sahara, the experience was fantastic. Our driver was professional, friendly and made the journey enjoyable.",
    name: "Daniel Wilson",
    country: "Australia",
    avatar: image1.src,
    avatarAlt: "Daniel Wilson",
    rating: 5,
  },
  {
    quote:
      "Moorish Tour made our Morocco trip unforgettable. We especially loved the desert experience, local food and time spent in the Atlas Mountains.",
    name: "Olivia Brown",
    country: "United States",
    avatar: image1.src,
    avatarAlt: "Olivia Brown",
    rating: 5,
  },
];

const travelBenefits = [
  {
    title: "Local Expertise",
    description:
      "Born and raised in Morocco, we know every hidden gem.",
    icon: "expertise",
  },
  {
    title: "Best Value",
    description:
      "Quality tours at competitive prices with no hidden fees.",
    icon: "value",
  },
  {
    title: "Flexible Options",
    description:
      "Customize your itinerary to match your preferences.",
    icon: "flexible",
  },
  {
    title: "Comfort & Safety",
    description:
      "Modern vehicles, quality accommodations, your safety first.",
    icon: "safety",
  },
];

export default function marrakech(){

return (

    <>
    <MoroccoToursHero
        title="Unforgettable Marrakech Desert Tours"
        desc="Discover Marrakech desert tours that take you from the Red City through the High Atlas Mountains, ancient kasbahs and into the Sahara Desert. Explore Morocco with local guides and flexible private tours from Marrakech."
        image={image1}
        />

    <PopularMoroccoTours
      collection="tours-from-marrakech"
      title="Popular Morocco Tours From Marrakech"
    />

    <TopDestinations />
    <WhyTravelWithUs
  title="Why Travel With Us?"
  benefits={travelBenefits}
  reviews={travelerReviews}
  image={image1.src}
  imageAlt="Travelers enjoying a Morocco Sahara Desert experience"
  reviewsTitle="What Our Travelers Say"
/>
   <AchievementsCTA/>
    
    
    </>
)


}