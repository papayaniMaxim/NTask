import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import PagesLayout from "./layouts/PagesLayout";
import routes from "./routes";
import store from "./store/store";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <PagesLayout>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </PagesLayout>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
