import React from 'react'

const InitialSate = () => {
    return (
            <section className='flex flex-col gap-1 items-center text-center bg-gray-50 border border-gray-400 rounded-xl px-1.5 py-5'>
                <i className="ri-search-line border border-gray-100 px-3 py-2 rounded-full bg-gray-200 text-gray-400 text-lg"></i>
                <p className='text-lg font-semibold'>Search for a GitHub user</p>
                <p className='text-gray-500'>Enter a username above to get started.</p>
            </section>
    )
}

export default InitialSate