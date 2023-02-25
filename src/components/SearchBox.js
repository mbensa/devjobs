import React, { useState } from "react";
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
  
  const closeModal = () => {
    setModal(modal);
  };

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
            <Button 
              onClick={handleClickModal}
              filterIcon
              id="filterButton"
            />
            <Button 
              searchIcon
              violet
            />
          </div>
        </div>

        <div>
          {modal ? (
            <div className="modalBackground">
              <div className="modalContainer">
                  <InputBox 
                    icon = "location"
                    id="searchByLocation"
                    inputName="location"
                    placeholder="Filter by location..."
                    className="modalInputContainer"
                  />
                <hr className="line"/>
                <Checkbox
                  className="checkboxContainer"
                />
                <div className="modalButtonContainer">
                  <Button 
                    violet
                    btnText="Search"
                    id="modalButton"
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div>
         <div className="searchBoxContainer">
            <InputBox
              icon="search"
              id="searchByTitle"
              inputName="title"
              placeholder="Filter by title..."
              className="inputContainer"
            />
            <hr className="line"/>
            <InputBox 
              icon="location"
              id="searchByLocation"
              inputName="location"
              placeholder="Filter by location..."
              className="inputContainer"
            />
            <hr className="line"/>
            <div className="searchContainer">
              <Checkbox/>
              <Button 
                btnText="Search"
                violet
              />
            </div>
        </div>

      </div>
    )
  }
}
