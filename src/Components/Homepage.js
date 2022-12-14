import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                src="images/Tshegofatso Nkutshweu.jpg"
                alt="Tshegofatso Nkutshweu"
              />
            </div>
            <div className="banner-text">
              <h1>Aspiring Full Stack Developer</h1>
              <hr />
              <p>
                HTML | CSS | JAVA | MYSQL | PYTHON | 
              </p>
              <div className="social-links">
               
                <a
                  href="https://github.com/JohnRedcon"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/tshegofatsoamandankutshweu/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
