import Order from "@/models/Order";
import db from "@/utils/db";

export default async function handler(req, res) {
  const orderId = req.body._id;

  try {
    await db.connect();
    const order = await Order.findById(orderId);
    if (order) {
      order.isDelivered = true;
      await order.save(); // Save the updated order data to the database
      res.status(200).json({ message: "Order delivered successfully" }); // Return a success response
    } else {
      res.status(404).json({ message: "Order not found" }); // Return a 404 error response if the order is not found
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error delivering order" }); // Return a 500 error response if there is an error
  } finally {
    await db.disconnect();
  }
}
