import React from 'react'

const UserCard = ( {user} ) => {
    return (
        <>
            <div className='flex flex-col items-center justify-center border border-gray-200 shadow-md rounded-xl text-center lg:py-3'>

                {/*Card Header*/}
                <section className='w-full flex flex-col items-center py-3 rounded-t-xl'>
                    <img
                        className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-full mb-3'
                        src={user.avatar_url}
                        alt="User profile"/>
                    <h2 className='text-xl lg:text-2xl font-semibold'>{user.name}</h2>
                    <h3 className='text-purple-500 font-semibold lg:text-lg'>{user.login}</h3>
                    <p className='text-center px-5 lg:px-24 mt-2 text-sm lg:text-lg rounded-md'>{user.bio}</p>
                </section>

                {/*Stats*/ }
                <section className='w-full py-3 px-6 md:grid md:grid-cols-2 gap-5'>
                    <div className='flex justify-between py-2 md:mr-2 border-b border-gray-200 lg:text-lg'>
                        <p className='text-gray-800'><i className="ri-group-line"></i> Followers</p>
                        <span>{user.followers}</span>
                    </div>

                    <div className='flex justify-between py-2 md:ml-2 border-b border-gray-200 lg:text-lg'>
                        <p className='text-gray-800'><i className="ri-group-line"></i> Following</p>
                        <span>{user.following}</span>
                    </div>

                    <div className='flex justify-between py-2 md:mr-2 border-b border-gray-200 lg:text-lg'>
                        <p className='text-gray-800'><i className="ri-git-repository-line"></i> Public Repos</p>
                        <span>{user.public_repos}</span>
                    </div>

                    <div className='flex justify-between py-2 md:ml-2 md:border-b border-gray-200 lg:text-lg'>
                        <p className='text-gray-800'><i className="ri-building-line"></i> Public Gists</p>
                        <span>{user.public_gists}</span>
                    </div>
                </section>

                {/*Button*/}
                <section className='w-full py-3 px-6'>
                    <button
                        className='text-sm font-medium border border-purple-700 rounded-xl px-5 py-2  mt-5 md:py-1.5 md:w-full md:text-lg lg:text-xl md:font-normal cursor-pointer text-purple-700 hover:bg-purple-700 hover:text-white transition-all duration-300'
                        type="button">
                            <i className="ri-external-link-line mr-1"></i>
                        View GitHub Profile
                    </button>
                </section>
            </div>
        </>
    )
}

export default UserCard