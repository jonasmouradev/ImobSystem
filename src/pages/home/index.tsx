import Dropdown from '@/components/Dropdown';
import FormNewHouse from './components/formNewHouse';
import FormNewOwner from './components/formNewOwner';
import FormNewTenant from './components/formNewTenant';
import FormNewContract from './components/formNewContract';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/Button';
import { PaperPlusIcon } from '@/assets/icons/paper-plus';
import { HouseIcon } from '@/assets/icons/house';
import { PencilIcon } from '@/assets/icons/pencil';
import { GroupIcon } from '@/assets/icons/group';
import { ContractsIcon } from '@/assets/icons/contracts';
import { BoxIcon } from '@/assets/icons/box';
import { BackArrowIcon } from '@/assets/icons/back-arrow';
import { FlexWrapper } from '@/components/FlexWrapper';
import { Title } from '@/components/Title';
import { ModalWrapper } from '@/components/ModalWrapper';

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="md:h-screen flex items-center justify-center custom-background homeBtn">
      <div className="image-background">
        <div className="flex flex row">
          <button className="btn" onClick={handleLogout}>
            <BackArrowIcon />
          </button>
          <div className="Titulo m-10">
            ImobSystem
            <br />
            Gestão de Contratos
          </div>
          <div className="indicator notification-box p-20">
            <Dropdown />
          </div>
        </div>
        <div className="content-overlay">
          <Button
            onClick={() => {
              const modal = document.getElementById(
                'modal_contract',
              ) as HTMLDialogElement;
              if (modal) {
                modal.showModal();
              }
            }}
          >
            <FlexWrapper>
              <PaperPlusIcon />
              <ModalWrapper id="modal_contract">
                <FormNewContract />
              </ModalWrapper>
              <Title>Novo Contrato</Title>
            </FlexWrapper>
          </Button>
          {/* Nova Casa */}
          <Button
            onClick={() => {
              const modal = document.getElementById(
                'modal_house',
              ) as HTMLDialogElement;
              if (modal) {
                modal.showModal();
              }
            }}
          >
            <FlexWrapper>
              <HouseIcon />
              <Title>Nova Casa</Title>
              <ModalWrapper id="modal_house">
                <FormNewHouse />
              </ModalWrapper>
            </FlexWrapper>
          </Button>
          <Button
            onClick={() => {
              const modal = document.getElementById(
                'modal_owner',
              ) as HTMLDialogElement;
              if (modal) {
                modal.showModal();
              }
            }}
          >
            <FlexWrapper>
              <PencilIcon />
              <Title>Cadastrar Proprietário</Title>
              <ModalWrapper id="modal_owner">
                <FormNewOwner />
              </ModalWrapper>
            </FlexWrapper>
          </Button>
          {/* Novo Inquilino */}
          <Button
            onClick={() => {
              const modal = document.getElementById(
                'modal_tenant',
              ) as HTMLDialogElement;
              if (modal) {
                modal.showModal();
              }
            }}
          >
            <FlexWrapper>
              <GroupIcon />
              <Title>Cadastrar Inquilino</Title>
              <ModalWrapper id="modal_tenant">
                <FormNewTenant />
              </ModalWrapper>
            </FlexWrapper>
          </Button>
          {/* Abrir Contratos */}
          <Button onClick={() => navigate('/contracts/active')}>
            <FlexWrapper>
              <ContractsIcon />
              <Title>Abrir Contratos</Title>
            </FlexWrapper>
          </Button>
          <Button onClick={() => navigate('/contracts/terminated')}>
            <FlexWrapper>
              <BoxIcon />
              <Title>Contratos finalizados</Title>
            </FlexWrapper>
          </Button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
