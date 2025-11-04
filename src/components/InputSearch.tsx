import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const InputSearch = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input variant="filled" borderRadius={20} placeholder="Seach games..." />
    </InputGroup>
  );
};

export default InputSearch;
