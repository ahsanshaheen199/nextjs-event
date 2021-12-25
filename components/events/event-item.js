import Link from "next/link";
import classes from './event-item.module.css';

export default function EventItem(props) {
    const { id, title, image, date, location } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        date: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = location.replace(', ','\n');

    return (
        <li className={classes.item}>
            <img className={classes.img} src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Link href={`/events/${id}`}>Explore Event</Link>
                </div>
            </div>
        </li>
    )
}