import React from "react";

function OrderPage({ orders }) {
  console.log(typeof orders);
  console.log("orders", Array.isArray(orders));
  console.log("ordr", orders); // check the data type of orders
  const apple = [1, 2, 3];
  console.log("apple", Array.isArray(apple));
  return (
    <div>
      <table className="min-w-full">
        <thead className="border-b">
          <tr>
            <th className="p-2 border-r text-left">Order_Id</th>
            <th className="p-2 border-r text-left">OrderItems</th>
            <th className="p-2 border-r text-left">Address</th>
            <th className="p-2 border-r text-left">TotalAmount</th>
            <th className="p-2 border-r text-left">Paid Status</th>
            <th className="p-2 border-r text-left">IsDelivered</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default OrderPage;
