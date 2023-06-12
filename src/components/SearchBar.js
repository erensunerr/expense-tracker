import React from 'react';
function SearchBar({ setSearchString }) {
    return (
        <div className={"w-full my-8 "}>
            <input
                className={"border rounded w-full text-lg py-1 px-2"}
                onChange={(e) => {
                    e.preventDefault()
                    setSearchString(e.target.value);
                }}
            />
        </div>
    )
}

export default SearchBar