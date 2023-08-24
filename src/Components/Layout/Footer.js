import React from "react";
import { Container } from "react-bootstrap";

const Footer = (props) => {
  return (
    <footer className="bg-info p-3 d-flex justify-content-around align-items-center">
      <p className="display-4 fw-bold text-white">The Generics</p>
      <div>
        <a href="https://youtube.com" className="m-3">
          <img
            src="https://img.freepik.com/free-icon/youtube_318-566773.jpg?w=2000"
            alt="youtube logo"
             style={{ width: "30px", height: "30px" }}
          />
        </a>
        <a href="https://spotify.com" className="m-3">
          <img
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-pink-logo-33.png"
            alt="youtube logo"
             style={{ width: "30px", height: "30px" }}
          />
        </a>
        <a href="https://facebook.com" className="m-3">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/facebook-icon-white-png.png"
            alt="youtube logo"
             style={{ width: "30px", height: "30px" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
