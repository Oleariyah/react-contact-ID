import React from "react";
import styled from "styled-components";

export default ({ detail, handleClick }) => {
  return (
    <DivWrapper>
      <div classNAme="container">
        <div className="row">
          <div className="col-lg-4 col-xs-12 col-sm-12 mt-2 m-3">
            <div className="card" onClick={() => handleClick(detail.id.value)}>
              <div className="container p-3">
                <div className="row">
                  <div className="col-3 mt-2">
                    <img
                      className="rounded-circle"
                      src={detail.picture.large}
                      width="60"
                      alt="detail"
                    />
                  </div>
                  <div className="col-7">
                    <div class="card-body">
                      <h6>
                        {detail.name.title} {detail.name.first}{" "}
                        {detail.name.last}{" "}
                      </h6>
                      <div className="flex-container">
                        <span>
                          <i
                            className="fa fa-phone mr-2"
                            aria-hidden="true"
                          ></i>
                          {detail.cell}
                        </span>
                      </div>
                      <div className="flex-container">
                        <span>
                          <i
                            className="fa fa-envelope mr-2"
                            aria-hidden="true"
                          ></i>
                          {detail.email}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 mr-0">
                    <div className="mt-0">{detail.nat}</div>
                    <div className="col-container">
                      <div className="mb-0">
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DivWrapper>
  );
};
const DivWrapper = styled.div`
  .card {
      cursor: pointer;
      width: 400px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .card-body{
    padding: 2px;
  }
  .flex-container {
    display: flex;
    text-align: left;
    font-size: 12px;
  }
  .col-container {
    line-height: 4;
  }
  }
`;
