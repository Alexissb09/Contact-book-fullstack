import { useState } from "react";
import { useEffect } from "react";
import { DeleteButton } from "./DeleteButton";
import { Link } from "react-router-dom";

export const ContactList = () => {
  const [userList, setUserList] = useState([]);
  let numeration = 1;
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => setUserList(data.users))
      .catch((error) => {
        console.log(error);
      });
  }, [userList]);

  return (
    <div>
      <br />
      <table className="table table-striped-colums">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Lastname</th>
            <th scope="col">Age</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            return (
              <tr key={user._id}>
                <th scope="row">{numeration++}</th>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/${user._id}`} className="btn btn-primary btn-sm">modify</Link>
                </td>
                <DeleteButton id={user._id} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
