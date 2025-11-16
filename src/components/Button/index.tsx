import styles from "./Button.module.css";
import classNames from "classnames";

type ButtonProps = {
  variant: "default" | "icon";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant = "default", ...rest }: ButtonProps) => {
  const classMap = {
    default: styles.botao,
    icon: styles.icon,
  };
  return (
    <div>
      <button className={classNames(styles.botao, classMap[variant])} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default Button;
