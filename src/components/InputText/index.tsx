import React from "react";
import styles from "./inputText.module.css";

const InputText = ({ ...props }: React.HTMLAttributes<HTMLInputElement>) => {
  console.log("InputText props: ", props);
  return <input type="text" className={styles.input} {...props} />;
};

export default InputText;
