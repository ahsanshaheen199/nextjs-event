import Link from "next/link";
import classes from './button.module.css';

export default function Button(props) {
    const { children, link, onClick } = props;
    if( link ) {
        return (
            <Link href={link}>
                <a className={classes.btn}>{children}</a>
            </Link>
        )
    }

    return (
        <button onClick={onClick} className="classes.btn">{children}</button>
    )
}