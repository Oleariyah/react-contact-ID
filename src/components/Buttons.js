import styled from "styled-components";

export const PrimaryButton = styled.button`
    text-transform: capitalize;
    background: var(--red-pink);
    border: none;
    color: white;
    width: 120px;
    padding: 5px 12px;
    text-align: center;
    text-decoration: none;
    margin: 4px 2px;
    border-radius: 15px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  &: hover {
    box-shadow: 0 5px 13px 0 rgba(0,0,0,0.24), 0 7px 20px 0 rgba(0,0,0,0.19);
  }
  &: focus {
    outline: none;
};
  }
`;

export const SecondaryButton = styled.button`
    text-transform: capitalize;
    background: var(--red-pink);
    border: none;
    color: white;
    width: 200px;
    height: 40px;
    padding: 5px 12px;
    text-align: center;
    text-decoration: none;
    margin: 4px 2px;
    border-radius: 15px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  &: hover {
    box-shadow: 0 5px 13px 0 rgba(0,0,0,0.24), 0 7px 20px 0 rgba(0,0,0,0.19);
  }
  &: focus {
    outline: none;
};
  }
`;

export const PlainButton = styled.button`
    text-transform: capitalize;
    background: var(--primary-color);
    border: none;
    color: white;
    width: 120px;
    height: 40px;
    padding: 5px 12px;
    text-align: center;
    text-decoration: none;
    margin: 4px 2px;
    border-radius: 15px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  &: hover {
    box-shadow: 0 5px 13px 0 rgba(0,0,0,0.24), 0 7px 20px 0 rgba(0,0,0,0.19);
  }
  &: focus {
    outline: none;
};
  }
`;
