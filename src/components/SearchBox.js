import React from 'react';
import useMobile from '../hooks/useMobile';
import { ReactComponent as Filter } from '../assets/mobile/icon-filter.svg';
import './searchBox.css';

export default function SearchBox() {
  const { isMobile } = useMobile();

  if (isMobile) {
    return (
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
          <Filter />
          <div className="searchBoxMobile"></div>
        </div>
      </div>
    );
  }
}
