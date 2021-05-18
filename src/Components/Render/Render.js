import React from 'react'


function Render({text, img}) {
    return (
        <div className='render_wrapper'>
            <div className='render'>
                <img src={img} alt={text} />
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Render
