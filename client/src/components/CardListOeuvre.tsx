import { useEffect, useState } from "react";
import CardOeuvre from "./CardOeuvre";
import "../styles/galerie.css";

type workType = {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
};

function cardListOeuvre() {
  const [works, setWorks] = useState<workType[]>([]);
  const [filter, setFilter] = useState<workType[]>([]);
  const categories = works.map((w) => w.artist_title);

  const uniqueSet = new Set(categories);
  const extractedArts = [...uniqueSet];
  const [card, setCard] = useState;

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=3&limit=50")
      .then((response) => response.json())
      .then((data) => setWorks(data.data))
      .catch(() => "Error page");
  }, []);
  return (
    <>
      <div>
        <label>
          Découvrez un artiste :
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="">-- Choississez --</option>
            {extractedArts.map((artist_title) => (
              <option>{artist_title}</option>
            ))}
          </select>
        </label>
        {(filter.length > 0 ? filter : works).map((w) => (
          <CardOeuvre
            key={w.id}
            id={w.id}
            artist_title={w.artist_title}
            title={w.title}
            image_id={w.image_id}
          />
        ))}
      </div>{" "}
    </>
  );
}

export default cardListOeuvre;
