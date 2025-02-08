import { useState } from "react";
import HomePage from "./homepage/HomePage";
import Contract from "./Contract";
import Houses from "./Houses/Houses";
import Management from "./Management";

export default function SideBar() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage />;
      case "contract":
        return <Contract />;
      case "houses":
        return <Houses />;
      case "management":
        return <Management />;
      default:
        return <h1>Default</h1>;
    }
  };

  // return (
  //   <>
  //     <div className="md:flex">
  //       <div className="w-1/3 bg-gray-200 flex flex-col items-stretch">
  //         <button
  //           className="sm:hidden md:flex flex-grow hover:bg-sky-700 items-center justify-center"
  //           onClick={() => setPage("home")}
  //         >
  //           ImobSystem
  //         </button>
  //         <button
  //           className="sm:hidden md:flex flex-grow hover:bg-sky-700 items-center justify-center"
  //           onClick={() => setPage("contract")}
  //         >
  //           Contratos
  //         </button>
  //         <button
  //           className="sm:hidden md:flex flex-grow hover:bg-sky-700 items-center justify-center"
  //           onClick={() => setPage("houses")}
  //         >
  //           Casas
  //         </button>
  //         <button
  //           className="sm:hidden md:flex flex-grow hover:bg-sky-700 items-center justify-center"
  //           onClick={() => setPage("management")}
  //         >
  //           Gestão
  //         </button>
  //       </div>
  //       <div className="md:w-2/3 h-screen bg-gray-100">{renderPage()}</div>
  //     </div>
  //   </>
  // );
}
