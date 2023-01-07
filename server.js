const express = require('express');
const app = express();



const port = process.env.PORT || 3000;

app.use('/', require('./routes'))// http://localhost:3000

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

const {MongoClient} = require('mongodb');

async function main() {
	/**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = "mongodb+srv://swordgeo:ogisdumb@cluster0.e61pr3o.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    await listDatabases(client);
  } catch(e) {
    console.error(e);
  } finally {
    await client.close();
  }

}

main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => {
    console.log(`- ${db.name}`);
  })
}