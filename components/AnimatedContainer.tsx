import React, { ReactNode } from 'react'
import { motion } from 'framer-motion';

interface AnimatedContainerProps {
    children: ReactNode;
    delay: number;
    Styles?: string;
}


const AnimatedContainer = ({ children, delay, Styles }: AnimatedContainerProps) => {
    const variant = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'tween',
                ease: 'easeIn',
                duration: 0.5,
                delay: delay,
            },
        },
    };
    return (
        <motion.div
            variants={variant}
            initial="hidden"
            whileInView="show"
            className={Styles}
            viewport={{ once: true }}
        >
            {children}

        </motion.div>
    )
}

export default AnimatedContainer


