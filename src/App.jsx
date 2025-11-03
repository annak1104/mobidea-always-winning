import "./App.css";
import AgendaSection from "./components/AgendaSection/AgendaSection.jsx";
import CommentsSection from "./components/CommentsSection/CommentsSection.jsx";
import EventLayout from "./components/EventLayout/EventLayout.jsx";
import EventSection from "./components/EventSection/EventSection.jsx";
import FAQSection from "./components/FAQSection/FAQSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import MediaPartners from "./components/MediaPartners/MediaPartners.jsx";
import SecurePlace from "./components/SecurePlace/SecurePlace.jsx";
// import MingleSection from "./components/MingleSection/MingleSection.jsx";
import SecureSpot from "./components/SecureSpot/SecureSpot.jsx";
import SponsorsSection from "./components/SponsorsSection/SponsorsSection.jsx";
import TelegramInvite from "./components/TelegramInvite/TelegramInvite.jsx";
import VenueSection from "./components/VenueSection/VenueSection.jsx";
import {VideoSection } from "./components/VideoSection/VideoSection.jsx";
import WhyApt101Club from "./components/WhyApt101Club/WhyApt101Club.jsx";
// import WinnersSection from "./components/WinnersSection/WinnersSection.jsx";

function App() {
  return (
    <>
      <VideoSection />
      <Header />
      <div id="when-section">
        <EventSection />
      </div>
      <SponsorsSection />
      <CommentsSection />
      <SecurePlace />
      <div id="why-section">
        <WhyApt101Club />
      </div>
      
       {/* <WinnersSection /> */}
      
      {/* <div id="who-section">
        <MingleSection />
      </div> */}
      
      <div id="agenda-section">
        <AgendaSection />
      </div>
      <div id="venue-section">
        <EventLayout />
      </div>
      <div id="what-section" className="mt-20">
        <VenueSection />
      </div>
      <div className="mt-20"><TelegramInvite /></div>
      
      <div id="faqs-section">
        <FAQSection />
      </div>
      <SecureSpot />
      <MediaPartners />
      <div id="contact-section">
        <Footer />
      </div>
    </>
  );
}

export default App;
