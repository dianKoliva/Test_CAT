import { Fragment } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Buy from "./components/buy";
import Check from "./components/check";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="buy" element={<Buy />} />
          <Route path="check" element={<Check />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

function Home() {
  return (
    <section className="flex flex-col gap-12">
      <h1 className="text-4xl font-bold ">
        We can help you buy Electricity
      </h1>

      <div className="flex gap-8 items-center pt-10 justify-center">
        <Link to="/buy" className="bg-blue-500 py-4 px-2 rounded-sm text-white">
          Buy Electricity{" "}
        </Link>
        <Link
          to="/check"
          className="bg-orange-500 py-4 px-2 text-white rounded-sm"
        >
          Check Balance
        </Link>
      </div>
    </section>
  );
}

function Layout() {
  return (
    <section>
      <nav className="flex shadow-sm bg-blue-500 text-white items-center justify-center gap-8 py-6">
        <Link to="/" className="font-bold">
          K-Electricity
        </Link>
        <div className="flex gap-4">
          <Link to="/buy">Buy Electrcity</Link>
          <Link to="/check">Check Balance</Link>
        </div>
      </nav>
      <div className="flex justify-center items-center py-20 flex-col">
        <Outlet />
      </div>
    </section>
  );
}

export default App;
