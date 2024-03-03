import { useContext } from "react";
import Pin from "../../assets/pin.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";

export default function CurrentLocation() {
  const { setSelectedLocation } = useContext(LocationContext);

  const currentLocation = getLocationByName();

  return (
    <div
      className="p-2 rounded-md cursor-pointer flex items-center hover:bg-black/30"
      onClick={() => setSelectedLocation({ ...currentLocation })}
    >
      <img src={Pin} className=" w-[14px] mr-2" alt="Location" />
      <span className="text-white">Current Location</span>
    </div>
  );
}
