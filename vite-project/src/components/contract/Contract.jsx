import ContractContent from "./ContractContent";
import ContractNavBar from "./ContractNavBar.jsx";

export default function Contract() {
  return (
    <>
      <div className="md:flex flex-col h-screen justify-evenly items-center pt-0 ">
        <ContractNavBar />
        <ContractContent />
      </div>
    </>
  );
}
