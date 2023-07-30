import { Heading } from "@chakra-ui/react";
import { GameQuary } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuary: GameQuary;
}

const GameHeading = ({ gameQuary }: Props) => {
  //game
  // action games
  //xbox game
  // xbox action games
  const {data: genres}= useGenres();
  const genre = genres?.results.find(g=>g.id===gameQuary.genreId);

  const {data: platforms}= usePlatforms();
  const platform= platforms?.results.find(p=>p.id===gameQuary.platformId)
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
