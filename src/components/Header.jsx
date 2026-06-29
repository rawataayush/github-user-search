import React from 'react'

const Header = () => {
    return (
        <section className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-bold lg:text-3xl'><i className="ri-github-fill text-4xl"></i> GitHub User Search</h1>
            <p className='text-gray-500 px-3 lg:text-lg'>Search for any GitHub username to view their profile.</p>
        </section>
    )
}

export default Header