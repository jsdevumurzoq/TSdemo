import { type PropsWithChildren, type FormEvent, useRef } from "react";

type NewGoalProps = PropsWithChildren<{
  onAddGoal: (goal: { title: string; description: string }) => void;
}>;

function NewGoal({ onAddGoal }: NewGoalProps) {
  const tit = useRef<HTMLInputElement>(null);
  const desc = useRef<HTMLInputElement>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onAddGoal({ title: tit.current!.value, description: desc.current!.value });
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Title" ref={tit} />
      <input type="text" placeholder="Description" ref={desc} />
      <button>Save Goal</button>
    </form>
  );
}

export default NewGoal;
