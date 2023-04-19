import Layout from "@/components/layout";
import OrderPage from "@/components/pages/orders";

import Order from "@/models/Order";
import db from "@/utils/db";

export default function OrdersDashboard({ orders }) {
  console.log(orders);

  return (
    <>
      <Layout title="Dashboard" />
      <div className="flex h-screen">
        <div className="flex-1">
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          OrderId
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Address
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Order Items
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Total Amount
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Paid Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Order Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 max-w-[6rem] py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Mark as completed
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {orders.length > 0 &&
                        orders.map((order) => (
                          <OrderPage key={order._id} {...order} />
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

OrdersDashboard.auth = true;
export async function getServerSideProps() {
  await db.connect();
  const data = await Order.find().lean();
  const orders = data.map(db.convertdoctoobj).filter((order) => order);
  await db.disconnect();
  return {
    props: {
      orders: orders,
    },
  };
}
