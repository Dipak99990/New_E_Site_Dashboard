import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const { createContext, useState } = require("react");

export const StoreContext = createContext({})

export default function StoreContextProviders({ children }) {
    const [ShowSidebar, setShowSidebar] = useState(true);

    return (
        <StoreContext.Provider value={{ ShowSidebar, setShowSidebar }}>
            <div>
                <div className="flex" >
                    <Sidebar />
                    <div className={`flex-grow ${ShowSidebar ? 'ml-40' : 'ml-0'}`}>
                        <Navbar />
                        {children}
                    </div>
                </div>
            </div>
        </StoreContext.Provider>
    )
}