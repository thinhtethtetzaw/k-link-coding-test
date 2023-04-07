import LogoBlue from "@/assets/logo/LogoBlue";
import SearchTextField from "../../atoms/form/SearchTextField";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-8">
      <LogoBlue />
      <div className="w-1/2">
        <SearchTextField />
      </div>
    </div>
  );
};

export default Navbar;
