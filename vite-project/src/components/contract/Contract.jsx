import ContractContent from "./ContractContent";
import ContractHeader from "./ContractHeader.jsx";

export default function Contract() {
  return (
    <>
      <div className="overflow-x-auto flex flex-grow flex-col max-h-vh">
        <ContractHeader />
        <ContractContent />
      </div>
    </>
  );
}
