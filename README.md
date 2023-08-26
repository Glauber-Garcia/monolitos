<h1 align="center">
    Desafio FullCycle Sistema Monolíticos
</h1>

---

####  Desafio 01
<h3 align="center">
Criação de módulo de Invoice


Neste desafio será necessário criar o módulo completo de invoice - Nota Fiscal do Monolito.

Para este módulo você precisa utilizar:

- Os use cases de find e generate
- Especificar todas as entradas e saídas conforme o DTO exibido ao final deste enunciado.

Os campos do invoice são:

 

id?: Id // criado automaticamente
name: string
document: string
address: Address // value object
items: InvoiceItems[] // Invoice Items entity
createdAt?: Date // criada automaticamente
updatedAt?: Date // criada automaticamente
 
A entidade InvoiceItems precisa ter:

id?: Id // criada automaticamente
name: string
price: number
Para ser considerado completo, o módulo precisa ter o facade, factory, domain, gateway, repository e usecase.

// DTO Find
export interface FindInvoiceUseCaseInputDTO {
  id: string;
}

export interface FindInvoiceUseCaseOutputDTO {
  id: string;
  name: string;
  document: string;
  address: {
    street: string;
    number: string;
    complement: string;
    city: string;
    state: string;
    zipCode: string;
  };
  items: {
    id: string;
    name: string;
    price: number;
  }[];
  total: number;
  createdAt: Date;
}

// DTO Generate
export interface GenerateInvoiceUseCaseInputDto {
  name: string;
  document: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zipCode: string;
  items: {
    id: string;
    name: string;
    price: number;
  }[];
}

export interface GenerateInvoiceUseCaseOutputDto {
  id: string;
  name: string;
  document: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zipCode: string;
  items: {
    id: string;
    name: string;
    price: number;
  }[];
  total: number;
}
* A linguagem de programação para este desafio é TypeScript
</h3>

---

## 🦸 Autor 

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/39419369?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Glauber Garcia</b></sub>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Glauber-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/glauber-lucas-garcia-correa-leite-33390b158/)](https://www.linkedin.com/in/glauber-lucas-garcia-correa-leite-33390b158/)
[![Gmail Badge](https://img.shields.io/badge/-glaubercorreagarcia@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:glaubercorreagarcia@gmail.com)](mailto:glaubercorreagarcia@gmail.com)
