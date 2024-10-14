import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ScrollToAnimatePage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,      // Trigger when 50% of the element is in view
    initialInView: false // Initially out of view
});

    // Animation variants for the whole text block
    const textVariants = {
        hidden: { opacity: 0, y: 100 },  // Initial state: hidden and positioned below
        visible: { 
            opacity: 1, 
            y: 0,        // Final state: visible and positioned normally
            transition: { duration: 0.8 }  // Transition duration
        }
    };

    return (
        <div className="relative min-h-screen flex bg-stone-300 p-4">
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl">
                {/* Animate the whole text block */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}  // Trigger animation based on inView
                    variants={textVariants}
                    className="text-center"
                >
                    Using React Intersection Observer and Framer Motion,<br />
                    we can animate this text when the user scrolls into view.
                </motion.div>
            </div>
        </div>
    );
};

export default ScrollToAnimatePage;