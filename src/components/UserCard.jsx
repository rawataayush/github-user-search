import React from 'react'

const UserCard = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center border border-gray-200 shadow-md rounded-xl m-4 text-center'>

                {/*Card Header*/}
                <section className='w-full flex flex-col items-center py-3 rounded-t-xl'>
                    <img
                        className='w-20 h-20 object-cover rounded-full mb-3'
                        src="https://images.unsplash.com/photo-1761638078977-d5490ddca251?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="User profile"/>
                    <h2 className='text-xl font-semibold'>Mojombo</h2>
                    <h3 className='text-purple-500 font-semibold'>@mojombo</h3>
                    <p className='text-center px-5 mt-2 text-sm rounded-md'>This profile has no bio Just a cat doing what a cats do</p>
                </section>

                {/*Stats*/ }
                <section className='py-3 w-full px-6'>
                    <div className='flex justify-between py-2 border-b border-gray-200'>
                        <p className='text-gray-800'><i className="ri-group-line"></i> Followers</p>
                        <span>4.5k</span>
                    </div>

                    <div className='flex justify-between py-2 border-b border-gray-200'>
                        <p className='text-gray-800'><i className="ri-group-line"></i> Following</p>
                        <span>9</span>
                    </div>

                    <div className='flex justify-between py-2 border-b border-gray-200'>
                        <p className='text-gray-800'><i class="ri-git-repository-line"></i> Public Repos</p>
                        <span>8</span>
                    </div>

                    <div className='flex justify-between pt-2'>
                        <p className='text-gray-800'><i class="ri-building-line"></i> Public Gists</p>
                        <span>5</span>
                    </div>

                    {/*Button*/}
                    <button
                        className='border border-purple-700 rounded-xl px-8 py-2 mt-5 cursor-pointer text-purple-700 hover:bg-purple-700 hover:text-white transition-all duration-300'
                        type="button">
                            <i class="ri-external-link-line mr-0.5"></i>
                        View GitHub Profile
                    </button>
                </section>
            </div>
        </>
    )
}

export default UserCard