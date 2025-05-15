import { useEffect, useState } from "react";
import { Link } from "react-router";
import cadre from "../assets/images/cadre musee.jpg";
import "../styles/musees.css";
import { useTranslation } from "../contexts/LocaleContext";

type museumType = {
  id: string;
  nom_officiel_du_musee: string;
  departement: string;
  commune: string;
  url: string;
  latitude: number;
  longitude: number;
};

function CardListMuseum() {
  const [list, setList] = useState<museumType[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/liste-et-localisation-des-musees-de-france/records?limit=100",
    )
      .then((response) => response.json())
      .then((data) => setList(data.results))
      .catch(() => {
        "Erreur lors du chargement";
      });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const { translations } = useTranslation();

  return (
    <div className="museum">
      <h1>{translations.musées.titre}</h1>
      <img src={cadre} alt="vue d'un musée au travers d'un cadre" />
      <p> {translations.musées.texte}</p>
      <input
        type="text"
        placeholder={translations.musées.recherche}
        value={search}
        onChange={handleSearch}
      />
      <div className="filter">
        {(search ? list : [])
          .filter((val) => {
            return val.departement.toLowerCase().includes(search.toLowerCase());
          })
          .map((val) => (
            <p key={val.id}>
              <strong>{val.departement}</strong> <br />{" "}
              {val.nom_officiel_du_musee} <br />- {val.commune} - <br />
              <Link to={`https://${val.url}`} target="_blank">
                🖼️ Lien vers le musée
              </Link>
              <Link
                to={`https://google.fr/maps?q=${val.latitude},${val.longitude}`}
                target="_blank"
              >
                📍Comment s'y rendre
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
}

export default CardListMuseum;
