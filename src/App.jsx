import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-14">
          <Sidebar />
          <div>
            <h1>Welcome to the Dashboard</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
