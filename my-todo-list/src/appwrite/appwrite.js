import {Client, Account, Databases} from 'appwrite';


const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("64c3798b561bebdaec67");



// Account to check the valid user
export const account = new Account(client);


//database pass(client, database-id)
export const databases = new Databases(client, "64c379e83a01e4e7c325");

