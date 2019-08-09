import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <SectionWrapper>
      <img src="images/bg-path.svg" alt="bg" className="svg-bg" />
      <div className="container">
        <div className="card">
          <div className="card-body text-center">
            <h5 className="card-title">
              <strong>How it works.</strong>
            </h5>
            <div className="container">
              <div className="row mb-5">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <img
                    src="images/how-it-works-1.png"
                    width="200"
                    alt="how_it_works"
                    className="m-4 img-fluid"
                  />
                  <div className="flex-container card-text m-5 p-3">
                    <h2 className="numbering mr-1">1.</h2>
                    <span>Type a name and hit enter to start searching.</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <img
                    src="images/how-it-works-2.png"
                    width="200"
                    alt="how_it_works"
                    className="m-4 img-fluid"
                  />
                  <div className="flex-container card-text m-5 p-3">
                    <h2 className="numbering mr-1">2.</h2>
                    <span>Get instant results with contact details.</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <img
                    src="images/how-it-works-3.png"
                    width="200"
                    alt="how_it_works"
                    className="m-4 img-fluid"
                  />
                  <div className="flex-container card-text m-5 p-3">
                    <h2 className="numbering mr-1">3.</h2>
                    <span>Sign up or sign in to reveal more information.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  margin-top: 150px;
  position: relative;
  .card-title {
    margin-top: 80px !important;
    margin-bottom: 100px !important;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .svg-bg {
    position: absolute;
    top: -110px;
    right: 0;
    width: 100%;
    z-index: 0;
  }
  .flex-container {
    display: flex;
    justify-content: space-around;
    text-align: left;
  }
  .numbering {
    color: var(--primary-color);
  }
`;
