import video from "../video/video.mp4"

function Background() {
    return (
        <>
            <div className="background">
                <video loop autoPlay muted id="video">
                    <source src={video} type="video/mp4" />
                </video>
            </div>

        </>
    )
}

export default Background;