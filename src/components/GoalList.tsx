import Goal from "./Goal"
import { type GoalType } from "../pages/Dashboard"
import InfoBox from "./InfoBox"
import { type ReactNode } from "react"

type GoalListProps = {goals: GoalType[], onDeleteGoal:(id:number) => void}

const GoalList = ({goals, onDeleteGoal }:GoalListProps) => {

    if (goals.length === 0){
        return (
            <InfoBox mode="hint">You have no goals yet. Start adding some!</InfoBox>
        )
    }else{
        let warningBox: ReactNode

        if (goals.length > 4) {
            warningBox = <InfoBox mode="warning">You are collecting too many goals. Don't put too much on your plate!</InfoBox>
        }
        return (
            <>
                {warningBox}
                <ul className="goal-list">
                    {goals.map((goal) => {
                        return (
                            <li key={goal.id}>
                                <Goal {...goal} onDeleteGoal={onDeleteGoal}/>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
    
}

export default GoalList