import React, { useContext } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import AuthContext from "../../store/authContext";

const Navigation = ({ showOptions = false, options }) => {
  const { isLoggedIn, user, logOut } = useContext(AuthContext);
  return (
    <nav className="flex w-full justify-between bg-sky-950 p-4 px-12">
      <Link to="/">
        <div className="flex gap-2">
          <img src={logo} alt="Cape Healthcare" className="w-24" />
        </div>
      </Link>
      {options && showOptions && (
        <ul className="flex ">
          {options.map((option, indx) => (
            <li key={`${option.text}-${indx}`} className="flex items-center">
              <Link
                to={option.link}
                className="text-white hover:text-gray-400"
                replace
              >
                {option.text}
              </Link>
            </li>
          ))}
          {isLoggedIn && (
            <li className="flex items-center group hover:cursor-pointer" onClick={logOut}>
              <span className="flex items-center text-white ml-4 group-hover:text-gray-400">
                <span className="material-symbols-outlined mr-1 group-hover:text-red-400">mode_off_on</span>{user?.name}
              </span>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
