import Heart from "../../assets/heart.svg";

export default function Favorite({ onFavourite }) {
  return (
    <div
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      onClick={onFavourite}
    >
      <img src={Heart} alt="Heart" />
      <span className="text-white">Favourite Locations</span>
    </div>
  );
}
