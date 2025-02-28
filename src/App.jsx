import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import EventCard from "./components/EventCard";
import events from "./assets/events";
import ScrollToTopButton from "./components/ScrollToTopButton";
function App() {
    const scrollToTopBtnRef = useRef(null);
    const topNavRef = useRef(null);
  return (
    <div className="App">
      <Navbar topNavRef={topNavRef}/>
      <div className="events-container" id="events-container">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            image_URL={event.image_URL}
            time={event.time}
            location={event.location}
            more_Info_Link={event.more_Info_Link}
            add_to_Calendar_Link={event.add_to_Calendar_Link}
          />
        ))}
      </div>
      <ScrollToTopButton scrollToTopBtnRef={scrollToTopBtnRef} scrollToTargetRef={topNavRef}/>
    </div>
  );
}

export default App;
