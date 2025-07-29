import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/saveContact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    const db = client.db("portfolio"); // database name
    const collection = db.collection("contacts");

    await collection.insertOne({ name, email, message, date: new Date() });

    return res.status(200).json({ success: true, message: "Saved successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Error saving data" });
  } finally {
    await client.close();
  }
});

export default router;
