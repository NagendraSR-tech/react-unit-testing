import "./App.css";
import { Application } from "./components/application/application";
import { Counter } from "./components/counter/counter";
import { Skills } from "./components/skills/skills";

function App() {
  return (
    <>
      <Counter />
      <Skills skills={["JavaScript", "React", "CSS"]} />
      <h1>Jest + React Testing library</h1>
      <p className="read-the-docs">Learn React Testing</p>
      <Application />
    </>
  );
}

export default App;
