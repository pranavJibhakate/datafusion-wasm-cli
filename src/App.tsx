import "./App.css";
import * as datafusion_wasm from "datafusion-wasm";
import "@mantine/core/styles.css";
import Datafusion from "./components/Datafusion.tsx";

console.log(datafusion_wasm.DataFusionContext.greet());
export const dfCtx = datafusion_wasm.DataFusionContext.new();

function App() {
  return (
    <div className="full-screen-div">
      <Datafusion />
    </div>
  );
}

export default App;
