import Mongoose from 'mongoose';

Mongoose.set('debug', true);
Mongoose.Promise = global.Promise;

const connectToDb = async () => {
    try {
        const {
            DB_USER, DB_HOST, DB_NAME, DB_PORT, DB_PASS,
        } = process.env;

        const connString = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

        await Mongoose.connect(connString, { useNewUrlParser: true });

        console.log('Successfully connected to DB');
    } catch (err) {
        console.log('Could not connect to MongoDB, error:', err.message);
    }
};

export default connectToDb;
