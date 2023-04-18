import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

import { createContext, useState } from "react";

export const StoreContext = createContext({})

export default function StoreContextProviders({ children }) {
    const [ShowSidebar, setShowSidebar] = useState(true);

    return (
        <StoreContext.Provider value={{ ShowSidebar, setShowSidebar }}>
            <div>
                <div className="flex">
                    <div className={`sidebar-container ${ShowSidebar ? '' : 'hidden'} sm:block`}>
                        <Sidebar className="sidebar" />
                    </div>
                    <div className={`flex-grow ${ShowSidebar ? 'ml-40' : 'ml-0'}`}>
                        <Navbar />
                        {children}
                    </div>
                </div>
            </div>
        </StoreContext.Provider>
    )
}
