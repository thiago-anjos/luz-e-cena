import Link from "../../Link";

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  href?: string;
}

const MenuItem = ({ children, href = "#" }: MenuItemProps) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default MenuItem;
