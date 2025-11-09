import { useState } from "react";
import MovieList from "./components/Card/MovieList";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { MovieContext } from "./context";

const App = () => {
  const [cartData, setCartData] = useState([])
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
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
