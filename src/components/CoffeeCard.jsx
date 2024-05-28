import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, supplier, photo, chef } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-alpha-jade.vercel.app/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="flex justify-center p-6 items-center gap-5 bg-[#F5F4F1] rounded">
      <div>
        <img className="max-w-44" src={photo} />
      </div>

      <div className="flex flex-col items-start">
        <h2 className="text-black text-lg font-semibold">
          Name: <span className="font-normal text-[#5C5B5B] pl-1">{name}</span>
        </h2>
        <h2 className="text-black text-lg font-semibold">
          Chef: <span className="font-normal text-[#5C5B5B] pl-1">{chef}</span>
        </h2>
        <h2 className="text-black text-lg font-semibold">
          supplier:{" "}
          <span className="font-normal text-[#5C5B5B] pl-1">{supplier}</span>
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        <button className="btn bg-yellow-400 p-3 text-white rounded">
          View
        </button>
        <button className="btn bg-black p-3 text-white rounded">
          <Link to={`/updateCoffee/${_id}`}>Update</Link>
        </button>
        <button
          onClick={() => {
            handleDelete(_id);
          }}
          className="btn bg-red-600 p-3 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.node,
};

export default CoffeeCard;
