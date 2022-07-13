import { useEffect, useState, useRef } from "react";
import "./App.css";
import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiInstagram, mdiEmailOutline, mdiLinkedin, mdiGithub } from "@mdi/js";

function App() {
    const [tool, setTool] = useState(0);
    const group = [
        "web development",
        "scripting",
        "photography",
        "bots",
        "design",
        "acrylic",
    ];
    const ref = useRef<HTMLSpanElement>(null);
    function delay(delayInms: number) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(2);
            }, delayInms);
        });
    }
    useEffect(() => {
        setInterval(() => {
            setTool((tool) => (tool + 1) % group.length);
        },2000);
    }, []);
    const list = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: 4.5,
                staggerChildren: 1,
            },
        },
        hidden: {
            opacity: 0,
        },
    };
    const list2 = {
        visible: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
        },
    };
    return (
        <div className="App">
            <div className="bg-[url('./images/hero.jpg')] bg-cover w-screen h-screen z-0"></div>
            <div className="w-screen h-screen absolute z-10 top-0 left-0">
                <div className="container w-[80%] md:w-3/4 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-full md:w-2/3">
                        <motion.h2
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 50, opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="text-3xl font-light"
                        >
                            Hi, I'm Jaden
                        </motion.h2>
                        <motion.h1
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 50, opacity: 0 }}
                            transition={{ duration: 1, delay: 2 }}
                            className="text-5xl md:text-7xl font-bold leading-[4rem] text-not-black"
                        >
                            and I connect art with technology
                        </motion.h1>
                        <motion.h2
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 50, opacity: 0 }}
                            transition={{ duration: 1, delay: 3 }}
                            className="text-3xl font-light mt-3"
                        >
                            by using{" "}
                            <span
                                className={`font-semibold text-not-black relative before`}
                                ref={ref}
                            >
                                {group[tool].replace(" ", "\u00A0")}
                            </span>
                        </motion.h2>
                        <div className="flex items-center gap-4 mt-4 flex-wrap">
                            {/* <motion.div
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                transition={{ duration: 1, delay: 4 }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    className="px-6 py-3 font-semibold bg-not-cyan text-white rounded-lg"
                                >
                                    Contact Me
                                </motion.button>
                            </motion.div> */}
                            <motion.div
                                animate="visible"
                                initial="hidden"
                                variants={list}
                                className="flex justify-center items-center gap-3"
                            >
                                <motion.a
                                    variants={list2}
                                    href="mailto:jadenhou19@gmail.com"
                                    aria-label="Mail"
                                >
                                    <Icon
                                        path={mdiEmailOutline}
                                        size={1.2}
                                        className="fill-not-black cursor-pointer"
                                    />
                                </motion.a>
                                <motion.a
                                    variants={list2}
                                    href="https://github.com/InternetRamen"
                                    aria-label="GitHub"
                                >
                                    <Icon
                                        path={mdiGithub}
                                        size={1.2}
                                        className="fill-not-black cursor-pointer"
                                    />
                                </motion.a>
                                <motion.a
                                    variants={list2}
                                    href="https://www.instagram.com/houjaden"
                                    aria-label="Instagram"
                                >
                                    <Icon
                                        path={mdiInstagram}
                                        size={1.2}
                                        className="fill-not-black cursor-pointer"
                                    />
                                </motion.a>
                                <motion.a
                                    variants={list2}
                                    href="https://www.linkedin.com/in/jaden-hou-01215a235"
                                    aria-label="LinkedIn"
                                >
                                    <Icon
                                        path={mdiLinkedin}
                                        size={1.2}
                                        className="fill-not-black cursor-pointer"
                                    />
                                </motion.a>
                                <motion.a
                                    variants={list2}
                                    className="text-lg text-not-black"
                                    href="/cv.pdf"
                                    aria-label="CV"
                                >
                                    CV
                                </motion.a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
