import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner
} from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/image-url";
import useGenres from "../hooks/useGenres";
import useQueryGameStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId=useQueryGameStore(s=>s.gameQuery.genreId);
 const setSelectedGenreId= useQueryGameStore(s=>s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                // this code work with mosh but didn't work with me
                // whiteSpace="normal"
                // textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
