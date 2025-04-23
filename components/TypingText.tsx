import { motion } from 'framer-motion';

interface TypingTextProps {
  text: string;
  textStyles?: string; // Prefer specific type instead of `any`
}

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: i * 0.05,
    },
  }),
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

const TypingText = ({ text, textStyles = '' }: TypingTextProps) => (
  <motion.div
    variants={containerVariant}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={textStyles}
  >
    {Array.from(text).map((letter, index) => (
      <motion.span key={index} variants={textVariants}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.div>
);

export default TypingText;
