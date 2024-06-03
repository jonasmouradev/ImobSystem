// import ImobSystemIcon from "../../../public/ImobSLogo.png";
import { useNavigate } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

TableHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default function TableHeader(props) {
  const navigate = useNavigate();
  return (
    <div className="md:flex flex-row items-center p-1 2xl:p-10">
      {/* <div className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-lg"> */}
      <button className="btn" onClick={() => navigate("/home")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <div className="Titulo m-10">{props.title}</div>
      {/* </div> */}
      <div className="pl-5 font-sans text-white text-xl">
        <h1>Produtos</h1>
      </div>
    </div>
  );
}
