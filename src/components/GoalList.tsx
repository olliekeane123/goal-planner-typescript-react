import Goal from "./Goal"
import { type GoalType } from "../pages/Dashboard"

type GoalListProps = {goals: GoalType[], onDeleteGoal:(id:number) => void}

const GoalList = ({goals, onDeleteGoal }:GoalListProps) => {
    return (
            <ul className="goal-list">
                {goals.map((goal) => {
                    return (
                        <li key={goal.id}>
                            <Goal {...goal} onDeleteGoal={onDeleteGoal}/>
                        </li>
                    )
                })}
            </ul>
    )
}

export default GoalList