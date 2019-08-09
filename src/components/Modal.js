import React from "react";
import styled from "styled-components";
import { PlainButton } from "./Buttons";

export default ({ detail, modalClose }) => {
  return (
    <ModalContainer>
      <div className="container">
        <button className="close" onClick={modalClose}>
          <i class="fa fa-window-close" aria-hidden="true"></i>
        </button>
        <div className="row">
          <div
            id="modal"
            className="col-8 mx-auto col-md-6 col-lg-8 text-center p-5"
          >
            <div className="avatar">
              <img
                className="rounded-circle"
                src={detail.picture.large}
                width="120"
                alt="detail"
              />
            </div>
            <div className="m-5">
              <h6>
                {detail.name.first} {detail.name.last}
              </h6>
              <span>
                {detail.gender}, {detail.dob.age}
              </span>
              <div>{detail.nat}</div>
            </div>
            <div className="m-3">
              <div className="container-fluid">
                <div className="row text-left">
                  <div className="col-lg-4 col-sm-12 col-xs-12">
                    <span className="details">
                      <i class="fa fa-phone mr-2" aria-hidden="true"></i>
                      {detail.cell}
                    </span>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-xs-12">
                    <span className="details">
                      <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
                      {detail.email}
                    </span>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-xs-12">
                    <span className="details">
                      <i
                        className="fa fa-location-arrow mr-2"
                        aria-hidden="true"
                      ></i>
                      {detail.location.street}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-sm-12 col-xs-12">
                    <span className="favourite">
                      <i className="fa fa-star-o mr-2" aria-hidden="true"></i>
                      Add to favourites
                    </span>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-xs-12">
                    <PlainButton>Sign In</PlainButton>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-xs-12">
                    to get more information
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-item: center;
  background: rgba(0, 0, 0, 0.6);
  #modal {
    border-radius: 4px;
    background: var(--white);
    position: relative;
  }
  .close {
    position: absolute;
    top: 20px;
    left: 80%;
    float: right;
    color: white !important;
    border-radius: 10px;
  }

  .close:focus {
    outline: none;
  }

  .avatar {
    position: absolute;
    top: -50px;
    left: 40%;
  }
  .details {
    font-size: 12px;
  }
  .favourite {
    color: var(--primary-color);
  }
`;
