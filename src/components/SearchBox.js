import React, { useState } from 'react';
import useMobile from '../hooks/useMobile';
import { ReactComponent as Filter } from '../assets/mobile/icon-filter.svg';
import { ReactComponent as Location } from '../assets/desktop/icon-location.svg';
import './searchBox.css';

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
        <div className="searchBoxContainer">
          <div className="inputContainer">
            <input
              type="search"
              id="searchByTitle"
              name="title"
              placeholder="Filter by title..."
            />
          </div>
          <div className="iconContainer">
            <button className="filter" onClick={handleClickModal}>
              <Filter />
            </button>
            <div className="searchBoxMobile"></div>
          </div>
        </div>

        <div>
          {modal ? (
            <div className="modalBackground">
              <div className="modalContainer">
                <div className="modalInputContainer">
                  <Location />
                  <input
                    type="search"
                    id="searchByLocation"
                    name="location"
                    placeholder="Filter by location..."
                  />
                </div>
                <hr />
                <div className="modalCheckboxContainer">
                  <label className="modalLabelContainer">
                    Full Time Only
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <button className="searchBoxModal">Search</button>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}
