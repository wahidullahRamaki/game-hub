import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useQueryGameStore from "../store";



const GameHeading = () => {
  //game
  // action games
  //xbox game
  // xbox action games
 const genreId= useQueryGameStore(s=>s.gameQuery.genreId);
 const genre= useGenre(genreId);

 const platformId= useQueryGameStore(s=>s.gameQuery.platformId)
 const platform =usePlatform(platformId);
  
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
