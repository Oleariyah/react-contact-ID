import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Tutorial from "./components/Tutorial";
import SearchArea from "./components/SearchArea";
import MoreInfo from "./components/MoreInfo";
import Modal from "./components/Modal";
import Loader from "./components/LoaderCard";
import Footer from "./components/Footer";
import ContactList from "./components/ContactList";
import "./style/App.css";
import getData from "./services/GetData";

export default () => {
  const [state, setstate] = useState({
    data: [],
    query: "",
    result: "",
    detail: [],
    modal: false,
    loading: false
  });
  const inputRef = useRef();

  useEffect(() => {
    if (state.query !== "") {
      setstate({ ...state, loading: true });
      getData(`?page=1&results=12&seed=${state.query}`).then(data => {
        let tempData = [];
        data.results.forEach(newData => {
          const singleData = { ...newData };
          tempData = [...tempData, singleData];
          console.log(tempData);
          if (tempData.length === 0) {
            setstate({
              ...state,
              data: [],
              result: "~ 0 results ~"
            });
          } else {
            setstate({
              ...state,
              data: tempData,
              loading: false
            });
          }
        });
      });
    }
  }, [state.query]);

  const handleKeyDown = event => {
    if (event.key === "Enter" && inputRef.current.value !== null) {
      event.preventDefault();
      setstate({ ...state, query: inputRef.current.value });
      inputRef.current.value = "";
    }
  };

  const getItem = id => {
    const contact = state.data.find(item => item.id.value === id);
    console.log(contact);
    return contact;
  };
  const handleClick = id => {
    const contact = getItem(id);
    setstate({
      ...state,
      modal: !state.modal,
      detail: contact
    });
  };

  const modalClose = () => {
    setstate({
      ...state,
      modal: false
    });
  };

  return (
    <div>
      <Navbar />
      <SearchArea handleKeyDown={handleKeyDown} inputRef={inputRef} />
      {state.query !== "" ? (
        <div className="container">
          <div className="m-5">Top result for "{`${state.query}`}"</div>
        </div>
      ) : null}
      <div className="container-fluid">
        <div className="row justify-content-center">
          {state.loading === false ? (
            state.data.map((detail, index) => {
              return (
                <ContactList
                  detail={detail}
                  key={index}
                  handleClick={handleClick}
                />
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
      {state.modal ? (
        <Modal detail={state.detail} modalClose={modalClose} />
      ) : null}
      <Tutorial />
      <MoreInfo />
      <Footer />
    </div>
  );
};
