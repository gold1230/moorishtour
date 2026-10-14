import type { Metadata } from "next";
import Script from "next/script";

import BannerHome from "@/content/bannerhome";
import Card from "@/content/card";
import Destinations from "@/content/destinations";
import TestimonialsSection from "@/content/testimonialsection";
import WhySection from "@/content/whysection";
import CtaBanner from "@/content/ctabanner";
import BlogSection from "@/content/blogsection";
import HomeTravelSearch from "@/Compentents/searchBox";

const siteUrl = "https://moorishtour.com";

export const metadata: Metadata = {
  title:
    "Marrakech Desert Tours & Morocco Tours | Moorish Tour",

  description:
    "Discover Marrakech desert tours, tours from Marrakech and private Morocco tours with Moorish Tour, a local Morocco tour operator based in Marrakech.",

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
    title:
      "Marrakech Desert Tours & Morocco Tours | Moorish Tour",

    description:
      "Explore Marrakech desert tours, tours from Marrakech, Sahara Desert trips and private Morocco tours with local experts.",

    url: siteUrl,

    siteName: "Moorish Tour",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: `${siteUrl}/images/marrakech-desert-tours-home.jpg`,
        width: 1200,
        height: 630,
        alt:
          "Marrakech desert tours and Morocco tours with Moorish Tour",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Marrakech Desert Tours & Morocco Tours | Moorish Tour",

    description:
      "Explore Marrakech desert tours, tours from Marrakech and private Morocco tours with local experts.",

    images: [
      `${siteUrl}/images/marrakech-desert-tours-home.jpg`,
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",

    "@id": `${siteUrl}/#organization`,

    name: "Moorish Tour",

    url: siteUrl,

    logo: `${siteUrl}/images/logo.png`,

    description:
      "Moorish Tour is a local Morocco tour operator based in Marrakech, offering private and small-group Morocco tours, Marrakech desert tours, Sahara Desert trips and customized itineraries.",

    telephone: "+212661000064",

    email: "moorishtour@gmail.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Marrakech",
      addressCountry: "MA",
    },

    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },

    sameAs: [
      // Add your real social profiles here
      // "https://www.facebook.com/...",
      // "https://www.instagram.com/...",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    "@id": `${siteUrl}/#website`,

    url: siteUrl,

    name: "Moorish Tour",

    publisher: {
      "@id": `${siteUrl}/#organization`,
    },

    potentialAction: {
      "@type": "SearchAction",

      target: {
        "@type": "EntryPoint",

        urlTemplate:
          `${siteUrl}/tour?search={search_term_string}`,
      },

      "query-input":
        "required name=search_term_string",
    },
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

      <Script
        id="moorish-tour-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            organizationSchema
          ),
        }}
      />

      <Script
        id="moorish-tour-website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            websiteSchema
          ),
        }}
      />

    </main>
  );
}