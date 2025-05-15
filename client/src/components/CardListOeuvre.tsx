import { useEffect, useState } from "react";
import CardOeuvre from "./CardOeuvre";
import "../styles/galerie.css";
import { useTranslation } from "../contexts/LocaleContext";

type workType = {
  id?: number;
  title?: string;
  artist_title: string;
  image_id?: string;
  date_start?: number;
  category_titles?: string;
  thumbnail?: { alt_text?: string };
};

function cardListOeuvre() {
  const [works, setWorks] = useState<workType[]>([]);
  const [filter, setFilter] = useState<workType[]>([]);
  const categories = works.map((w) => w.artist_title);

  const uniqueSet = new Set(categories);
  const extractedArts = [...uniqueSet];

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=2&limit=30")
      .then((response) => response.json())
      .then((data) => setWorks(data.data))
      .catch(() => {
        "Erreur lors du chargement";
      });
  }, []);

  const { translations } = useTranslation();

  return (
    <>
      {" "}
      <h2>{translations.galerie.exposition}</h2>
      <div className="filterContainer">
        <select
          onChange={(e) =>
            setFilter(
              e.target.value
                ? works.filter((w) => w.artist_title.includes(e.target.value))
                : works
            )
          }
        >
          <option value=""> -- Sélectionner votre artiste -- </option>
          {extractedArts.map((a) => (
            <option key={a} value={a}>
              {" "}
              {a}
            </option>
          ))}
        </select>
      </div>
      <div className="cards">
        {(filter.length > 0 ? filter : works).map((w) => (
          <CardOeuvre
            key={w.id}
            id={w.id}
            artist_title={w.artist_title}
            title={w.title}
            image_id={w.image_id}
            category_titles={w.category_titles}
            date_start={w.date_start}
            thumbnail={w.thumbnail}
          />
        ))}
      </div>
    </>
  );
}

export default cardListOeuvre;
