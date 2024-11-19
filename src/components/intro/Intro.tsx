import video from '../../assets/video/video2.mp4'
import './style.scss'

const Intro = () => {
    return (
        <div className="intro">
            <video loop autoPlay muted id="video">
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Intro