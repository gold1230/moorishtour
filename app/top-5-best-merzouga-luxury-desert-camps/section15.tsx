import { ArticleSection, ArticlePicture, TravelNote, TravelQuote, GuideTable, BulletList, FAQItems } from "./ArticleElements";
import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";
import CampImage from "@/public/blog/content/sahara-desert-camp-experience-near-erg-chebbi-dunes-merzouga.jpg";
import SunsetCampImage from "@/public/blog/content/traditional-morocco-desert-camp-at-sunset-in-merzouga.jpg";
import DunesImage from "@/public/blog/content/camel-riders-crossing-erg-chebbi-dunes-merzouga-morocco.jpg";
import RoadImage from "@/public/blog/content/4x4-vehicle-exploring-desert-landscapes-around-merzouga-and-erg-chebbi.jpg";
export default function Section15() {
 return (
  <ArticleSection id="merzouga-luxury-desert-camp-prices-and-booking-advice" label="Plan your budget" title="Merzouga Luxury Desert Camp Prices and Booking Advice">
  <p className="mt-5 text-lg leading-8 text-gray-700">The cost of a Merzouga luxury desert camp can change depending on travel dates, tent category, how many people share a tent and the services included. A private dome, a larger suite or a royal bungalow may cost more than a standard luxury tent. You may also pay separately for a private 4×4 transfer, extra activities or transport from Marrakech, Fes or Errachidia.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">Instead of relying on a fixed price found in an old article, ask for a current quote that shows the total amount for your group. Compare offers with the same inclusions. One property may include dinner and breakfast while another gives a room-only rate. Another may include a short camel ride but charge more for a vehicle transfer. The lowest advertised price is not always the best value.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">Before you pay, confirm the name of the property, room type, travel dates, check-in meeting point, pickup service, deposit amount and cancellation rules. Keep a copy of your confirmation and the local contact number. If the camp is part of a private Morocco tour package, ask your organizer how the booking fits into the full itinerary and who is responsible for transport on the day of arrival.</p>
  <GuideTable headings={["Cost factor", "Why it matters"]} rows={[["Travel season", "Spring and autumn often have stronger demand"], ["Tent category", "Dome, superior, suite and bungalow categories vary"], ["Number of guests", "Private rooms and small parties change per-person cost"], ["Meals and activities", "Dinner, breakfast, camels or sandboarding may be separate"], ["Road transfer", "Local 4×4 pickup differs from a long transfer from Fes or Marrakech"]]} />
  <div className="mt-7 flex flex-wrap gap-3">
    <Link href="/plan-your-morocco-tour" className="inline-flex rounded-lg border border-amber-300 bg-[#fffaf4] px-4 py-3 text-sm font-bold text-amber-800 transition hover:bg-amber-100">Plan a custom Sahara tour with Moorish Tour →</Link>
    <Link href="/contact/" className="inline-flex rounded-lg border border-amber-300 bg-[#fffaf4] px-4 py-3 text-sm font-bold text-amber-800 transition hover:bg-amber-100">Contact the local team →</Link>
  </div>
</ArticleSection>
 );
}
