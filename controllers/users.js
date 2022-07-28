import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  // Add the new user to the users array
  users.push({ id: uuidv4(), ...user });
  res.send(`User ${user.firstName} ${user.lastName} created successfully!`);
};

export const getSingleUser = (req, res) => {
  const { id } = req.params;

  const findUser = users.find((user) => user.id === id);
  res.send(findUser);
};

export const removeUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`User with id ${id} removed successfully!`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.firstName = lastName;
  if (age) user.age = age;

  res.send(`User with id ${id} updated successfully!`);
};
