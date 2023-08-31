import express, { Request, Response } from "express";

import { AddClientFacadeInputDto } from "../../modules/client-adm/facade/client-adm.facade.interface";
import ClientAdmFacadeFactory from "../../modules/client-adm/factory/client-adm.facade.factory";

export const clientsRoute = express.Router();

clientsRoute.post("/", async (request: Request, response: Response) => {
  const facade = ClientAdmFacadeFactory.create();

  try {
    const { 
      id,
      name,
      email,
      document,
      street,
      complement,
      number,
      city,
      state,
      zipCode
     } = request.body;

    const clientDto: AddClientFacadeInputDto = {
      id,
      name,
      email,
      document,
      street,
      complement,
      number,
      city,
      state,
      zipCode
    };

    await facade.add(clientDto);

    response.status(201).send();
  } catch (error) {
    response.status(400).send(error);
  }
});
