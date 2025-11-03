import { List, Skeleton, ListItem } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton}>
          <Skeleton height="40px" marginY="5px" borderRadius={4} />
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
