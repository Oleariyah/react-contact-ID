import React from "react";
import styled from "styled-components";

export default ({ handleKeyDown, inputRef }) => {
  const handleClick = event => {
    event.preventDefault();
  };
  return (
    <SectionWrapper>
      <div className="container">
        <div className="m-5 text-center">
          <h4 className="intro">Get contact information from a name!</h4>
          <h6>Search up to 800,000 records in seconds</h6>
          <div className="container">
            <form className="mx-auto mt-5 mb-5 col-xs-12">
              <input
                type="text"
                ref={inputRef}
                onKeyDown={handleKeyDown}
                placeholder="Enter a name and hit enter e.g Joseph"
              />
              <button className="search" onClick={handleClick}>
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  position: relative;
  .intro {
    color: var(--primary-color);
  }

  form {
    display: flex;
    flex-direction: row;
    border: 2px solid #dee2e6;
    width: 60%;
    background: var(--white);
    border-radius: 30px;
    padding: 2px;
  }
  input {
    flex-grow: 2;
    height: 40px;
    border: none;
    background: transparent;
    text-indent: 10px;
  }
  button:focus {
    outline: none;
  }
  input:focus {
    outline: none;
  }
  .search {
    color: #cbcbcb;
    border: 1px;
    background: transparent;
  }
`;
