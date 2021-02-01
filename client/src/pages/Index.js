import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Index() {
    return(
        <div>
            <Navbar />
            <div className="container content" id="main">

               {/* Jumbotron */}
                <div className="jumbotron jumbotron-fluid juliusFont">
                <div className="container">
                <h1 className="display-4">Eric Warshawsky</h1>
                <p className="lead">Welcome to my portfolio website. Please look around, check out my projects, and feel free to get in touch using the contact page.</p>
                </div>
                </div>

               
                <div className="row ubuntuFont margintop">
               {/* Content */}
                <div className="col-md-12">
                    <div className="row">
                    <div className="col-md-6">
                        
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Bio</h5>
                            <p className="card-text">I am a full stack web developer who is eager to work in a collaborative environment. 
                            Having previously worked as an English teacher, I approach my work with a sense of responsibility 
                            and flexibility. I am capable of quick problem solving and adapting to surprises. I enjoy the creative 
                            process of designing a webpage, and am skilled at adapting a webpage for both mobile and desktop users. 
                            </p>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Skills</h5>
                            <p className="card-text">Proficient in HTML, CSS, JS, Node.js, Express, Handlebars, MySQL, MongoDB, React.</p>
                        </div>
                        </div>

                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Certificate</h5>
                            <p className="card-text">Certificate in Full Stack Web Development from Johns Hopkins University.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Featured Projects */}
                    <div className="row margintop">
                    <div className="col-md-12">
                        <h2 className="juliusFont">Featured Projects</h2>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="card">
                        <img className="card-img-top" src="https://github.com/ericw142/employee_directory/raw/main/assets/homepage.png?raw=true" alt="EmployeeDirectory"></img>
                        <div className="card-body">
                            <h5 className="card-title">Employee Directory</h5>
                            <p className="card-text ubuntuFont">A React application that pulls from the randomuser.me API and displays a table of employees. Includes search functionality.</p>
                            <a href="https://github.com/ericw142/employee_directory">To GitHub Repository</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="card">
                        <img src="https://user-images.githubusercontent.com/68489432/101245890-f4f06680-36dd-11eb-8678-6bdb634b54eb.png" alt="Procourse" className="card-img-top"></img>
                        <div className="card-body">
                            <h5 className="card-title">Procourse</h5>
                            <p className="card-text ubuntuFont">A website for developers to connect and collaborate on open source projects, and view and manage their projects.</p>
                            <a href="https://github.com/ericw142/procourse">To GitHub Repository</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Buttons */}
                    <div className="row margintop">

                        

                    </div>

                    
                </div>
                </div>
                </div>
            <Footer />
        </div>
    )
}

export default Index;