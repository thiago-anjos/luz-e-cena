import styles from "./Button.module.css";

type ButtonProps = {
  variant: "default" | "icon";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children }: ButtonProps) => {
  return (
    <div>
      <button className={`${styles.botao}`}>{children}</button>
    </div>
  );
};

export default Button;
