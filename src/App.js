import Title from "./components/Title/Title";
import Pixelart from "./components/Pixelart/Pixelart";
import Background from "./components/Background/Background";
import "./App.scss";

function App() {
  return (
    <div className="body">
      <div className="app">
        <Pixelart />
        <Title />
      </div>

      <Background />
    </div>
  );
}

export default App;
