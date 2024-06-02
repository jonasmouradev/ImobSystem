import { HouseType } from '../house/types';

export type AgreementType = {
  owner: string;
  tenant: string;
  description: string;
  valueAgreement: string;
  numInstallments: number;
  status: boolean;
  initDateAgreement: Date;
  finalDateAgreement: Date;
  house: HouseType | undefined;
};

export type UpdateAgreementType = {
  id: number;
  owner: string;
  tenant: string;
  description: string;
  numInstallments: number;
  status: boolean;
};
