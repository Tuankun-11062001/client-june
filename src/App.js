import { hooks } from "./store";

function App() {
  const [stateApi, dispatchApi] = hooks.useContextApi();
  const [stateBox, dispatchBox] = hooks.useContextBox();
  return (
    <div className="App">
      <p>hello</p>
    </div>
  );
}

export default App;
