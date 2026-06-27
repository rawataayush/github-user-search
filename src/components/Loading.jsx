import React from 'react'

const Loading = () => {
    return (
            <section className='flex flex-col gap-1 items-center text-center bg-gray-50 border border-gray-400 rounded-xl px-1.5 py-5'>
                <div className='h-10 w-10 border-4 border-purple-300 rounded-full'></div>
                <p className='text-lg font-semibold'>Loading...</p>
                <p className='text-gray-500'>Loading profile...</p>
            </section>
    )
}

export default Loading;