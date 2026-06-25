import React from 'react'

const ErrorMessage = () => {
    return (
        <div className='my-5 mx-4 flex flex-col gap-5'>
            <section className='flex flex-col gap-1 items-center text-center bg-red-100 border border-red-200 rounded-xl px-1.5 py-5'>
                <i class="ri-error-warning-fill border border-gray-100 px-1.5 py-1 rounded-full bg-red-200 text-red-400 text-3xl"></i>
                <p className='text-lg font-semibold'>User not found</p>
                <p className='text-gray-500'>No GitHub user found with that username.</p>
                <p className='text-gray-500'>Please try again.</p>
            </section>
        </div>
    )
}

export default ErrorMessage