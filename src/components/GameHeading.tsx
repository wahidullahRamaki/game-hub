import { Heading } from "@chakra-ui/react";
import { GameQuary } from "../App";

interface Props {
  gameQuary: GameQuary;
}

const GameHeading = ({ gameQuary }: Props) => {
  //game
  // action games
  //xbox game
  // xbox action games
  const heading = `${gameQuary.platform?.name || ""} ${
    gameQuary.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
