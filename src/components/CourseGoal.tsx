import { type FC, PropsWithChildren } from "react";

// type CourseGoalProps = {
//   title: string;
//   description?: string;
//   children: ReactNode;
// };

type CourseGoalProps = PropsWithChildren<{
  title: string;
  description: string;
  id: number;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({
  title,
  description,
  id,
  onDelete,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default CourseGoal;
