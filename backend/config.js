export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/Eco-price',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    accessKeyId: process.env.accessKeyId || 'accessKeyId',
    secretAccessKey: process.env.secretAccessKey || 'secretAccessKey'
}
