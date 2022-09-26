import React from 'react'

function FeedbackCard({item}) {


    return (
        <div className="container">
            <div className='card'>
                <div className="num-display">{item.rating}</div>
                <div className="text-display">{item.text}</div>
            </div>
        </div>
        
    )
}

export default FeedbackCard
