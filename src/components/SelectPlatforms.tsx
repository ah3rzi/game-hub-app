import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGame";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  platform: string;
}
const SelectPlatforms = ({ onSelectedPlatform, platform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform ? platform : "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((p) => (
          <MenuItem onClick={() => onSelectedPlatform(p)} key={p.id}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SelectPlatforms;
