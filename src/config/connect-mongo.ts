import mongoose from 'mongoose';
import colors from 'colors';

const connectMongo = async () => {
  try {
    let mongoUri: string = '';
    const {
      MONGO_PROTOCOL,
      MONGO_DATABASE,
      MONGO_PORT,
      MONGO_USER,
      MONGO_PASSWORD,
      MONGO_CLUSTER,
      MONGO_PARAMS,
    } = process.env;
    if (MONGO_PROTOCOL === 'mongodb+srv') {
      mongoUri = `${MONGO_PROTOCOL}://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.utytl.mongodb.net/${MONGO_DATABASE}?${MONGO_PARAMS}`;
    } else if (MONGO_PROTOCOL === 'mongodb') {
      mongoUri = `${MONGO_PROTOCOL}://localhost:${MONGO_PORT}/${MONGO_DATABASE}`;
    }
    const conn = await mongoose.connect(mongoUri);
    console.log(
      colors.underline.cyan(`MongoDB Connected: ${conn.connection.host}`)
    );

    return conn;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectMongo;
