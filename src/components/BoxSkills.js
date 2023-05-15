function BoxSkills(props) {
    return (
        <div className="col-lg-3 col-md-3 col-sm-6  mb-4 wow animate__fadeInUp" data-wow-duration="2s">
            <div className="box text-center">
                <div className="img">
                    <img src={props.image} alt="" />
                </div>
                <p>{props.skill}</p>
            </div>
        </div>
    )
}

export default BoxSkills;