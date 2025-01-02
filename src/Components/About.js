import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center mb-4">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingMission">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseMission"
                aria-expanded="true"
                aria-controls="collapseMission"
              >
                Our Mission
              </button>
            </h2>
            <div 
              id="collapseMission"
              className="accordion-collapse collapse show"
              aria-labelledby="headingMission"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Empowering innovation and excellence.</strong> We aim to deliver top-notch solutions that drive progress and make a lasting impact. By leveraging technology and fostering collaboration, we seek to achieve milestones that inspire and innovate.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingVision">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseVision"
                aria-expanded="false"
                aria-controls="collapseVision"
              >
                Our Vision
              </button>
            </h2>
            <div
              id="collapseVision"
              className="accordion-collapse collapse"
              aria-labelledby="headingVision"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Shaping the future of technology.</strong> Our vision is to be a leader in the industry, creating innovative products and solutions that redefine what's possible. We strive to set new standards and be a beacon of excellence.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTeam">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTeam"
                aria-expanded="false"
                aria-controls="collapseTeam"
              >
                Meet Our Team
              </button>
            </h2>
            <div
              id="collapseTeam"
              className="accordion-collapse collapse"
              aria-labelledby="headingTeam"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Dedicated and passionate professionals.</strong> Our team consists of experts from diverse backgrounds, all working together to bring our vision to life. Collaboration, innovation, and commitment define our approach to success.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingValues">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseValues"
                aria-expanded="false"
                aria-controls="collapseValues"
              >
                Our Values
              </button>
            </h2>
            <div
              id="collapseValues"
              className="accordion-collapse collapse"
              aria-labelledby="headingValues"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Integrity, innovation, and inclusion.</strong> These are the cornerstones of our culture. We believe in doing the right thing, thinking outside the box, and ensuring everyone feels valued and empowered.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
