import React from 'react'

function Header({text, bgColor, textColor}) {
    const HeaderStyle = {
        backgroundColor:bgColor,
        color:textColor
    }
  return (
    <header style={HeaderStyle}>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header> 
  )
}

Header.defaultProps = {
    text:'Feedback UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#FFD700'
}


export default Header
