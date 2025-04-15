import { type GoalType } from "../pages/Dashboard"

type GoalProps =  GoalType & {
    onDeleteGoal: (id:number) => void
}

const Goal = ({title, description, id, onDeleteGoal}: GoalProps) => {

    return (
        <article className='goal'>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <button onClick={() => onDeleteGoal(id)}>Delete</button>
        </article>
    )
}

export default Goal