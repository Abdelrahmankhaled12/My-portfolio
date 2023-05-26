import HeaderTitle from "./HeaderTitle";
import Title from "./Title";

function Contact() {
    return (
        <div className="contact pt-5 pb-5 wow animate__fadeInUp" data-wow-duration="2s" id="contact">
            <Title title="Contact" icon="fa-solid fa-envelope me-1"/>
            <HeaderTitle title="Let's Work " span="Together!"/>
            <form action="" className="mt-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                            <label htmlFor="floatingInput">Your Full Name</label>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                            <label htmlFor="floatingInput">Your Email Address</label>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                            <label htmlFor="floatingInput">Your Number Phone</label>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" cols={30} rows={10} defaultValue={""} />
                            <label htmlFor="floatingTextarea">Write your message here...</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="buttonStyle mt-4">Send Message</button>
            </form>
        </div>
    )
}

export default Contact;