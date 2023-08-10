import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useQueryGameStore from "../store";
import { useNavigate } from "react-router-dom";


const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText=useQueryGameStore(s=>s.setSearchText);
  const navigate = useNavigate()
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText (ref.current.value);
          navigate('/')
        }
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

export default SearchInput;
