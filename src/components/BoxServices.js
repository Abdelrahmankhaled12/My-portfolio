function BoxServices(props) {
    return (
        <div className="box mt-4 animate__fadeInUp" data-wow-duration="2s">
            <div className="head d-flex justify-content-between align-items-center mb-2">
                <h4>{props.title}</h4>
                <i className="fa-solid fa-code" />
            </div>
            <p>{props.description}</p>
        </div>
    )
}


export default BoxServices;