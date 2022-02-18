import styles from './landing.module.scss';
import btnstyle from './designbutton.module.scss';

export interface LandingPageProps {
    imgsrc?         :string;
    title?          :string;
    text?           :string;
    btnaction1?     :string;
    btnaction1cb?   :() => void;
    btnaction2?     :string;
    btnaction2cb?   :() => void;
}

/**
 * A resuable landing page for Next.js 
 */
export default function LandingPageMain(props :LandingPageProps) {
    return (
        <main id={styles.landingContainer}>
            <div className={styles.content}>
                { props.imgsrc &&
                    <div className={styles.imagecontent}>
                        <img className={styles.image} src={props.imgsrc} />
                    </div>
                }
                <div className={styles.textcontent}>
                    { props.title &&
                        <h3>{props.title}</h3>
                    }
                    { props.text &&
                        <p>{props.text}</p>
                    }

                    <div className={styles.buttonContainer}>
                        {  props.btnaction1 &&
                            <button id={btnstyle.Designbutton}
                                onClick={props.btnaction1cb}>
                                {props.btnaction1}
                            </button>
                        }
                        {  props.btnaction2 &&
                            <button id={btnstyle.Designbutton}
                                onClick={props.btnaction2cb}>
                                {props.btnaction2}
                            </button>
                        }
                    </div>
                </div>
            </div>
            
        </main>
    )
}
