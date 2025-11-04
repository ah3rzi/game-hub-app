import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}
function Emoji({ rating }: Props) {
  if (rating < 3) return;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: bullsEye, alt: "recomended", boxSize: "25px" },
    5: { src: thumbsUp, alt: "expection", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} marginTop="5px" />;
}

export default Emoji;
