const { Client, Account, Databases } = require("appwrite");

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("63efc199ac4f76beda1c");

export const account = new Account(client);
export const database = new Databases(client, "63f0e490dec756660463");
