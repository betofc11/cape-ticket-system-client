import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import AuthContext from "../../store/authContext";

const LayoutWrapper = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  const NAV_LINKS = [
    {
      text: (
        <div className="flex items-center">
          <span className="material-symbols-outlined mr-1">cottage</span>Home
        </div>
      ),
      link: "/",
    },
  ];

  return (
    <>
      <Navigation showOptions={isLoggedIn} options={NAV_LINKS} />
      <main className="flex flex-1 px-12 py-4 flex-col">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default LayoutWrapper;
