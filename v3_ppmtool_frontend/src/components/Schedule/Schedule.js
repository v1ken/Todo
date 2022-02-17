import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./Schedule.css";
import { Link } from "react-router-dom";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// const localizer = momentLocalizer(moment)

// const MyCalendar = props => (
//   <div>
//     <Calendar
//       localizer={localizer}
//       events={myEventsList}
//       startAccessor="start"
//       endAccessor="end"
//       style={{ height: 500 }}
//     />
//   </div>

const events = [
  {
    title: "Submit MVP",
    allDay: true,
    start: new Date(2022, 1, 15),
    end: new Date(2022, 1, 16),
  },
];

function Schedule() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleGetProject() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="Schedule">
      <h1 className="display-4">Calendar</h1>
      <p className="lead text-center">View Project Tasks by Project Id</p>
      <div>
        <input
          className="btn-sm"
          type="text"
          placeholder="Project ID"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <button className="btn-sm btn-primary col-1" onClick={handleGetProject}>
          View Project
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "20px" }}
      />
      <Link to={"/dashboard"} className="btn-sm btn-success col-2">
        Back to Projects
      </Link>
    </div>
  );
}

export default Schedule;
