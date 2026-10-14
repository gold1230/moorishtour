import ContactHero from "./heroContact";
import ContactPlanningSection from "./palnningSection";
import ContactMoorishTour from "./cotactMo";
import MoroccoDestinations from "./destination";
import MoroccoTripPlanningProcess from "./whathappen";
import PopularMoroccoTours from "./populartour";
import ContactPlanningFAQ from "./faqscontact";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactPlanningSection />
      <ContactMoorishTour />
      <MoroccoDestinations />
      <MoroccoTripPlanningProcess />
      <PopularMoroccoTours/>
      <ContactPlanningFAQ />
    </>
  );
}