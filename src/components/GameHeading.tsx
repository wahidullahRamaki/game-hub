import { Heading } from "@chakra-ui/react";
import { GameQuary } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuary: GameQuary;
}

const GameHeading = ({ gameQuary }: Props) => {
  //game
  // action games
  //xbox game
  // xbox action games
  
  const genre= useGenre(gameQuary.genreId);
  const platform =usePlatform(gameQuary.platformId);

  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
