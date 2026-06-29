import React from 'react';

const SearchBar = ({username, onHandleInputChange, onHandleSearch}) => {

    return (
        <div className='my-5 mx-4 flex flex-col gap-5'>
            {/*Search Bar*/}
            <section className='flex flex-col gap-2 md:flex-row'>
                <input
                    className='border border-gray-400 rounded px-3 py-1.5 md:w-full'
                    type="text"
                    value={username}
                    onChange={(e)=>
                        onHandleInputChange(e.target.value)
                    }
                    onKeyDown={(e)=>{
                        if(e.key == 'Enter'){
                            onHandleSearch();
                        }
                    }}
                    placeholder='Enter GitHub username'
                />

                {/*Button*/}
                <button
                    className='px-3 py-2 md:px-0 md:text-lg md:w-xs bg-purple-700 rounded text-white'
                    type="button"
                    onClick={onHandleSearch}
                    >Search
                </button>
            </section>
        </div>
    )}

export default SearchBar