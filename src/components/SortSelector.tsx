import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import useQueryGameStore from "../store";


const SortSelector = () => {
  const sortOrders = [
    { value: "", lebal: "Relevance" },
    { value: "-added", lebal: "Date added" },
    { value: "name", lebal: "Name" },
    { value: "-released", lebal: "Release date" },
    { value: "-metacritic", lebal: "Popularity" },
    { value: "-rating", lebal: "Average rating" },
  ];
  const setSortOrder = useQueryGameStore(s=>s.setSortOrder);
const sortOrder=useQueryGameStore(s=>s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by:{currentSortOrder?.lebal || "Relavence"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.lebal}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
