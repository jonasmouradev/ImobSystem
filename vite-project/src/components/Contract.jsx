import { FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Contract() {
  return (
    <div className="flex items-center justify-evenly pt-20">
      <div className="relative">
        <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Contratos"
          className="border-2 border-gray-300 p-2 m-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
        />
      </div>
      <IoIosNotificationsOutline size={40} />
    </div>
  );
}
