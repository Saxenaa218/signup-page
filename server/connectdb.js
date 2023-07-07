import mongoose from "mongoose";

export default function () {
    mongoose.connect("mongodb+srv://abhisheks:admin@cluster0.gr3w7.mongodb.net/personal", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.once("open", () => {
        console.log("Connected to MongoDB");
    });
    return db;
}
