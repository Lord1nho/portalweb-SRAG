const {noEspcVac} = require('./query.js')
const { MongoClient, ServerApiVersion } = require('mongodb')

const uri = "mongodb+srv://Admin:programacaoweb1@cluster0.7142auk.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {

  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const db = client.db("ProgWeb").collection("Dados2022")
    const findFilter5 = await db.countDocuments(noEspcVac)
    const findFilter2 = await db.countDocuments({ $and: [{ VACINA_COV: 2}, {CLASSI_FIN: 5}]})
    const findFilter3 = await db.countDocuments({ $and: [{ VACINA_COV: 2}, {CLASSI_FIN: null}]})
    const findFilter1 = await db.countDocuments({ VACINA_COV: 1})
    const findFilter4 = await db.countDocuments({ VACINA_COV: {$in :[null,9] }})
    const findAll = await db.countDocuments({})
    // const toArray = await findAll.toArray()
    
    console.log(findFilter5, findFilter1, findFilter2, findFilter3,findFilter4, findAll)
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

