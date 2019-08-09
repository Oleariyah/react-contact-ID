import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "./Buttons";

export default () => {
  return (
    <NavWrapper>
      <div className="navbar navbar-expand-sm navbar-light">
        <div className="container mt-3">
          <Link to="/" className="navbar-brand">
            <img src="images/logo.png" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <PrimaryButton>Sign In</PrimaryButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  .nav-link {
    margin-right: 10px;
    text-transform: capitalize !important;
    cursor: pointer;
  }
  .nav-link:hover {
    color: var(--primary-color) !important;
  }
`;
