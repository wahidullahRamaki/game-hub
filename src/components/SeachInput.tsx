import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useQueryGameStore from "../store";


const SeachInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText=useQueryGameStore(s=>s.setSearchText)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText (ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Game...."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SeachInput;
