export async function getAllEvents() {
    const response = await fetch('https://nextjs-event-baaab-default-rtdb.firebaseio.com/events.json')
    const data = await response.json();

    const allEvents = [];
    for ( let eventKey in data ) {
        allEvents.push({
        id: eventKey,
        ...data[eventKey]
        })
    }

    return allEvents;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    const featureEvents = allEvents.filter( event => event.isFeatured != false );

    return featureEvents;
}

export async function getEventById( eventId ) {
    const allEvents = await getAllEvents();

    const event = allEvents.find((event) => event.id === eventId);

    return event;
}