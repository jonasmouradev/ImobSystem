import { FlexWrapper } from '@/components/FlexWrapper';
import TableContent from './components/TableContent';
import TableHeader from './components/TableHeader';

export default function Contract() {
  return (
    <FlexWrapper className="overflow-x-auto flex flex-grow flex-col max-h-vh">
      <TableHeader title="Contratos Ativos" />
      <TableContent />
    </FlexWrapper>
  );
}
