<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../ThemeProvider";

export default function Layout() {
    return (
        <div className="flex flex-col h-screen overflow-hidden bg-[var(--color-neutral-surface)] text-[var(--color-neutral-text-primary)] transition-colors duration-300">
            <Navbar />
            <main className="flex-1 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
}
=======
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            {/* Top Navbar */}
            <Navbar />

            {/* Main Content (Fills Remaining Space) */}
            <div className="flex-1 overflow-auto">{children}</div>
        </div>
    );
}
>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
