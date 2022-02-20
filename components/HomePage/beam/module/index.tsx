import React from 'react';
import styles from './beam.module.scss';


export interface BeamProps {
    imagepath   :string;
    title       :string;
    text        :string;
    isReverse?  :boolean;
}

/**
 * A reusable horizontal card like element (component) for Next.js. This 
 * is optimize with the current project. This is also a reactive design where the 
 * the position of the image will be same in the mobile screen (even isReverse is true).
 */
export default function Beam(props :BeamProps) {
    const [isMobile, setMobile] = React.useState(true);

    React.useEffect(() => {
        function isMobileWidth() {
            if(window.innerWidth <= 580)
                setMobile(true);
            else
                setMobile(false);
        }
        isMobileWidth();
        window.addEventListener('resize', isMobileWidth);
        return () => window.removeEventListener('resize', isMobileWidth);
    }, []);

    return (
        <div id={styles.Beam}>
            { !props.isReverse || isMobile?
            <>
                <div className={styles.imageContainer}>
                    <img src={props.imagepath} alt={props.imagepath} />
                </div>
                <div className={styles.textContainer}>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </>
            :
            <>
                <div className={styles.textContainer}>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
                <div className={styles.imageContainer}>
                    <img src={props.imagepath} alt={props.imagepath} />
                </div>
            </>
            }
        </div>
    )
}
