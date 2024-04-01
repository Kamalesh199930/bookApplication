import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">
              Experience the joy of discovering your next favorite book with
              ease and convenience. Our user-friendly interface makes it simple
              to navigate through our extensive library, while seamless
              integration across all your devices ensures that your literary
              adventures are always at your fingertips. Whether you're a
              seasoned bookworm or a casual reader looking to explore new
              literary terrain, our book recommendation application is your
              ultimate companion on the journey of discovery. Download now and
              unlock a world of literary wonders waiting to be explored.
            </p>
            <p className="fs-17">
              But we're more than just a library of books—we're a community of
              passionate readers united by a shared love of literature. Join
              book clubs, engage in lively discussions, and connect with fellow
              bibliophiles who share your enthusiasm for the written word. Our
              app isn't just about finding your next great read; it's about
              fostering connections and forging friendships over a mutual
              appreciation for storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
