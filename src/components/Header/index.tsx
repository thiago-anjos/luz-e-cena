import HeaderList from "./components/HeaderList";
import HeaderListItem from "./components/HeaderListItem";
import HeaderLinks from "../HeaderLinks";
import HeaderFormFilters from "./HeaderFormFilters";
import HeaderActions from "./components/HeaderActions";
import Logo from "../Logo";

const Header = () => {
  return (
    <header>
      <HeaderList>
        <HeaderListItem>
          <Logo src="/Logo.png" />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderLinks />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderFormFilters />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderActions />
        </HeaderListItem>
      </HeaderList>
    </header>
  );
};

export default Header;
