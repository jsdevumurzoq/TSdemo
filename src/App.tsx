import "./App.css";
import Headers from "./components/Headers";
import yourGoals from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoalType = { title: string; description: string; id: number };

function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);
  const handleCourseGoal = (goal: { title: string; description: string }) => {
    setGoals((prevs) => {
      return [...prevs, { ...goal, id: Date.now() }];
    });
  };

  const onDeleteHandle = (id: number) => {
    setGoals((prevs) => prevs.filter((prev) => prev.id !== id));
  };
  return (
    <>
      <main>
        <Headers
          title="Your course goals"
          image={{ src: yourGoals, alt: "A list of goals" }}
        />
        <NewGoal onAddGoal={handleCourseGoal} />
        <br />

        <CourseGoalList goals={goals} onDelete={onDeleteHandle} />
      </main>
    </>
  );
}

export default App;
