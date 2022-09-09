import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/img/logo.png";
import "./navigation.scss";

export const Navigation = () => {
  const { userCredit } = useSelector((state) => state.cartReducer);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-lg fixed w-full z-50">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} alt="Logo" />{" "}
        <span className="text-black text-lg font-semibold ml-4">
          Coding Challenge
        </span>
      </div>
      <div className="block lg:hidden"></div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            {userCredit.toFixed(2)} credits
          </span>
        </div>
      </div>
    </nav>
  );
};
