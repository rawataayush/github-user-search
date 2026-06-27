import React from 'react'

const UserCard = ( {user} ) => {
    return (
        <>
            <div className='flex flex-col items-center justify-center border border-gray-200 shadow-md rounded-xl m-4 text-center'>

                {/*Card Header*/}
                <section className='w-full flex flex-col items-center py-3 rounded-t-xl'>
                    <img
                        className='w-20 h-20 object-cover rounded-full mb-3'
                        src={user.avatar_url}
                        alt="User profile"/>
                    <h2 className='text-xl font-semibold'>{user.name}</h2>
                    <h3 className='text-purple-500 font-semiboldf'>{user.login}</h3>
                    <p className='text-center px-5 mt-2 text-sm rounded-md'>{user.bio}</p>
                </section>

                {/*Stats*/ }
                <section className='py-3 w-full px-6'>
                    <div className='flex justify-between py-2 border-b border-gray-200'>
                        <p className='text-gray-800'><i className="ri-group-line"></i> Followers</p>
                        <span>{user.followers}</span>
                    </div>

                    <div className='flex justify-between py-2 border-b border-gray-200'>
                        <p className='text-gray-800'><i className="ri-group-line"></i> Following</p>
                        <span>{user.following}</span>
                    </div>

                    <div className='flex justify-between py-2 border-b border-gray-200'>
                        <p className='text-gray-800'><i className="ri-git-repository-line"></i> Public Repos</p>
                        <span>{user.public_repos}</span>
                    </div>

                    <div className='flex justify-between pt-2'>
                        <p className='text-gray-800'><i className="ri-building-line"></i> Public Gists</p>
                        <span>{user.public_gists}</span>
                    </div>

                    {/*Button*/}
                    <button
                        className='border border-purple-700 rounded-xl px-8 py-2 mt-5 cursor-pointer text-purple-700 hover:bg-purple-700 hover:text-white transition-all duration-300'
                        type="button">
                            <i className="ri-external-link-line mr-0.5"></i>
                        View GitHub Profile
                    </button>
                </section>
            </div>
        </>
    )
}

export default UserCard