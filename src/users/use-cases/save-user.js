/**
 *
 * @param {Like<User>} userLike
 */

export const saveUser = async (userLike) => {
  const user = new User(userLike);

  //TODO: mapear user

  if (user.id) {
    throw Error("No implementado la actualizacion");
  }

  const updatedUser = await createUser( user );
  
  return updatedUser;
};

/**
 *
 * @param {Like<User>} userLike
 */
const createUser = async (userLike) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users`;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userLike),
    headers: {
      "Content-Type": "application/json",
    },
  } );
  
  const newUser = await res.json();
  console.log( newUser );

  return newUser;

};
