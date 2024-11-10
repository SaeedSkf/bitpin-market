import React from 'react'

const Tab = ({ children, buttons }) => {
    return (
        <>
            <menu className='flex gap-5 list-none border-b border-gray-400 px-2'>
                {buttons}
            </menu>
            {children}
        </>
    )
}

export default Tab