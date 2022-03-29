import React, {  } from "react";
import "./profile.css"
export default function Profile() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="profile">
          <div className="overlay">
            <div className="about d-flex flex-column">
              <h4>Kim Sarah</h4> <span>Software Developer</span>
            </div>
            <ul className="social-icons">
              <li>
                <i className="fa fa-facebook"></i>
              </li>
              <li>
                <i className="fa fa-linkedin"></i>
              </li>
              <li>
                <i className="fa fa-twitter"></i>
              </li>
              <li>
                <i className="fa fa-instagram"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
