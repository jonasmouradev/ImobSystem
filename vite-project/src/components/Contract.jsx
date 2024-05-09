import ContractContent from "./ContractContent";
import ContractNavBar from "./ContractNavBar.jsx";

export default function Contract() {
  return (
    <>
      <div className="md:flex flex-col h-screen justify-around items-center mr-20 ">
        <ContractNavBar />
        <ContractContent />
      </div>
    </>
  );
}
