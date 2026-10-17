import type { Metadata } from "next";

import BannerHome from "@/content/bannerhome";
import Card from "@/content/card";
import Destinations from "@/content/destinations";
import TestimonialsSection from "@/content/testimonialsection";
import WhySection from "@/content/whysection";
import CtaBanner from "@/content/ctabanner";
import BlogSection from "@/content/blogsection";
import HomeTravelSearch from "@/Compentents/searchBox";

const siteUrl = "https://moorishtour.com";
const homeTitle = "Explore Morocco Tours & Marrakech Desert Tours with Moorish Tour";
const homeDescription =
  "Explore Morocco tours and Marrakech desert tours with local guides. Discover Sahara adventures, private itineraries and top places to visit in Morocco.";
const homeImage = `${siteUrl}/home/Group-of-tourists-in-Morocco-enjoying-a-Sahara-Desert-4x4-tour-near-the-Merzouga-sand-dunes.jpg`;

export const metadata: Metadata = {
  title: { absolute: homeTitle },

  description: homeDescription,

  keywords: [
    "Marrakech desert tours",
    "tours from Marrakech",
    "Morocco tours",
    "Morocco desert tours",
    "Marrakech tours",
    "Marrakech to Merzouga tours",
    "private Morocco tours",
    "Sahara Desert tours",
    "Morocco tour operator",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: homeTitle,

    description: homeDescription,

    url: siteUrl,

    siteName: "Moorish Tour",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: homeImage,
        width: 1521,
        height: 720,
        alt:
          "Travelers enjoying a Sahara Desert 4x4 adventure near the Merzouga dunes in Morocco",
      },
    ],
  },

  twitter: {
    site: "@MoorishTours",
    creator: "@MoorishTours",
    card: "summary_large_image",

    title: homeTitle,

    description: homeDescription,

    images: [
      homeImage,
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    "@id": `${siteUrl}/#website`,

    url: siteUrl,

    name: "Moorish Tour",

    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };

  // Preferred search thumbnail: this is the same real photo used in the homepage hero.
  // Keep the business logo in the TravelAgency schema for brand identification.
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: `${siteUrl}/`,
    name: homeTitle,
    description: homeDescription,
    primaryImageOfPage: {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#primaryimage`,
      url: homeImage,
      contentUrl: homeImage,
      width: 1521,
      height: 720,
      caption: "Travelers on a guided Sahara Desert tour near Merzouga, Morocco",
    },
    isPartOf: { "@id": `${siteUrl}/#website` },
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en",
  };

  return (
    <main className="bg-white" data-page-type="homepage" >

      {/* =====================================================
          HERO
      ===================================================== */}
      <section id="hero">
        <BannerHome />
      </section>

      {/* =====================================================
          SEARCH
      ===================================================== */}
      <section
        id="tour-search"
        className="relative z-20"
        aria-label="Search Morocco tours and destinations"
      >
        <div className="relative z-40 -mt-7 sm:-mt-7">
          <HomeTravelSearch />
        </div>
      </section>

      {/* =====================================================
          POPULAR TOURS
      ===================================================== */}
      <section
        id="popular-tours"
        aria-labelledby="popular-tours-heading"
      >
        <Card />
      </section>

      {/* =====================================================
          DESTINATIONS
      ===================================================== */}
      <section
        id="morocco-destinations"
        aria-labelledby="morocco-destinations-heading"
      >
        <Destinations />
      </section>

      {/* =====================================================
          REVIEWS
      ===================================================== */}
      <section
        id="traveler-reviews"
        aria-labelledby="traveler-reviews-heading"
      >
        <TestimonialsSection />
      </section>

      {/* =====================================================
          WHY MOROORISH TOUR
      ===================================================== */}
      <section
        id="why-moorish-tour"
        aria-labelledby="why-moorish-tour-heading"
      >
        <WhySection />
      </section>

      {/* =====================================================
          BLOG
      ===================================================== */}
      <section
        id="morocco-travel-guides"
        aria-labelledby="morocco-travel-guides-heading"
      >
        <BlogSection />
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section
        id="plan-your-morocco-trip"
        aria-labelledby="plan-your-morocco-trip-heading"
      >
        <CtaBanner />
      </section>

      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([websiteSchema, homePageSchema]).replace(/</g, "\\u003c"),
        }}
      />

    </main>
  );
}