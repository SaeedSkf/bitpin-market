import React from 'react'

const TabButton = ({ isActive, children, ...props }) => {
    return (
        <li>
            <button {...props} className={`py-2 border-b-2 ${isActive ? 'border-green-500' : 'border-transparent'}`}>
                {children}
            </button>
        </li >
    )
}

export default TabButton