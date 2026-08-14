import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footerContent}>
            <span>&copy; {new Date().getFullYear()} Company Platform Inc. All rights reserved.</span>
            <span className={styles.footerLabel}>
                Build verified with
                <span className={styles.dotIcon} />
                React & ASP.Net
            </span>
        </div>
    )
}