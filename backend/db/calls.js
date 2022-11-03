const {MongoClient} = require('mongodb')

const calls = module.exports

const db = process.env.DB

const URI = process.env.URI
const client = new MongoClient(URI)

calls.listDB = async () => {
    await client.connect()
    const dbList = await client.db().admin().listDatabases()
    console.log(dbList)
    await client.close()
}

calls.find = async (collection, query, limit, page) => {
    await client.connect()
    const response = await client.db(db).collection(collection).find(query).limit(parseInt(limit)).skip(parseInt(limit) * parseInt(page)).toArray()
    await client.close()
    return response
}

calls.insert = async (collection, data) => {
    await client.connect()
    const response = await client.db(db).collection(collection).insertOne(data)
    await client.close()
    return response
}
