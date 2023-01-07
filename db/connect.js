

const {MongoClient} = require('mongodb');

async function main() {

  const uri = "mongodb+srv://swordgeo:ogisdumb@cluster0.e61pr3o.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

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

