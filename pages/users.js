import Layout from "@/components/layout";
import UsersPage from "@/components/pages/users";
import Sidebar from "@/components/sidebar";
import User from "@/models/User";
import db from "@/utils/db";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import DropdownLink from "@/components/DropdownLinks";
import { Menu } from "@headlessui/react";
const UsersDashboard = ({ users }) => {
  const [ShowSidebar, setShowSidebar] = useState(true);
  const { data: session } = useSession();
  const handlelogout = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <>
      <Layout title="Dashboard" />
      <div className="flex h-screen">
     
        <div className="flex-1">
              <UsersPage users={users} />
        </div>
      </div>
    </>
  );
};

export default UsersDashboard;
UsersDashboard.auth = true;

export async function getServerSideProps() {
  await db.connect();
  const users = await User.find().lean();
  await db.disconnect();
  return {
    props: {
      users: users.map(db.convertdoctoobj),
    },
  };
}
