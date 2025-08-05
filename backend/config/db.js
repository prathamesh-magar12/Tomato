import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://time1080p:TnGKCWqwcMEsKfsh@cluster1.gsunsdx.mongodb.net/"
    )
    .then(() => {
      console.log("DB connected");
    });
};
