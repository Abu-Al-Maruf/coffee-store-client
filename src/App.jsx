import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-700">Coffee Store</h1>
      <Link to={"/users"}>
        <button className="bg-orange-500 text-lg py-2 px-4 text-white rounded mr-4 mt-4">
          Users
        </button>
      </Link>
      <Link to={"/addCoffee"}>
        <button className="bg-lime-500 text-lg py-2 px-4 text-white rounded mr-4 mt-4">
          Add
        </button>
      </Link>
      <Link to={"/signup"}>
        <button className="bg-gray-500 text-lg py-2 px-4 text-white rounded mr-4 mt-4">
          Sign up
        </button>
      </Link>
      <Link to={"/login"}>
        <button className="bg-gray-500 text-lg py-2 px-4 text-white rounded mr-4 mt-4">
          Login
        </button>
      </Link>

      <div className="grid grid-cols-2 gap-5 mt-10">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
