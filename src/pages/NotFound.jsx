import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import notFoundImage from "../assets/images/404-fashion-illustration.png";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function NotFound() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 sm:py-28 bg-white text-center"
    >
      {/* Image */}
      <motion.img
        src={notFoundImage}
        alt="Lost on the runway"
        variants={fadeInUp}
        custom={0}
        className="w-48 sm:w-64 h-auto mb-8 sm:mb-10"
      />

      {/* 404 Heading */}
      <motion.h1
        variants={fadeInUp}
        custom={1}
        className="text-6xl sm:text-[6rem] font-bold text-black mb-4 sm:mb-6 tracking-tight leading-none"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        variants={fadeInUp}
        custom={2}
        className="text-base sm:text-xl text-gray-700 mb-8 sm:mb-10 max-w-md sm:max-w-xl leading-relaxed px-2"
      >
        Oops. This page isn’t strutting down the runway.
        <br className="hidden sm:block" />
        Let’s get you back in style.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeInUp}
        custom={3}
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
      >
        <Link
          to="/"
          className="bg-black hover:bg-gray-900 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wide transition-colors duration-200"
        >
          Go Home
        </Link>
        <Link
          to="/products"
          className="border border-black hover:bg-gray-100 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium uppercase tracking-wide transition-colors duration-200"
        >
          Browse Products
        </Link>
      </motion.div>
    </motion.section>
  );
}
