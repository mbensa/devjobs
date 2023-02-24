import React, { useState } from 'react';
import useMobile from '../hooks/useMobile';
import InputBox from './InputBox';
import Button from './Button';
import Checkbox from './Checkbox';
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
            <InputBox
              id="searchByTitle"
              inputName="title"
              placeholder="Filter by title..."
            />
  
          <div className="iconContainer">
            <Button 
              onClick={handleClickModal}
              filterIcon
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
                <div className="modalInputContainer">
                  <InputBox 
                    icon = 'location'
                    id="searchByLocation"
                    inputName="location"
                    placeholder="Filter by location..."

                  />
                </div>
                <hr />
                <Checkbox/>
                <Button 
                  violet
                  btnText='Search'
                />
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
