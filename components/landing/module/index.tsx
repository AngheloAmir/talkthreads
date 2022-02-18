import styles from './landing.module.scss';

/**
 * A resuable landing page for Next.js 
 */
export default function LandingPageMain() {
    return (
        <main id={styles.landingContainer}>
            <div className={styles.content}>
                <div className={styles.imagecontent}>
                    <img className={styles.image} src='brandicon.png' />
                </div>
                <div className={styles.textcontent}>
                    <h3>asdsda</h3>
                    <p>asdsadasdas</p>
                </div>
            </div>
        </main>
    )
}
