import { Toaster } from "react-hot-toast";
import AppRoutes from "./core/router/route";

function App() {
  return (
    <div>
      <AppRoutes />
      <Toaster />
    </div>
  );
}

export default App;
