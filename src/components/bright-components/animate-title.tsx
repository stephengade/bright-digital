'use client'

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const TriggeredTitle = ({children, className}: any) => {
  // Use the Intersection Observer to detect when the element is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={ref} // Assign the ref to the container
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Triggers animation based on `inView`
      className={cn("font-bold text-center py-10", className)}
    >
     {children}
    </motion.div>
  );
};
