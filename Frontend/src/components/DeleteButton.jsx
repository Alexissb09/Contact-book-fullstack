export const DeleteButton = ({ id }) => {
  const handleClick = () => {
    fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <td>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={handleClick}
      >
        Delete
      </button>
    </td>
  );
};
