import React, { useContext, useState } from "react";
import Input from "../../components/Input/Input";
import "./Add.scss";
import AuthContext from "../../store/authContext";
import useFetch from "../../hooks/useFetch/useFetch";

const Add = () => {
  const { user } = useContext(AuthContext);
  const { add } = useFetch('issues')

  const [data, setData] = useState({
    issueTitle: "",
    medicalEquipmentName: "",
  });

  const handleChange = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    add(user, data)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <h3 className="text-3xl mb-6 font-extrabold">Add a new issue:</h3>
        <Input
          id="issueTitle"
          label="Title:"
          className="py-1 px-4 mb-3 rounded-lg"
          onChange={handleChange}
        />
        <Input
          id="medicalEquipmentName"
          label="Equipment:"
          className="py-1 px-4 rounded-lg"
          onChange={handleChange}
        />
        <button
          className="flex justify-center bg-green-700 hover:border-green-800/70 w-3/6 mt-6"
          type="submit"
        >
          Add <span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </form>
  );
};

export default Add;
