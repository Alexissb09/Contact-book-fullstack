import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export const IsCreatingOrModifing = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    lastname: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4000/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser({
            name: data.user.name,
            lastname: data.user.lastname,
          });
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  const goBack = () => {
    navigate("/");
  };

  return !id ? (
    <h1>Create new contact</h1>
  ) : (
    <div>
      <h1>
        Modifying {user.name} {user.lastname}
      </h1>
      <br />
      <button className="btn btn-success btn-lg" onClick={goBack}>
        Back to create
      </button>
    </div>
  );
};
