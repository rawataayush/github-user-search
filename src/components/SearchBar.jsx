import React from 'react'

const SearchBar = () => {
    return (
        <div className='my-5 mx-4 flex flex-col gap-5'>

            {/*Header*/}
            <section className='flex flex-col gap-2 text-center'>
                <h1 className='text-2xl font-bold'><i className="ri-github-fill text-4xl"></i> GitHub User Search</h1>
                <p className='text-gray-500 px-3'>Search for any GitHub username to view their profile.</p>
            </section>

            {/*Search Bar*/}
            <section className='flex flex-col gap-2'>
                <input
                    className='border border-gray-400 rounded px-3 py-1.5'
                    type="text"
                    placeholder='Enter GitHub username'/>

                {/*Button*/}
                <button
                    type="button"
                    className='px-3 py-2 bg-purple-700 rounded text-white'
                    >Search
                </button>
            </section>

            {/*Initial Message*/}
            <section className='flex flex-col gap-1 items-center text-center bg-gray-50 border border-gray-400 rounded-xl px-1.5 py-5'>
                <i className="ri-search-line border border-gray-100 px-3 py-2 rounded-full bg-gray-200 text-gray-400 text-lg"></i>
                <p className='text-lg font-semibold'>Search for a GitHub user</p>
                <p className='text-gray-500'>Enter a username above to get started.</p>
            </section>
        </div>
    )}

export default SearchBar