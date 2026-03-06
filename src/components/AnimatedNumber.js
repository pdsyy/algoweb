import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion, animate } from "framer-motion";

const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;
    const prefix = value.match(/^[^\d]+/)?.[0] || "";
    const suffix = value.match(/[^\d]+$/)?.[0] || "";

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });

    useEffect(() => {
        if (isInView) {
            animate(motionValue, numericValue, { duration: 2});
        }
    }, [isInView, motionValue, numericValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
            }
        });
    }, [springValue, prefix, suffix]);

    return <span ref={ref}>{prefix}0{suffix}</span>;
};

export default AnimatedNumber