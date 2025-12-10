
import { Form, Link } from "react-router-dom"
import emailjs from "emailjs-com";
import { useState } from "react";

const ContactForm = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_87vr8sz",
            "template_k6nh2kz",
            form,
            "a5Sb8Lr7sTox9Curn"
        )
            .then(() => {
                alert("Message sent successfully!");
            })
            .catch((err) => {
                alert("Failed to send message");
                console.log(err);
            });
    };

    return (
        <Form onSubmit={sendEmail}>
            <div className="row pt-0 pb-0 ">
                <div className="form-group col-12 pt-4 pt-lg-0 pt-md-0">
                    <input name="name" onChange={handleChange} type="text" className="form-control" id="inputName"
                        placeholder="Enter your full name" />
                </div>
                <div className="form-group col-12 pt-4 pt-lg-0 pt-md-0">
                    <input name="email" onChange={handleChange} type="email" className="form-control" id="inputEmail"
                        placeholder="Enter your email" />
                </div>
            </div>
            <div className="row pt-0">
                <div className="form-group col-12 pt-4 pt-lg-0 pt-md-0">
                    <input name="phone" onChange={handleChange} type="text" className="form-control" id="inputName"
                        placeholder="Moible Number" />
                </div>

            </div>
            <div className="form-row message-group w-100 pb-0 pb-lg-4 pb-md-4">
                <div className="form-group col-lg-12 py-3 py-lg-0 py-md-0">
                    <textarea name="message" onChange={handleChange} className="form-control" id="inputMessage" rows="5"
                        placeholder="Enter your message"></textarea>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12 ">
                    <button type="submit" className="submit_btn">Send Message</button>
                </div>
            </div>
        </Form>
    )
}

export default ContactForm