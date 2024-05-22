import ContractContent from "./ContractContent";
import ContractNavBar from "./ContractNavBar.jsx";

export default function Contract() {
  return (
    <>
      <div className="md:flex flex-col h-screen justify-between items-center pt-10 pl-20 pr-20">
        <ContractNavBar />
        <ContractContent />
     
      </div>
    </>
  );
}
