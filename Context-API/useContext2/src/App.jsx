import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { Route, Routes } from "react-router-dom";

export const userContext = createContext(); //Creating a context

export default function App() {
  const [user, setUser] = useState({
    name: "Prasasti",
    role: "admin",
    token: "7839747",
    status: "SignedIn",
  });

  return (
    //Providing a context
    <userContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/protected" element={<ProtectedRoute />} />
      </Routes>
    </userContext.Provider>
  );
}
