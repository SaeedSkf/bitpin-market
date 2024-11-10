import React from 'react'

const Button = ({ children, ...props }) => {
    return (
        <button className="p-2 m-4 bg-primary text-black rounded-xl" {...props}>
            {children}
        </button>
    )
}

export default Button