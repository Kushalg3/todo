const { Client, Account, Databases } = require("appwrite");

const client = new Client();

client
  .setEndpoint("http://localhost:8080/v1")
  .setProject("63f3a79cb8a2bc55cc26");

export const account = new Account(client);
export const databases = new Databases(client, "63f3a9d103e1dd30b7a8");
