import { Fragment } from "react";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

export default function HomePage({ events }) {
  return (
    <Fragment>
      <EventList items={events} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const featureEvents = await getFeaturedEvents();

  return {
    props: {
      events: featureEvents
    }
  }
}
