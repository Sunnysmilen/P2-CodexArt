import { useEffect, useState } from "react";
import "../styles/galerie.css";
import CardOeuvre from "./CardOeuvre";

type workType = {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
};

function cardListOeuvre() {
  const [works, setWorks] = useState<workType[]>([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=3&limit=50")
      .then((response) => response.json())
      .then((data) => setWorks(data.data))
      .catch(() => {"Erreur lors du chargement"});
  }, []);
  return (
    <>
      <div>
        {works.map((w) => (
          <CardOeuvre
            key={w.id}
            id={w.id}
            artist_title={w.artist_title}
            title={w.title}
            image_id={w.image_id}
          />
        ))}
      </div>
    </>
  );
}

export default cardListOeuvre;
