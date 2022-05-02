module.exports  ={
  "type": "mongodb",
  "url": process.env.URL_MONGODB,
  "port": process.env.PORT_MONGODB,
  "database": process.env.DATABASE_MONGODB,
  "logging": false,
  "synchronize": true,
  "useUnifiedTopology": true,
  "entities": [
    process.env.TYPEORM_ENTITIES
  ],
  "repository": [
    process.env.TYPEORM_REPOSITORY
  ]
}