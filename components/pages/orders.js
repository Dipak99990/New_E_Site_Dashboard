import React from "react";
import {
  CheckBadgeIcon,
  XMarkIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";

function OrderPage({
  _id,
  orderItems,
  email = "admin@admin.com",
  isPaid,
  shippingAddress,
  totalAmt,
  isDelivered,
}) {
  console.log(isPaid);
  // console.log(typeof orders);
  // console.log("orders", Array.isArray(orders));
  // console.log("ordr", orders); // check the data type of orders
  // const apple = [1, 2, 3];
  // console.log("apple", Array.isArray(apple));
  const { city, district, ward } = shippingAddress;
  return (
    <tr>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
        {_id}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {shippingAddress.fullName}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {email}
      </td>

      <td className="px-6 max-w-3xlpy-4 text-sm text-gray-800 whitespace-nowrap">
        {orderItems.length > 0 &&
          orderItems.map(({ name }) => <h4>{name},</h4>)}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {isPaid ? (
          <CheckBadgeIcon className="h-7 text-blue-600" />
        ) : (
          <XMarkIcon className="h-7 text-red-400" />
        )}
      </td>
      <td className="px-6 py-4 max-w-sm bg-blue-200 text-sm text-gray-800 whitespace-nowrap">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </td>
    </tr>
  );
}

export default OrderPage;
