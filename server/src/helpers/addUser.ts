import firebaseAdmin from "../helpers/admin";

export default async function addUser(email, password) {
  const user = await firebaseAdmin.auth().createUser({
    email,
    password,
  });

  return user.uid;
}
