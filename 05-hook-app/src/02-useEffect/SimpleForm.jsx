import { useEffect, useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Francisco",
    email: "franciscotimez@gmail.com"
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  // useEffect(() => {
  //   console.log("useEffect is Called!!");
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect is Called!!: formState is updated");
  // }, [formState]);

  // useEffect(() => {
  //   console.log("useEffect is Called!!: email is updated");
  // }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="example@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {
        username === "Francisco2" && <Message />
      }
    </>
  );
};
