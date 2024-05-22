import TableContent from "./TableContent.tsx";
import TableHeader from "./TableHeader.jsx";

export default function Contract() {
  return (
    <>
      <div className="overflow-x-auto flex flex-grow flex-col max-h-vh">
        <TableHeader />
        <TableContent />
      </div>
    </>
  );
}
