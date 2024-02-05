import React from "react"

const Education = () => (
    <section className="resume-section" id="education">
        <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">National Institute of Technology, Kurukshetra</h3>
                    <div className="subheading mb-3">Bachelor of Technology</div>
                    <div>Electronics and Communication Engineering</div>
                    <p>CGPA: 8.36</p>
                </div>
                <div className="flex-shrink-0">
                    <span className="text-primary">July 2016 - June 2020</span>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Narayana High School</h3>
                    <div className="subheading mb-3">
                        Board of Intermediate Education,AndhraPradesh</div>
                    <p>Percentage: 98.87</p>
                </div>
                <div className="flex-shrink-0">
                    <span className="text-primary">2014-2016</span>
                </div>
            </div>
        </div>
    </section>
);

export default Education;
