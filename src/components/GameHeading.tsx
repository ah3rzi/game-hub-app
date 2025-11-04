import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const headText = `
   ${gameQuery.platform?.name || ""} 
   ${gameQuery.genre?.name || ""} 
   Game`;
  return (
    <Heading paddingY={5} fontSize="5xl" as="h1">
      {headText}
    </Heading>
  );
};

export default GameHeading;
