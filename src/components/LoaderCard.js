import React from "react";
import Loader from "./Loader";
import styled from "styled-components";

export default () => {
  return (
    <DivWrapper>
      <div className="row mx-auto">
        <div className="col-4 ">
          <div className="card p-3">
            <Loader />
          </div>
        </div>
        <div className="col-4 ">
          <div className="card p-3">
            <Loader />
          </div>
        </div>
        <div className="col-4 ">
          <div className="card p-3">
            <Loader />
          </div>
        </div>
      </div>
    </DivWrapper>
  );
};
const DivWrapper = styled.div`
  .card {
      width: 350px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }  
  }
`;
