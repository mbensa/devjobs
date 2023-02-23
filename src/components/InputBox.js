import React from 'react';
import { ReactComponent as Location } from '../assets/desktop/icon-location.svg';
import { ReactComponent as Search } from '../assets/desktop/icon-search.svg';
import './inputBox.css';

const searchBoxIcons = {
    search: Search,
    location: Location,
};

export default function InputBox(props) {
    const { id, inputName, placeholder, icon} = props; 

    const SearchBoxIcon = searchBoxIcons[icon];

    return (
        <div className = "inputContainer">
            {icon && (
                <SearchBoxIcon className = 'searchBoxIcon'/>
            )}
            <input
            type = "search"
            id = {id}
            name = {inputName}
            placeholder = {placeholder}
            />
        </div>
    )
}