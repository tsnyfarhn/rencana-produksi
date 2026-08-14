import styles from "./CreatePlanning.module.css";

export default function CreatePlanning() {
    return (
        <div className={styles.pageHeader}>
            <div className={styles.headerTop}>
                <div>
                    <h1 className={styles.pageTitle}>
                        Create Planning
                    </h1>

                    <p className={styles.pageDesc}>
                        Create New Planning.
                    </p>
                </div>
            </div>
        </div>
    );
}