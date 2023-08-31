import { Sequelize } from "sequelize-typescript";
import Id from "../../@shared/domain/value-object/id.value-object";
import Client from "../domain/client.entity";
import { ClientModel } from "./client.model";
import ClientRepository from "./client.repository";

describe("ClientRepository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([ClientModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a client", async () => {
    const client = new Client({
      id: new Id("1"),
      name: "Client 1",
      email: "x@x.com",
      document: "0000",
      street: "some address",
      number: "1",
      complement: "",
      city: "some city",
      state: "some state",
      zipCode: "000",
    });

    const repository = new ClientRepository();
    await repository.add(client);

    const result = await ClientModel.findOne({ where: { id: "1" } });

    expect(result).toBeDefined();
    expect(result.id).toBe(client.id.id);
    expect(result.name).toBe(client.name);
    expect(result.email).toBe(client.email);
    // expect(result.document).toBe(client.document);
    // expect(result.street).toBe(client.street);
    // expect(result.number).toBe(client.number);
    // expect(result.complement).toBe(client.complement);
    // expect(result.city).toBe(client.city);
    // expect(result.state).toBe(client.state);
    // expect(result.zipCode).toBe(client.zipCode);
    expect(result.createdAt).toStrictEqual(client.createdAt);
    expect(result.updatedAt).toStrictEqual(client.updatedAt);
  });

  it("should find a client", async () => {
    const client = await ClientModel.create({
      id: "1",
      name: "Client 1",
      email: "x@x.com",
      document: "0000",
      street: "some address",
      number: "1",
      complement: "",
      city: "some city",
      state: "some state",
      zipCode: "000",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const repository = new ClientRepository();
    const result = await repository.find(client.id);

    expect(result.id.id).toEqual(client.id);
    expect(result.name).toEqual(client.name);
    expect(result.email).toEqual(client.email);
    // expect(result.document).toBe(client.document);
    // expect(result.street).toBe(client.street);
    // expect(result.number).toBe(client.number);
    // expect(result.complement).toBe(client.complement);
    // expect(result.city).toBe(client.city);
    // expect(result.state).toBe(client.state);
    // expect(result.zipCode).toBe(client.zipCode);
    expect(result.createdAt).toStrictEqual(client.createdAt);
    expect(result.updatedAt).toStrictEqual(client.updatedAt);
  });
});
