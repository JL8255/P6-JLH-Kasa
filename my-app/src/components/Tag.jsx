import styles from '../style/Tag.module.scss'

function Tag({tag}) {
    return (
        <div className={styles.contentTag}>
            <p>{tag}</p>
        </div>
    )
}

export default Tag