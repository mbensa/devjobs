import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import useMobile from "../hooks/useMobile";
import InputBox from "./InputBox";
import Button from "./Button";
import Checkbox from "./Checkbox";
import "./searchBox.css";

export default function SearchBox() {
  const { isMobile } = useMobile();

  const [modal, setModal] = useState(false);

  const handleClickModal = () => {
    setModal(!modal);
  };

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (modal && ref.current && !ref.current.contains(e.target)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [modal]);

  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => console.log(data);

  if (isMobile) {
    return (
      <div>
        <div className="searchBoxContainer mobileSearchBoxContainer">
          <InputBox
            id="searchByTitle"
            inputName="title"
            placeholder="Filter by title..."
            className="mobileInputContainer"
          />

          <div className="iconContainer">
            <Button onClick={handleClickModal} filterIcon id="filterButton" />
            <Button searchIcon violet id="searchBtnMobile" />
          </div>
        </div>

        <div>
          {modal && (
            <div className="modalBackground">
              <div className="modalContainer" ref={ref}>
                <InputBox
                  id="searchByTitle"
                  icon="search"
                  inputName="title"
                  placeholder="Filter by title..."
                  className="modalInputContainer"
                />
                <hr className="line" />
                <InputBox
                  icon="location"
                  id="searchByLocation"
                  inputName="location"
                  placeholder="Filter by location..."
                  className="modalInputContainer"
                />
                <hr className="line" />
                <Checkbox className="checkboxContainer" />
                <div className="modalButtonContainer">
                  <Button violet btnText="Search" id="modalButton" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="searchBoxContainer">
            <InputBox
              register={register}
              icon="search"
              id="searchByTitle"
              inputName="title"
              placeholder="Filter by title..."
              className="inputContainer"
            />
            <hr className="line" />
            <InputBox
              register={register}
              icon="location"
              id="searchByLocation"
              inputName="location"
              placeholder="Filter by location..."
              className="inputContainer"
            />
            <hr className="line" />
            <div className="searchContainer">
              <Checkbox register={register} />
              <Button btnText="Search" violet />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
