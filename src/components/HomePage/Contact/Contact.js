import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="d-flex justify-content-center mt-5 pt-5">
            <div className="w-75 rounded contact-container">
                <div className="text-center">
                    <h5 className="mt-5 fw-bold textStyle">CONTACT US</h5>
                    <h1 className="my-5 text-white">Always Connect With Us</h1>
                </div>
                <form className="w-50 m-auto">
                    <div className="mb-3 text-secondary">
                        <input type="email" className="form-control p-3" placeholder="Email Address" />
                    </div>
                    <div className="mb-3 text-secondary">
                        <input type="password" className="form-control p-3" placeholder="Subject" />
                    </div>
                    <div className="form-floating text-secondary">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Comments</label>
                    </div>
                    <div className="d-flex justify-content-center my-5">
                        <button type="submit" className="btn buttonStyle">SUBMIT</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;