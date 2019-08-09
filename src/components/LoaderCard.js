import React from "react";
import Loader from "./Loader";
import styled from "styled-components";

export default () => {
  return (
    <DivWrapper>
      <div classNAme="container">
        <div className="row">
          <div className="col-lg-4 col-xs-12 col-sm-12 mt-2">
            <div className="card p-3">
              <Loader />
            </div>
          </div>
          <div className="col-lg-4 col-xs-12 col-sm-12 mt-2">
            <div className="card p-3">
              <Loader />
            </div>
          </div>
          <div className="col-lg-4 col-xs-12 col-sm-12 mt-2">
            <div className="card p-3">
              <Loader />
            </div>
          </div>
        </div>
      </div>
    </DivWrapper>
  );
};
const DivWrapper = styled.div`
  .card {
      width: 400px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }  
  }
`;
