import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

import AddProject from "./pages/AddProject";
import Sidebar from "./components/SideBar";
import DashBoard from "./pages/DashBoard";
import Projects from "./pages/Projects";
import AddTechnology from "./pages/AddTechnology";
import Technologies from "./pages/Technologies";
import ClientRequirements from "./pages/ClientRequirements";
import EditProject from "./pages/EditProject";
import AdminLogin from "./pages/AdminLogin";

import { useContext } from "react";
import { AdminContext } from "./context/AdminContext";
import { LoaderPinwheelIcon } from "lucide-react";
import EditTechnology from "./pages/EditTechnology";

const App = () => {
  const { admin } = useContext(AdminContext);

  const location = useLocation()

  if (!admin && location.pathname !== '/admin/login'){
    return (
      <div  className="h-screen w-full flex items-center justify-center">
        <LoaderPinwheelIcon className="animate-spin" size={40}/>
      </div>
    )
  }

  return (
    <>
    {
      location.pathname !== '/admin/login' && <Sidebar/>
    }


      <div className={`min-h-screen bg-[#f8f3ed] flex-1 ${location.pathname !== '/admin/login' && 'lg:ml-64'} `}>
        <Routes>
          <Route
            path="/admin/login"
            element={!admin ? <AdminLogin /> : <Navigate to={"/"} />}
          />

          <Route
            path="/"
            element={admin ? <DashBoard /> : <Navigate to={"/admin/login"} />}
          />
          <Route
            path="/projects"
            element={admin ? <Projects /> : <Navigate to={"/admin/login"} />}
          />
          <Route
            path="/add-project"
            element={admin ? <AddProject /> : <Navigate to={"/admin/login"} />}
          />
          <Route
            path="/project/edit/:id"
            element={admin ? <EditProject /> : <Navigate to={"/admin/login"} />}
          />

          <Route
            path="/technology/edit/:id"
            element={admin ? <EditTechnology /> : <Navigate to={"/admin/login"} />}
          /> 
          <Route
            path="/technologies"
            element={
              admin ? <Technologies /> : <Navigate to={"/admin/login"} />
            }
          />
          <Route
            path="/add-technology"
            element={
              admin ? <AddTechnology /> : <Navigate to={"/admin/login"} />
            }
          />
          <Route
            path="/client-requirements"
            element={
              admin ? <ClientRequirements /> : <Navigate to={"/admin/login"} />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
