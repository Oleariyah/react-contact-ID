import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default () => {
  return (
    <SectionWrapper>
      <div className="container">
        <hr />
        <div className="d-flex bd-highlight">
          <div className="p-2 flex-grow-1 bd-highlight">
            <Link className="link" to="/">
              Terms of Use
            </Link>
            <Link className="link" to="/">
              Privacy Policy
            </Link>
          </div>
          <div className="p-2 bd-highlight">
            <Link className="link" to="/">
              All rights reserved JXI
            </Link>
          </div>
          <div className="p-2 bd-highlight">
            <Link className="IDlink" to="/">
              ContactID @ 2019
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  margin-top: 150px;
  .link {
    margin-right: 15px;
    color: var(----main-black);
  }
  .IDlink {
    color: var(--primary-color);
  }
`;
