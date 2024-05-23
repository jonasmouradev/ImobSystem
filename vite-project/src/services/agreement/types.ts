export type AgreementType = {
  owner: string;
  tenant: string;
  description: string;
  valueAgreement: string;
  numInstallments: number;
  status: boolean;
  createdAt: Date;
  updateAt: Date;
  initDateAgreement: Date;
  periodAgreement: Date;
  finalDateAgreement: Date;
};

export type UpdateAgreementType = {
  id: number;
  owner: string;
  tenant: string;
  description: string;
  numInstallments: number;
  status: boolean;
};
