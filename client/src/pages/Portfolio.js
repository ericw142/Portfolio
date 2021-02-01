import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Portfolio() {
    return(
        <div>
            <Navbar />
            <div className="container content">
                {/* First Row */}
                <div className="row">
                <div className="col">
                    <h1 className="juliusFont">Portfolio</h1>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="card" >
                    <img className="card-img-top" src="https://github.com/Terd47/smart-events-app/raw/master/Assets/images/screenshot.png?raw=true" alt="SmartEvents"></img>
                    <div className="card-body">
                        <h5 className="card-title">SmartEvents</h5>
                        <p className="card-text ubuntuFont">An all in one planner site that includes weather, news, sports events and holidays.</p>
                        <a href="https://github.com/Terd47/smart-events-app">To GitHub Repository</a>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="card" >
                    <img src="https://images.unsplash.com/photo-1516101922849-2bf0be616449?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80" alt="stockimgcoding" className="card-img-top"></img>
                    <div className="card-body">
                        <h5 className="card-title">ReadMe Generator</h5>
                        <p className="card-text ubuntuFont">A command-line application that takes your input and generates a README.md file.</p>
                        <a href="https://github.com/ericw142/Professional-README-Generator">To GitHub Repository</a>
                    </div>
                    </div>
                </div>
                </div>
                {/* Second Row */}
                <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="card" >
                    <img className="card-img-top" src="https://github.com/ericw142/PasswordGenerator/raw/master/Assets/03-javascript-homework-demo.png?raw=true" alt="passwordgenerator"></img>
                    <div className="card-body">
                        <h5 className="card-title">Password Generator</h5>
                        <p className="card-text ubuntuFont">A web application that generates a random password based on user input.</p>
                        <a href="https://github.com/ericw142/PasswordGenerator">To GitHub Repository</a>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="card" >
                    <img src="https://github.com/ericw142/Workday_Schedule/raw/master/Assets/images/scheduler.png?raw=true" alt="workdayschedule" className="card-img-top"></img>
                    <div className="card-body">
                        <h5 className="card-title">Workday Schedule</h5>
                        <p className="card-text ubuntuFont">A schedule application that dynamically updates color scheme depending on the time.</p>
                        <a href="https://github.com/ericw142/Workday_Schedule">To GitHub Repository</a>
                    </div>
                    </div>
                </div>
                </div>
                {/* Third Row */}
                <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="card" >
                    <img className="card-img-top" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="stockimgcoding"></img>
                        <div className="card-body">
                        <h5 className="card-title">Employee Tracker</h5>
                        <p className="card-text ubuntuFont">A command line application that allows you to interact with an Employee database quickly and conveniently.</p>
                        <a href="https://github.com/ericw142/EmployeeTracker">To GitHub Repository</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="card" >
                    <img src="https://github.com/ericw142/Weather_Dashboard/raw/master/Assets/images/dashboard.png?raw=true" alt="weatherdashboard" className="card-img-top"></img>
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text ubuntuFont">A weather forecast site that allows the user to search by city, and saves previous searches for ease of use.</p>
                            <a href="https://github.com/ericw142/Weather_Dashboard">To GitHub Repository</a>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio;