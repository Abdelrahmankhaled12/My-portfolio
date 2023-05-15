function Title(props) {
    return (
        <div className="title">
            <i className={props.icon}/> {props.title}
        </div>
    )
}

export default Title;