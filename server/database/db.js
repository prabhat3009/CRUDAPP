import mongoose from "mongoose";


const Connection = async (username, password) => {

    const URL = `mongodb+srv://${username}:${password}@curdapp.tv9tcxw.mongodb.net/?retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log(`Error while connecting to database `, error);
    }

}

export default Connection;