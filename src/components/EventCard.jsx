import React from 'react'

const EventCard = ({ title, image_URL, time, location,more_Info_Link,add_to_Calendar_Link }) => {
    return (
        <div className='event-card'>
                <img src={image_URL} alt={title} />
                <h2>{title}</h2>
                <p><strong>Time:</strong> {time}</p>
                <p><strong>Location:</strong>{location}</p>
                <div className="action-links">
                    <a href={more_Info_Link} className='view-event'>View Event</a>
                    <a href={add_to_Calendar_Link} className='add-to-calendar'>Add to Calendar</a>
                </div>
        </div>
    )
}

export default EventCard