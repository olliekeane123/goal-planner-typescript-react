import { useState } from 'react'
import GoalList from '../components/GoalList'
import NewGoal from '../components/NewGoal'

export type GoalType = {
    title: string,
    description: string,
    id: number
}

const Dashboard = () => {

    const [goals, setGoals] = useState<GoalType[]>([])

    const handleAddGoal = (title: string, description: string) => {
        setGoals(prevGoals => {
            const newGoal: GoalType = {
                title: title,
                description: description,
                id: Math.random() * 10
            }
            return [...prevGoals, newGoal]
        })
    }

    const handleDeleteGoal = (id: number) => {
        setGoals(prevGoals => {
            return prevGoals.filter(goal => goal.id !== id)
        })
    }

    return (
        <>
            <NewGoal onAddGoal={handleAddGoal}/>
            <GoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
        </>
    )
}

export default Dashboard