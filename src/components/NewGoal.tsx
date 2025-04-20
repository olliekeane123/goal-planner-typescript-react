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
      className={`bg-bg-primary absolute top-1/2 left-1/2 flex w-11/12 max-w-4xl  -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-lg px-12 py-16 shadow-xl ${toggleActive ? "block" : "hidden"}`}
    >
      <button
        onClick={handleIsActive}
        className="bg-accent-green hover:bg-opacity-90 absolute top-4 right-4 cursor-pointer rounded-md p-2 text-white transition-colors"
      >
        <span className="sr-only">Close</span>
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        What's your goal?
      </h2>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="w-full space-y-6"
      >
        <div className="w-full">
          <label
            htmlFor="goal"
            className="text-accent-brown block text-xl font-semibold"
          >
            Your Goal
          </label>
          <input
            id="goal"
            type="text"
            ref={goal}
            className="border-bg-grey focus:border-accent-green focus:ring-accent-green focus:ring-opacity-50 w-full rounded-md border-2 px-4 py-2 text-lg transition-colors outline-none focus:ring"
            placeholder="Enter your goal"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="text-accent-brown block text-xl font-semibold"
          >
            Description
          </label>
          <textarea
            id="description"
            ref={description}
            rows={4}
            className="border-bg-grey focus:border-accent-green focus:ring-accent-green focus:ring-opacity-50 w-full resize-none rounded-md border-2 px-4 py-2 text-lg transition-colors outline-none focus:ring"
            placeholder="Describe your goal in detail"
          />
        </div>
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="bg-accent-green hover:bg-accent-brown cursor-pointer rounded-md px-8 py-3 text-lg font-semibold text-white transition-colors"
          >
            Add Goal
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewGoal;
