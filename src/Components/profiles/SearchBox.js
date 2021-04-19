import React from   'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">
        <span className="b">Search by Student name: </span>
            <input 
                className="pa2 ma2 b--red bg-white"
                type="search" 
                placeholder="student name"
                onChange={searchChange}
            />

        </div>
        
    );
    }

export default SearchBox;