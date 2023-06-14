function MenuButton() {
    return (
        <>
            <button className="btnMenu" onClick={() => {
                document.getElementById("menuButton").classList.remove("hide");
                document.getElementById("body").classList.add("opacityHide");

            }}><i className="fa-solid fa-bars-staggered"></i></button>
            <div className="menuButton hide" id="menuButton">
                <div className="container">
                    <div className="headerMenu d-flex justify-content-between align-items-center mt-3 ms-2 pe-2">
                        <h5>Menu</h5>
                        <button className="btnclose" onClick={() => {
                            document.getElementById("menuButton").classList.add("hide");
                            document.getElementById("body").classList.remove("opacityHide");

                        }}><i className="fa-solid fa-x"></i></button>
                    </div>
                    <div className="bodyMenu mt-5">
                        <div>
                            <ul className="ul-1">
                                <li onClick={() => {
                                    document.getElementById("menuButton").classList.add("hide");
                                    document.getElementById("body").classList.remove("opacityHide");
                                }}><a href="#home" className="active mt-4"><i className="fa-solid fa-house me-1" /> Home</a></li>
                                <li onClick={() => {
                                    document.getElementById("menuButton").classList.add("hide");
                                    document.getElementById("body").classList.remove("opacityHide");
                                }}><a href="#about" className="mb-4 mt-4"><i className="fa-solid fa-user me-1" /> About</a></li>
                                <li onClick={() => {
                                    document.getElementById("menuButton").classList.add("hide");
                                    document.getElementById("body").classList.remove("opacityHide");
                                }}><a href="#resume" className="mb-4 mt-4"><i className="fa-solid fa-briefcase me-1" /> Resume</a>
                                </li>
                                <li onClick={() => {
                                    document.getElementById("menuButton").classList.add("hide");
                                    document.getElementById("body").classList.remove("opacityHide");
                                }}><a href="#services" className="mb-4 mt-4"><i className="fa-solid fa-server me-1" /> Services</a>
                                </li>
                                <li onClick={() => {
                                    document.getElementById("menuButton").classList.add("hide");
                                    document.getElementById("body").classList.remove("opacityHide");
                                }}><a href="#skills" className="mb-4 mt-4"><i className="fa-solid fa-wand-magic-sparkles me-1" />
                                        Skills</a>
                                </li>
                                <li onClick={() => {
                                    document.getElementById("menuButton").classList.add("hide");
                                    document.getElementById("body").classList.remove("opacityHide");
                                }}><a href="#portfolio" className="mb-4 mt-4"><i className="fa-solid fa-table-cells me-1" />
                                        Portfolio</a></li>
                                <li onClick={() => {
                                    document.getElementById("menuButton").classList.add("hide");
                                    document.getElementById("body").classList.remove("opacityHide");
                                }}><a href="#contact"><i className="fa-solid fa-envelope me-1" /> Contact</a></li>
                            </ul>
                            <div className="footer mt-5">
                                <p>Social</p>
                                <div className="icons d-flex">
                                    <div className="icon me-4">
                                        <a href="https://www.facebook.com/profile.php?id=100012970092361"><i className="fa-brands fa-facebook-f" /></a>
                                    </div>
                                    <div className="icon me-4">
                                        <a href="https://www.linkedin.com/in/abdelrahman-khaled12/"><i className="fa-brands fa-linkedin-in" /></a>
                                    </div>
                                    <div className="icon">
                                        <a href="https://github.com/Abdelrahmankhaled12"><i className="fa-brands fa-github" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


export default MenuButton;