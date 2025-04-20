import { type GoalType } from "../pages/Dashboard";

type GoalProps = GoalType & {
  onDeleteGoal: (id: number) => void;
};

const Goal = ({ title, description, id, onDeleteGoal }: GoalProps) => {
  return (
    <article className="bg-accent-green h-64 w-80 rounded-xl text-center flex flex-col items-center justify-between py-8 space-y-6">
      <div className="">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={() => onDeleteGoal(id)} className="bg-bg-grey hover:bg-accent-brown cursor-pointer rounded-md px-6 py-2 text-md font-semibold text-white transition-colors">Delete</button>
    </article>
  );
};

export default Goal;
