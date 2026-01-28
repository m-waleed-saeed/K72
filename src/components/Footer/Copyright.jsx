import React from 'react'

const Copyright = () => {
    return (
        <div className='flex justify-center items-center py-3 lg:py-5 px-2 bg-black'>
            <p className="text-primary text-sm lg:text-md font-[primary] text-center">&copy; {new Date().getFullYear()} Weedimian. All rights reserved. Developed by <b>Muhammad Waleed</b>.</p>
        </div>
    )
}

export default Copyright