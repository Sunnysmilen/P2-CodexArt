import Devanture from "../assets/images/Devanture.png";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="home-description">
        <img src={Devanture} alt="Devanture Codex Art" />
        <p>
          Fondée en 2019, la galerie Codex Art est née d’un désir profond de
          contribuer activement au développement de la culture artistique, en
          créant un pont entre passé et présent. Située au cœur de la ville,
          elle se veut un lieu d’échange, de découverte et de transmission,
          dédié à tous les passionnés d’art, qu’ils soient amateurs curieux ou
          collectionneurs avertis. La mission de Codex Art est double : faire
          connaître l’art contemporain en mettant en lumière des artistes
          émergents ou confirmés, et valoriser le patrimoine artistique en
          exposant également des œuvres anciennes, parfois méconnues du grand
          public. À travers cette approche, la galerie permet à chacun de mieux
          comprendre l’évolution des styles, des techniques et des sensibilités
          artistiques à travers les époques. Chaque exposition est pensée comme
          une invitation à explorer l’histoire de l’art sous toutes ses formes,
          en tissant des liens entre les œuvres d’hier et celles d’aujourd’hui.
          Plus qu’un simple espace d’exposition, Codex Art est un lieu vivant,
          un carrefour culturel où se rencontrent les talents, les idées et les
          regards, au service de la beauté et de la réflexion.
        </p>
      </div>

      <div className="home-images">
        <h1>Nos incontournables</h1>
      </div>
    </>
  );
};

export default Home;
