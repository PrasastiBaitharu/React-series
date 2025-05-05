import { useContext } from "react";
import { userContext } from "../App";

export default function ProtectedRoute() {
  const { user, setUser } = useContext(userContext);
  return (
    <div>
      <h1>Username: {user.name}</h1>
      <h1>Role : {user.role}</h1>
      <h1>Token: {user.token}</h1>
      <h1>Status: {user.status}</h1>
    </div>
  );
}
