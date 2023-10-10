import React from "react";
import "../styles/home.scss";
import first from "../assets/first.webp";

const Home = () => {
  return (
    <>
      <div className="home">
        <div>
          <h1>Make Your business grow</h1>
          <p>
            Our Mission is to make information technology an asset for every
            business, to grow a market leader by consistently surpassing our
            customer's expectations; equipping them with the best of breed
            technology solutions, to enhance our products and services, and to
            learn from our customers. Our mission is to make web & mobile
            technology solutions affordable for everyone.
          </p>
          <div className="btn-container">
            <button className="btn-read">Read More</button>
            <button className="btn-contact">
              <a href="mailto:deepanksha1992@gmail.com">Contact us </a>
            </button>
          </div>
        </div>
        <img src={first} alt="Graphics" />
      </div>
    </>
  );
};

export default Home;
