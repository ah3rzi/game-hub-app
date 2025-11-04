import platforms from "../data/platforms";

interface Platforms {
    id: number,
    name : string,
    slug : string
}

const usePlatforms = () => ({data : platforms})

export default usePlatforms;