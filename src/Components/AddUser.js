function AddUser() {
  const userSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={userSubmitHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="texts"></input>
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number"></input>
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUser;
