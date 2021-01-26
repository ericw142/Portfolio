import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../utils/API";


class Contact extends Component {
    handleFormSubmit = event => {
        event.preventDefault();

        let email = event.target.email.value;
        let firstName = event.target.firstName.value;
        let lastName = event.target.lastName.value;
        let message = event.target.message.value;

        API.send({email, firstName, lastName, message})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <Navbar />
                    <div className="container content" id="contactForm">
                        <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                            <h2 className="juliusFont">Contact Me</h2>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={this.handleFormSubmit}>
    
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" required></input>
    
                            <label htmlFor="firstName">First Name: </label>
                            <input type="text" name="firstName" required></input>
    
                            <label htmlFor="lastName">Last Name: </label>
                            <input type="text" name="lastName" required></input>
    
                            <label htmlFor="message">Your Message Here: </label>
                            <textarea name="message" placeholder="Write something.." style={{height: 170}}></textarea>
                            <input type="submit" value="Submit"></input>
                            </form>
                        </div>
                        </div>
    
                    </div>
                <Footer />
            </div>
        )
    }
    
}

export default Contact;