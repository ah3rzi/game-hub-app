import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 85 ? "green" : score > 70 ? "yellow" : "red";
  return (
    <Badge fontSize="14px" paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
