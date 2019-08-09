import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton } from "./Buttons";

export default () => {
  return (
    <SectionWrapper>
      <div className="container">
        <div className="row mt-5">
          <div className="col-6 col-xs-12 mt-5 py-5">
            <h4>
              <strong>Need more information on contact?</strong>
            </h4>
            <br />
            <p>
              Get access to your account today and access up to 800,000 records
              with our instant search. if you already have an account with us,
              simply{" "}
              <Link className="link" to="/">
                sign in.
              </Link>
            </p>
            <br />
            <SecondaryButton>Get Started</SecondaryButton>
          </div>
          <div className="col-6 col-xs-12 mt-5">
            <img
              className="img-fluid"
              src="images/demo-content.png"
              width="550"
              alt="demo_content"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
const SectionWrapper = styled.section`
  margin-top: 250px;
  .link {
    color: var(--primary-color);
  }
`;
