import React from   'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">
            <input 
                className="pa2 b--red bg-white"
                type="search" 
                placeholder="search who's who"
                onChange={searchChange}
            />
        </div>
    );
    }

export default SearchBox;