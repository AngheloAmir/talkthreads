import BeamComponent from './module';
import landingpagejson from '../../../app/data/landingpage.json';

export default function BeamContainer() {
    return (
        <div style={{marginTop: '1.5rem'}}>
        { landingpagejson.beams.map((item, index) => {
            return (
                <div key={index}>
                    <BeamComponent
                        imagepath={item.imagepath}
                        title={item.title}
                        text={item.text} 
                        isReverse={item.reverse}    
                    />
                </div> 
                )
            })
        }
        </div>
    )
}
