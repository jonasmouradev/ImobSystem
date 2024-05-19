import HomePage from "./HomePage";

export default function Dashboard() {
  return (
    <div className="h-screen bg-gray-200">
      <HomePage />
    </div>
  );
}


// import { useState } from "react";
// import HomePage from "./HomePage";
// import Contract from "./contract/Contract";
// import Houses from "./Houses";
// import Management from "./Management";

// export default function Dashboard() {
//   const [page, setPage] = useState("home");

//   const renderPage = () => {
//     switch (page) {
//       case "home":
//         return <HomePage />;
//       case "contract":
//         return <Contract />;
//       case "houses":
//         return <Houses />;
//       case "management":
//         return <Management />;
//       default:
//         return <h1>Default</h1>;
//     }
//   };

//   return (
//       <>
//        <div className="md:flex flex-row justify-between">
//         <div className="md:w-1/6 h-screen bg-gray-200 flex flex-col">
//           <ul className="sideBar">
//           <button
//             className="sm:hidden md:flex flex-grow hover:bg-sky-700 items-center justify-center"
//             onClick={() => setPage("home")}
//           >
//             Página Inicial
//           </button>
//           <button
//             className="sm:hidden md:flex flex-grow hover:bg-sky-700 items-center justify-center"
//             onClick={() => setPage("contract")}
//           >
//             Contratos
//           </button>
//           <button
//             className="sm:hidden md:flex flex-grow hover:bg-sky-700 items-center justify-center"
//             onClick={() => setPage("houses")}
//           >
//             Casas
//           </button>
//           <button
//             className="sm:hidden md:flex flex-grow hover:bg-sky-700 items-center justify-center"
//             onClick={() => setPage("management")}
//           >
//             Gestão
//           </button>
//           </ul>
//         </div>
//         <div className="md:w-5/6">{renderPage()}</div>
//       </div>
//     </>
    
//   );
// }
