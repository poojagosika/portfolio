import "./Contact.css"

const Contact = () => {
    return(
        <div className="contact">
            <h2>Contact Me!</h2>
            <form action="" className="my-from">
                <label text="text">Full name</label>
                <input type="text" placeholder="Enter Your Name"/>
                <label text="text">Email</label>
                <input type="text" placeholder="Enter Your Email"/>
                <label text="text">Message</label>
                <input type="text" placeholder="Enter Your Message" className="message-box"/>
                <button className="contact-button"><a href="mailto:pooja.gosika@gmail.com">Submit</a></button>
            </form>
        </div>
    )
}

export default Contact