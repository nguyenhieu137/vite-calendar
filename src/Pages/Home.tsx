//import React from 'react';
import CalendarComponent from '../Components/calendarComponent';

const events = [
  {
    id: '1',
    title: 'All Day Event',
    start: new Date('2024-06-01T00:00:00'),
    end: new Date('2024-06-01T23:59:59'),
    color: "#32a852"
  },
  {
    id: '2',
    title: 'Long Event',
    start: new Date('2024-06-07T09:00:00'),
    end: new Date('2024-06-10T17:00:00'),
    color: "#2b20bd"
  },
  {
    id: '3',
    title: 'Meeting',
    start: new Date('2024-06-03T10:30:00'),
    end: new Date('2024-06-03T12:30:00'),
    color: "#bf2259"
  },
  {
    id: '4',
    title: 'Meeting techvify D1',
    start: new Date('2024-06-08T10:30:00'),
    end: new Date('2024-06-08T12:30:00'),
    color: "#bf2251"
  },
  // More events...
];

function Home () {
  return (
    <div className='home-container w-full flex justify-center'>
      <div className="calender-container w-[60%]">
        <CalendarComponent events={events} />
      </div>  
    </div>
  )
}

export default Home;
