import React from "react";
import Doctor from "./doctor-group.png";
import SolutionStep from "./SolutionStep";
import "./About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to HeartCare Plus, a leading cardiology hospital dedicated to your heart’s health. Our team of expert cardiologists provides advanced diagnostics, personalized treatments, and compassionate care. Whether it's preventive care, emergency services, or long-term management, we’re committed to keeping your heart strong and healthy.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Cardiologist"
          description="Select from our highly qualified cardiologists specializing in heart health, diagnostics, and treatment. We ensure you receive expert care tailored to your cardiac needs."
        />

        <SolutionStep
          title="Schedule Your Consultation"
          description="Pick a convenient time for your appointment. Our cardiology team is ready to guide you with care, comfort, and medical excellence every step of the way."
        />

        <SolutionStep
          title="Receive Heart-Focused Care"
          description="Get comprehensive cardiac care—from diagnostics to treatment plans—designed specifically for your heart health. Our mission is to help you lead a stronger, healthier life."
        />

      </div>
    </div>
  );
}

export default About;