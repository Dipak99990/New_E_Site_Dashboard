import { signOut, useSession } from "next-auth/react";
import React, { useContext } from "react";
import { Menu } from "@headlessui/react";
import { StoreContext } from "@/providers/StoreContext";
import DropdownLink from "./DropdownLinks";

function Navbar() {
  const { setShowSidebar } = useContext(StoreContext);
  const { data: session } = useSession();

  function handleShowSideBar() {
    setShowSidebar((prevState) => !prevState);
  }
  const handlelogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div>
      {" "}
      <nav className="bg-green-700 text-green-100 px-4 py-3">
        <div className="flex justify-between">
          <div className="flex gap-8">
            <div>
              <button onClick={handleShowSideBar} className="fixed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div>New Sharma Furniture Udhyoug</div>
          </div>

          <Menu>
            <Menu.Button>{session.user.name}</Menu.Button>
            <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
              <Menu.Item as="div">
                <DropdownLink
                  className="dropdown-link"
                  onClick={handlelogout}
                  href="#"
                >
                  Log Out
                </DropdownLink>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
