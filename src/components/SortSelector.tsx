import { MenuButton,Menu, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';

const SortSelector = () => {
    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
            order by:relavence
          </MenuButton>
          <MenuList>
            <MenuItem>Relavance</MenuItem>
            <MenuItem>Date dded</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release date</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average rating</MenuItem>
          </MenuList>
        </Menu>
      );
}

export default SortSelector