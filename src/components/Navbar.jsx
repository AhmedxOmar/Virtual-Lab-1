import { Link, useLocation, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { useState } from "react";
=======
import { useState, useEffect } from "react";
>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
import AuthModalManager from "./AuthModalManager";
import logo from "../assets/virtual-lab-logo.png";
import SearchModal from "./SearchModal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import defaultAvatar from "../assets/default-avatar.png";
import { FiSearch } from "react-icons/fi";
<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";

import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from "../ThemeProvider";

=======
import { IoCloseCircle } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
const Navbar = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
<<<<<<< HEAD
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const isDocsPage = location.pathname.startsWith("/docs");

    // Get theme context
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

=======
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const isDocsPage = location.pathname.startsWith("/docs");

>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
    const handleLogout = () => {
        dispatch(logout());
        setShowDropdown(false);
        navigate("/");
    };

    return (
<<<<<<< HEAD
        <nav className="sticky top-0 left-0 right-0 z-50 bg-[var(--color-neutral-surface)] backdrop-blur-md border-b border-[var(--color-neutral-border)] shadow-sm px-4 py-3 poppins-regular transition-colors duration-300">
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center text-center">
                    <img
                        className="p-[0.5rem] h-[60px] w-auto navLogo dark:brightness-100"
                        src={logo}
                        alt="logo"
                    />
                </Link>

                <div className="flex gap-6 transition-colors duration-300">
                    <Link
                        to="/docs/chapter_1_1_what_is_image_processing"
                        className="text-[var(--color-neutral-text-secondary)] hover:text-[var(--color-neutral-text-primary)] text-[16px] font-medium transition-colors"
                    >
                        Docs
                    </Link>
                    <Link
                        to="/about"
                        className="text-[var(--color-neutral-text-secondary)] hover:text-[var(--color-neutral-text-primary)] text-[16px] font-medium transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        to="/blogs"
                        className="text-[var(--color-neutral-text-secondary)] hover:text-[var(--color-neutral-text-primary)] text-[16px] font-medium transition-colors"
                    >
                        Blog
                    </Link>
                    <Link
                        to="/community"
                        className="text-[var(--color-neutral-text-secondary)] hover:text-[var(--color-neutral-text-primary)] text-[16px] font-medium transition-colors"
                    >
                        Community
                    </Link>
                </div>

                <div className="flex items-center gap-3 select-none">
                    {/* Theme Toggle Button - Updated */}
                    <button
                        className="p-[12px] rounded-lg bg-[var(--color-neutral-background)] hover:bg-[var(--color-secondary-surface-tint)] text-[var(--color-neutral-text-secondary)] transition-colors border border-[var(--color-neutral-border)]"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={theme}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isDark ? (
                                    <FiSun className="text-yellow-300" size={22} />
                                ) : (
                                    <FiMoon className="text-gray-700" size={22} />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </button>

                    {isDocsPage && (
                        <button
                            className="p-[12px] rounded-lg bg-[var(--color-neutral-background)] hover:bg-[var(--color-secondary-surface-tint)] text-[var(--color-neutral-text-secondary)] transition-colors border border-[var(--color-neutral-border)]"
                            onClick={() => setIsSearchOpen(true)}
                            aria-label="Open search"
                        >
                            <FiSearch size={22} />
                        </button>
                    )}

                    {user ? (
                        <div className="relative cursor-pointer">
                            <div
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="flex items-center gap-2"
                            >
                                <img
                                    src={`${user.image || defaultAvatar}?v=${Date.now()}`}
                                    alt="User"
                                    className="w-10 h-10 rounded-lg object-cover border border-[var(--color-neutral-border)]"
                                />
                                <span className="text-[var(--color-neutral-text-primary)] font-medium hidden md:inline">
                                    {user.name}
                                </span>
                            </div>
                            {showDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-[var(--color-neutral-surface)] rounded-md shadow-lg border border-[var(--color-neutral-border)] z-50 overflow-hidden">
                                    <div
                                        className="px-4 py-3 text-[var(--color-neutral-text-primary)] hover:bg-[var(--color-secondary-surface-tint)] transition-colors duration-200 cursor-pointer"
                                        onClick={() => {
                                            setShowDropdown(false);
                                            navigate("/profile");
                                        }}
                                    >
                                        Profile Dashboard
                                    </div>
                                    <div
                                        className="px-4 py-3 text-[var(--color-neutral-text-primary)] hover:bg-[var(--color-secondary-surface-tint)] transition-colors duration-200 cursor-pointer"
                                        onClick={handleLogout}
                                    >
=======
        <nav className="sticky top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md shadow-md border-b border-white/10 px-4 py-3 poppins-regular">
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center">

                <Link to="/" style={styles.logo} className="flex items-center text-center">
                    <img className="p-[0.5rem]" src={logo} alt="logo" width={140} />
                </Link>

                <div className="flex gap-[1.5rem]" style={styles.navLinks}>
                    <Link to="/docs/chapter_1_1_what_is_image_processing" className="text-white text-[16px] transition-colors">Docs</Link>
                    <Link to="/about" className="text-white text-[16px] transition-colors">About</Link>
                    <Link to="/blogs" className="text-white text-[16px] transition-colors">Blog</Link>
                    <Link to="/community" className="text-white text-[16px] transition-colors">Community</Link>
                </div>




                <div className="flex gap-[1rem] items-center">
                    {isDocsPage && (
                        <div className="mx-4 flex mr-[0rem] items-center">
                            <div
                                onClick={() => setIsSearchOpen(true)}
                                className="bg-[#1f1f1f] py-[16px] px-[16px] rounded-[12px] border border-[#3B3B3B] hover:bg-[#3B3B3B] cursor-pointer"
                            >
                                <FiSearch size={22} />
                            </div>
                        </div>
                    )}


                    {user ? (
                        <div className="relative cursor-pointer">
                            <div onClick={() => setShowDropdown(!showDropdown)} className="flex items-center gap-2">
                                <img
                                    src={`${user.image || defaultAvatar}?v=${Date.now()}`}
                                    alt="User"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <span className="text-white font-semibold">{user.name}</span>
                            </div>
                            {showDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                                    <div className="px-4 py-2 cursor-pointer" onClick={() => {
                                        setShowDropdown(false);
                                        navigate("/profile");
                                    }}>
                                        Profile Dashboard
                                    </div>
                                    <div className="px-4 py-2  cursor-pointer" onClick={handleLogout}>
>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
                                        Log out
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button
<<<<<<< HEAD
                            className="px-5 py-2.5 rounded-lg bg-[var(--color-primary-base)] hover:bg-[var(--color-primary-hover)] text-[var(--color-primary-text-on-primary)] font-medium transition-colors"
=======
                            className="bg-[#1f1f1f] text-[white] text-[14px] cursor-pointer border border-[#3B3B3B] py-[16px] px-[38px] hover:bg-[#3B3B3B] rounded-[12px] ease-in-out font-bold "
                            style={styles.button}
>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
                            onClick={() => setActiveModal('signup')}
                        >
                            Sign Up
                        </button>
                    )}
                </div>

                {activeModal && (
                    <AuthModalManager activeModal={activeModal} setActiveModal={setActiveModal} />
                )}
<<<<<<< HEAD
=======

>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
            </div>
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </nav>
    );
};

<<<<<<< HEAD
export default Navbar;
=======
const styles = {
    navbar: {
        fontFamily: "Poppins"
    },
    button: {
        fontFamily: "Poppins",
    },

};

export default Navbar;
>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
