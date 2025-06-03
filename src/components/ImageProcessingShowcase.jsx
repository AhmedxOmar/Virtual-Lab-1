import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import showCaseImg from "../assets/showCase-input.jpg";
<<<<<<< HEAD
import snippetImg from "../assets/code snippets.png";

=======
import showCase from "../assets/default-avatar.png";
import snippetImg from "../assets/code snippets.png"
>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
const ImageProcessingShowcase = () => {
    const containerRef = useRef(null);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });
    const x = useMotionValue(0);
    const clipPath = useTransform(x, (val) => `inset(0 0 0 ${val}px)`);

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            setConstraints({ left: 0, right: containerWidth });
<<<<<<< HEAD
            x.set(containerWidth / 2); // Start centered
=======
            x.set(containerWidth / 2); // Start in center position
>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
        }
    }, []);

    return (
<<<<<<< HEAD
        <section className="py-20 bg-neutral-background">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
=======
        <section className="py-20 bg-[#0f0f0f]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">

>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={snippetImg}
                        alt="Code Snippet"
                        className="rounded-2xl scale-[1.2]"
                    />
                </motion.div>

                {/* Image Reveal Slider */}
                <div
                    ref={containerRef}
<<<<<<< HEAD
                    className="relative w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-lg border border-neutral-border justify-self-end"
=======
                    className="relative w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-lg border border-[#3a3a3a] justify-self-end"
>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
                >
                    {/* Bottom Image (Original) */}
                    <img
                        src={showCaseImg}
                        alt="Original"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />

                    {/* Top Image (Processed) */}
                    <motion.div
<<<<<<< HEAD
                        className="absolute top-0 left-0 w-full h-full overflow-hidden bg-gray-700"
=======
                        className="absolute top-0 left-0 w-full h-full overflow-hidden"
>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
                        style={{ clipPath }}
                    >
                        <img
                            src={showCaseImg}
                            alt="Processed"
                            className="w-full h-full object-cover grayscale"
                        />
                    </motion.div>

                    {/* Slider Handle */}
                    <motion.div
                        drag="x"
                        dragConstraints={constraints}
                        style={{ x }}
<<<<<<< HEAD
                        className="absolute top-0 h-full w-auto cursor-col-resize z-10 flex items-center justify-center"
                    >
                        <div className="w-1 h-full bg-[#00a0ff]" />
                        <div className="absolute w-6 h-6 bg-white dark:bg-neutral-surface rounded-full shadow-md border-2 border-primary" />
=======
                        className="absolute top-0 h-full w-8 cursor-col-resize z-10 flex items-center justify-center"
                    >
                        <div className="w-1 h-full bg-blue-500" />
                        <div className="absolute w-6 h-6 bg-white rounded-full shadow-md border-2 border-blue-500" />
>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ImageProcessingShowcase;
