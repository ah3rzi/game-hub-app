import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";

const GameGrid = () => {
  const { error, games } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((g) => (
          <li key={g.id}>
            <Text>{g.name}</Text>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
