import FeedbackCard from "./FeedbackCard"

function FeedbackList({feedback}) {
    if(!feedback || feedback.length === 0)
    {
        return <p>No Feedback Available Yet!</p>
    }
    return (
        <div className="feedback-list">
            {feedback.map((item)=>(
                <FeedbackCard key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default FeedbackList