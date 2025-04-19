import { useRef, useState, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (title: string, description: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const [toggleActive, setToggleActive] = useState<boolean>(true);

  const goal = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredDescription = description.current!.value;

    event.currentTarget.reset();

    onAddGoal(enteredGoal, enteredDescription);
  };
  //   let isActive = true

  const handleIsActive = (): void => {
    setToggleActive(!toggleActive);
  };

  return (
    <div
      className={`bg-bg-primary rounded-sm absolute inset-0 m-auto flex h-1/2 w-1/3 min-w-120 flex-col items-center ${toggleActive ? "block" : "hidden"}`}
    >
      <button
        onClick={handleIsActive}
        className="bg-accent-green rounded-sm mt-1 mr-1 flex h-6 w-6 cursor-pointer items-center justify-center self-end"
      >
        <span>X</span>
      </button>
      <h2 className="mt-10 mb-20 text-5xl font-bold">What's your goal?</h2>
      <form onSubmit={handleSubmit} autoComplete="off" className="flex w-9/10 flex-col gap-8">
        <div className="">
          <label htmlFor="goal" className="block text-xl font-semibold text-accent-brown">
            Your Goal
          </label>
          <input
            id="goal"
            type="text"
            ref={goal}
            className="block w-19/20 border-3 border-bg-grey focus:ring-3 ring-accent-brown outline-0 p-1 text-2xl rounded-sm "
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-xl font-semibold text-accent-brown">
            Description
          </label>
          <textarea
            id="description"
            ref={description}
            className="block w-19/20 min-h-40 border border-bg-grey focus:ring-3 ring-accent-brown outline-none p-1 text-2xl rounded-sm overflow-visible"
          />
        </div>
        <button className="self-center text-2xl">Add Goal</button>
      </form>
    </div>
  );
};

export default NewGoal;
