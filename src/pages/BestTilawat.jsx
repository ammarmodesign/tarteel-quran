import useDeviceType from "../hooks/useDeviceType";

const BestTilawat = () => {
  let platform = useDeviceType();
  return <>{platform.mobile ? "Mobile" : "Desktop"}</>;
};

export default BestTilawat;
