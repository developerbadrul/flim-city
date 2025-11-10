import { useReducer } from "react";
import MovieList from "./components/Card/MovieList";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { MovieContext } from "./context";
import { cartReducer, initialState } from "./reducers/CartReducre";

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-14">
            <Sidebar />
            <MovieList />
          </div>
        </main>
      </MovieContext.Provider>
    </>
  );
};

export default App;
