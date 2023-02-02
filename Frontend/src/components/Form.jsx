import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Form = () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    age: 0,
    phone: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id) {
      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    } else {
      fetch(`http://localhost:4000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
    navigate("/");

    setUser({
      name: "",
      lastname: "",
      age: 0,
      phone: "",
    });
  };

  const handleChange = (e) => {
    if (e.target.id === "age" && e.target.value < 0) return;
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Insert the contact name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            value={user.lastname}
            onChange={handleChange}
            placeholder="Insert the contact lastname"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={user.age}
            onChange={handleChange}
            placeholder="Insert the contact age"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Insert the contact phone"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
