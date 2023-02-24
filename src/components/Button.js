import React from 'react';
import './button.css';
import { ReactComponent as Search } from '../assets/desktop/icon-search.svg';
import { ReactComponent as Filter } from '../assets/mobile/icon-filter.svg';

export default function Button(props) {
    const { searchIcon, btnText, violet, filterIcon, onClick } = props;

    const styles = {
        backgroundColor: violet ? '#5964E0' : '#FFFFFF',
    }

    return (
        <button className="button" style={styles} onClick={onClick}>
            {searchIcon && (
                <Search/>
            )}
            {filterIcon && (
                <Filter/>
            )}
            {btnText}
        </button>
    )
}