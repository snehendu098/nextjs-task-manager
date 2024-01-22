import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => console.log("Conneced to db"));
    connection.on("error", (err) => {
      console.log("error conn", err);
      process.exit();
    });
  } catch (error: any) {
    console.log("error", error);
  }
}
