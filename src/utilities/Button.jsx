import React, { useState } from 'react'

const Button = () => {

    const [isLuminoso, setIsLuminoso] = useState(false)

    const handleClick = () =>{
        setIsLuminoso(!isLuminoso)
        console.log('cambio el estado')
    }
  
    return (
    <div>
        <button onClick={handleClick}>Click me!</button>
    </div>
  )
}

export default Button