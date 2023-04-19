import React, { useEffect, useState } from "react";
import {
  CheckBadgeIcon,
  XMarkIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";

function OrderPage({
  _id,
  orderItems,
  updatedAt,
  isPaid,
  shippingAddress,
  totalAmt,
  isDelivered,
}) {
  console.log(isPaid);
  const [deliveredStatus, setDeliveredStatus] = useState(isDelivered);

  const handleCheckboxChange = async (event) => {
    const isChecked = event.target.checked;
    console.log("delivedredstatus", deliveredStatus);
    if (isChecked) {
      // send POST request to update isDelivered
      const response = await axios.post("/api/orders/deliveredStatus", { _id });
      setDeliveredStatus(response.data);
    } else {
      setDeliveredStatus(false);
    }
  };
  console.log("chckded", deliveredStatus);
  return (
    <tr>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
        {_id.slice(-7)}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {shippingAddress.fullName}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {shippingAddress.city},{shippingAddress.district},{shippingAddress.ward}
      </td>

      <td className="px-6 max-w-3xlpy-4 text-sm text-gray-800 whitespace-nowrap">
        {orderItems.length > 0 &&
          orderItems.map(({ name }) => (
            <div key={orderItems._id}>
              <h4>{name}</h4>
            </div>
          ))}
      </td>

      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        $ {totalAmt}
      </td>

      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {isPaid ? (
          <CheckBadgeIcon className="h-7 text-blue-600" />
        ) : (
          <XMarkIcon className="h-7 text-red-400" />
        )}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {updatedAt}
      </td>
      <td className="px-6 py-4 max-w-sm bg-blue-200 text-sm text-gray-800 whitespace-nowrap">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={deliveredStatus}
            onChange={handleCheckboxChange}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </td>
    </tr>
  );
}

export default OrderPage;
