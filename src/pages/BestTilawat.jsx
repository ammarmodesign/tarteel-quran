import { isMobile } from "react-device-detect";

const BestTilawat = () => {
  return <>{isMobile ? "Mobile" : "Desktop"}</>;
};

export default BestTilawat;
