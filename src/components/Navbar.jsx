import { Search, Bell } from "lucide-react";
import user from "../assets/user.jpeg";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  function locationName() {
    if (path === "") {
      return "dashboard";
    } else return path;
  }

  const headerName = locationName();

  console.log(headerName);
  return (
    <header className="bg-white h-20 px-20 flex items-center justify-between border-b border-gray-300">
      <section>
        <h1 className="font-bold text-2xl capitalize">{headerName}</h1>
      </section>
      <section className="flex items-center gap-4">
        <div className="flex items-center gap-4 border border-gray-400 rounded p-2 px-4">
          <Search className="text-gray-400" />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
        <Bell className="text-gray-400 hover:text-gray-600 cursor-pointer" />
        <img
          src={user}
          alt=""
          className="h-10 w-10 rounded-full object-cover cursor-pointer"
        />
      </section>
    </header>
  );
};

export default Navbar;
