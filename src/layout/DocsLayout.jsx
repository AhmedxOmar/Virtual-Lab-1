
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DocsLayout() {
    return (
<<<<<<< HEAD
        <div className="bg-inherit text-inherit flex h-full">
            <Sidebar />
            <main className="docsLayoutContainer overflow-auto bg-inherit">
=======
        <div className="flex h-full">
            {/* Sidebar - Scrolls Separately */}
            <Sidebar />

            {/* Main Content - Scrolls Independently */}
            <main className="docsLayoutContainer overflow-auto -none mb-5 ">
>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
                <Outlet />
            </main>
        </div>
    );
}
