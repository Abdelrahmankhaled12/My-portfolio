import video from '../../assets/video/video.mp4'
import './style.scss'

const BackgroundVideo = () => {
    return (
        <div className="background">
            <video loop autoPlay muted id="video">
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default BackgroundVideo