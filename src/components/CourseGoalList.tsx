import { type PropsWithChildren } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoalType } from "../App";

type CourseGoalListProps = PropsWithChildren<{
  goals: CourseGoalType[];
  onDelete: (id: number) => void;
}>;

function CourseGoalList({ goals, onDelete }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            title={goal.title}
            description={goal.description}
            id={goal.id}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
