const mongoose = require('mongoose')
const databaseUrl = "mongodb+srv://Leny:6OIo6GCXRe7HZDbC@cluster0.yvdruvj.mongodb.net/?retryWrites=true&w=majority"

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
