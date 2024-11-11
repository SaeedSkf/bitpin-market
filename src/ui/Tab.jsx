import React from 'react'

const Tab = ({ children, buttons }) => {
    return (
        <>
            <menu className='flex gap-5 border-b border-gray-400 sticky top-0 bg-background z-10'>
                {buttons}
            </menu>
            {children}
        </>
    )
}

export default Tab