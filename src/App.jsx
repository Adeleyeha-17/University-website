import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./component/Header";
import { routes } from "./route/RoutePage";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
