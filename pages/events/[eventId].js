import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";

export default function EventDetailspage(props) {

    const event = props.event;

    if( !event ) {
        return (
            <ErrorAlert>No Event found</ErrorAlert>
        )
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}

export async function getStaticProps( context ) {
    const eventId = context.params.eventId;

    const event = await getEventById(eventId);

    return {
        props: {
            event
        },
        revalidate: 30
    }
}

export async function getStaticPaths( ) {
    const featureEvents = await getFeaturedEvents();

    const paths = featureEvents.map( event => {
        return {
            params: {
                eventId: event.id
            }
        }
    } )


    return {
        paths,
        fallback: true
    }
}