"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function Template(props: Props) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "anticipate", duration: 0.75 }}
    >
      {props.children}
    </motion.div>
  );
}
