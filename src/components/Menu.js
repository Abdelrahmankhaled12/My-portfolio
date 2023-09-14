function Menu() {
    return (
        <div className="menu text-center wow animate__fadeIn" data-wow-duration="3s">
            <ul>
                <li><a href="#home" className="active"><i className="fa-solid fa-house" /></a></li>
                <li><a href="#about" className="mb-3 mt-3"><i className="fa-solid fa-user" /></a></li>
                <li><a href="#resume" className="mb-3 mt-3"><i className="fa-solid fa-briefcase" /></a></li>
                <li><a href="#services" className="mb-3 mt-3"><i className="fa-solid fa-server" /></a></li>
                <li><a href="#skills" className="mb-3 mt-3"><i className="fa-solid fa-wand-magic-sparkles" /></a></li>
                <li><a href="#portfolio" className="mb-3 mt-3"><i className="fa-solid fa-table-cells" /></a></li>
                <li><a href="#contact"><i className="fa-solid fa-envelope" /></a></li>
            </ul>
        </div>

    )
}

export default Menu;