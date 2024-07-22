import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("669e30bb003d32698acd");

const account = new Account(client);

export { client, account };
