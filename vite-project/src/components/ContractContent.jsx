import { FaRegUserCircle } from "react-icons/fa";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";

export default function ContractContent() {
  return (
    <>
      <h1 className="p-20 text-4xl font-semibold">Contratos</h1>
      <div className="sm:flex">
        <ol className="sm:flex w-4/5 pl-20 flex-col">
          <li className="sm:flex h-32">
            <button className="sm:flex flex-row w-dvw hover:bg-gray-300 items-center justify-around">
              <div className="flex flex-row items-center w-60">
                <FaRegUserCircle size={50} />
                <p className="text-xl font p-6">Jonas</p>
              </div>
              <p className="text-xl font">24 endereços</p>
              <IoEllipsisHorizontalCircle size={30} />
            </button>
          </li>
          <li className="sm:flex h-32">
            <button className="sm:flex flex-row w-dvw hover:bg-gray-300 items-center justify-around">
              <div className="flex flex-row items-center w-60">
                <FaRegUserCircle size={50} />
                <p className="text-xl font p-6">Gabriel</p>
              </div>
              <p className="text-xl font">12 endereços</p>
              <IoEllipsisHorizontalCircle size={30} />
            </button>
          </li>
          <li className="sm:flex h-32">
            <button className="sm:flex flex-row w-dvw hover:bg-gray-300 items-center justify-around">
              <div className="flex flex-row items-center w-60">
                <FaRegUserCircle size={50} />
                <p className="text-xl font p-6">Willians</p>
              </div>
              <p className="text-xl font">16 endereços</p>
              <IoEllipsisHorizontalCircle size={30} />
            </button>
          </li>
        </ol>
      </div>
    </>
  );
}
