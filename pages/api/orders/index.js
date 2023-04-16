import Order from "@/models/Order";
import db from "@/utils/db";
import axios from "axios";

export default async function handler(req, res) {
  try {
    await db.connect();
    const orders = await Order.find();
    res.send(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching orders data" });
  } finally {
    await db.disconnect();
  }
}
