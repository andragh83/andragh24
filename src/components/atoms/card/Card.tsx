import styles from '../card/styles.module.css'
interface Props {
    title: string
    body: string
}

const Card = ({ title, body }: Props) => {
    return (
        <li className={styles.linkCard}>
            <div>
                <h2>
                    {title}
                    <span>&rarr;</span>
                </h2>
                <p>{body}</p>
            </div>
        </li>
    )
}

export default Card
