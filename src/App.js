import "./App.css";
import Home from "./pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
  useRoutes,
  Link,
} from "react-router-dom";
import Edit from "./pages/Edit";

function App() {
  return (
    <div class="container">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/editUser/:id" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
