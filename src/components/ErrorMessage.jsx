import React from 'react';

const ErrorMessage = (error) => {
    return (
            <section className='flex flex-col gap-1 items-center text-center bg-red-100 border border-red-200 rounded-xl px-1.5 py-5 md:px-5 md:py-10'>
                <i className="ri-error-warning-fill border border-gray-100 px-1.5 py-1 md:px-3 md:py-2.5 rounded-full bg-red-200 text-red-400 text-3xl"></i>
                <p className='text-lg font-semibold md:text-2xl'>User not found</p>
                <p className='text-gray-500 md:text-lg'>No GitHub user found with that username.</p>
                <p className='text-gray-500 md:text-lg'>Please try again.</p>
            </section>
    )}

export default ErrorMessage