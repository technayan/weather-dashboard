import { useState } from "react";
import CurrentLocation from "./CurrentLocation";
import Favorite from "./Favorite";
import FavoriteList from "./FavoriteList";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  const [showFavourite, setShowFavourite] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <Search />

          <CurrentLocation />

          <Favorite onFavourite={() => setShowFavourite(!showFavourite)} />

          {showFavourite && <FavoriteList />}
        </div>
      </nav>
    </header>
  );
}
