import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Embed from "../components/Embed";

function About() {
    return(
        <div>
            <Navbar />
            <div className="container content">
            <div className="row">
                <div className="col-md-12">
                <h2 className="juliusFont">Resume</h2>
                </div>
            </div>
            {/* Resume */}
            <div>
            <Embed />

                <div className="row margintop">

                <div className="col-md-12">
                    <ul className="btnList">
                    <li><a className="btn" href="/" role="button">Back to Homepage</a></li>
                    </ul>
                </div>

                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;