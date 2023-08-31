export interface AddClientInputDto {
  id?: string;
  name: string;
  email: string;
  document: string;
  street: string;
  complement: string;
  number: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface AddClientOutputDto {
  id: string;
  name: string;
  email: string;
  document: string;
  street: string;
  complement: string;
  number: string;
  city: string;
  state: string;
  zipCode: string;
  createdAt: Date;
  updatedAt: Date;
}
