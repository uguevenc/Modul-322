import React, { useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import EventHome from "./components/EventHome";
import EventExamples from "./components/EventExamples";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

/**
 * App component
 * @author Peter Rutschmann
 * @returns {Element}
 * @constructor
 */

const App = () => {
    const [events, setEvents] = useState([
        {
            name: "Freiluft Kino",
            type: "Outdoor",
            public: true,
            participants: 150,
        }
    ]);

    const addEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    return (
        <>
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/examples">Ideen</Link>
                <Link to="/event_list">Events erfassen</Link>
                <Link to="/form">Veranstaltungen</Link>
            </nav>
            <Routes>
                <Route path="/" element={<EventHome />} />
                <Route path="/examples" element={<EventExamples />} />
                <Route path="/event_list" element={<EventList />} />
                <Route path="/form" element={<EventForm />} />
            </Routes>
        </Router>
        
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                <h1>Event-Planer</h1>
                <EventHome />
                <hr />
                <EventExamples />
                <hr />
                <EventForm onAddEvent={addEvent} />
                <hr />
                <EventList events={events} />
        </div>
        </>
    );
};

export default App;