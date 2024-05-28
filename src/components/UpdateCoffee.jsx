import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);

    fetch(`https://coffee-store-server-alpha-jade.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "You Update the Coffee",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Please modify any field first",
            icon: "error",
          });
        }
      });
  };
  return (
    <div className="bg-gray-200 p-16 rounded">
      <h1 className="text-3xl font-bold text-purple-700">
        Update Coffee of : {name}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6 py-10">
          {/* input 1 */}
          <div className="flex flex-col justify-center items-start gap-2">
            <label
              className="text-[#1B1A1ACC] font-semibold text-xl"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={name}
              placeholder="Enter coffee name"
              className="input input-bordered input-primary w-full"
            />
          </div>
          {/* input  2*/}
          <div className="flex flex-col justify-center items-start gap-2">
            <label
              className="text-[#1B1A1ACC] font-semibold text-xl"
              htmlFor="chef"
            >
              Chef
            </label>
            <input
              type="text"
              name="chef"
              id="chef"
              defaultValue={chef}
              placeholder="Enter coffee chef"
              className="input input-bordered input-primary w-full"
            />
          </div>
          {/* input  3*/}
          <div className="flex flex-col justify-center items-start gap-2">
            <label
              className="text-[#1B1A1ACC] font-semibold text-xl"
              htmlFor="supplier"
            >
              Supplier
            </label>
            <input
              type="text"
              name="supplier"
              id="supplier"
              defaultValue={supplier}
              placeholder="Enter coffee supplier"
              className="input input-bordered input-primary w-full"
            />
          </div>
          {/* input  4*/}
          <div className="flex flex-col justify-center items-start gap-2">
            <label
              className="text-[#1B1A1ACC] font-semibold text-xl"
              htmlFor="taste"
            >
              Taste
            </label>
            <input
              type="text"
              name="taste"
              id="taste"
              defaultValue={taste}
              placeholder="Enter coffee taste"
              className="input input-bordered input-primary w-full"
            />
          </div>
          {/* input  5*/}
          <div className="flex flex-col justify-center items-start gap-2">
            <label
              className="text-[#1B1A1ACC] font-semibold text-xl"
              htmlFor="category"
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              defaultValue={category}
              placeholder="Enter coffee category"
              className="input input-bordered input-primary w-full"
            />
          </div>
          {/* input  6*/}
          <div className="flex flex-col justify-center items-start gap-2">
            <label
              className="text-[#1B1A1ACC] font-semibold text-xl"
              htmlFor="details"
            >
              Details
            </label>
            <input
              type="text"
              name="details"
              id="details"
              defaultValue={details}
              placeholder="Enter coffee details"
              className="input input-bordered input-primary w-full"
            />
          </div>
          {/* input 7 */}
          <div className="flex flex-col justify-center items-start gap-2 col-span-2">
            <label
              className="text-[#1B1A1ACC] font-semibold text-xl"
              htmlFor="photo"
            >
              Photo
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="input input-bordered input-primary w-full"
            />
          </div>
          {/* input  button*/}
          <div className="flex flex-col justify-center items-start gap-2 col-span-2">
            <button className="bg-[#D2B48C] rounded border-2 border-[#331A15] text-xl font-semibold  text-[#331A15] w-full p-3">
              Update Coffee
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
