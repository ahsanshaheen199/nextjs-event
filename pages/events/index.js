import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../helpers/api-util";

export default function EventListpage(props) {
    const allEvents = props.events;
    const router = useRouter();

    const findEventsHandler  = (year,month) => {
        router.push(`/events/${year}/${month}`)
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={allEvents} />
        </Fragment>
    )
}

export async function getStaticProps() {
    const allEvents = await getAllEvents();

    return {
        props: {
            events: allEvents
        },
        revalidate: 60
    }
}