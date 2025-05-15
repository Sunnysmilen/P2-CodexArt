import Devanture from "../assets/images/Devanture.png";
import "../styles/home.css";
import { useEffect, useState } from "react";
import { useTranslation } from "../contexts/LocaleContext";

type imageType = {
  image_id: string;
  title: string;
};

const Home = () => {
  const [unavoidable, setUnavoidable] = useState<imageType[]>([]);
  const [draw, setDraw] = useState(0);
  const imageUrl =
    unavoidable.length > 0
      ? `https://www.artic.edu/iiif/2/${unavoidable[draw].image_id}/full/300,/0/default.jpg`
      : "";

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=4&limit=5")
      .then((response) => response.json())
      .then((data) => setUnavoidable(data.data))
      .catch(() => {
        "Erreur lors du chargement";
      });
  }, []);

  useEffect(() => {
    if (unavoidable.length > 0) {
      const painting = (draw + 1) % unavoidable.length;
      const defilement = setInterval(() => setDraw(painting), 4000);
      return () => clearInterval(defilement);
    }
  }, [draw, unavoidable]);

  const { translations } = useTranslation();

  return (
    <>
      <div className="home-description">
        <img src={Devanture} alt="Devanture Codex Art" />
        <p>{translations.homepage.paragraph}</p>
      </div>

      <div className="home-images">
        <h1>{translations.homepage.incontournable}</h1>
        <div className="carrousel_container">
          {unavoidable.length > 0 && (
            <img
              className="caroussel"
              src={imageUrl}
              alt={unavoidable[draw].title}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
