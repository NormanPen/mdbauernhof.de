import ContactFooter from "../../components/ContactFooter";
import HeaderMain from "../../components/HeaderMain";
import FlagImg from "../../components/FlagImg";
import TeaserMain from "../../components/TeaserMain";
import CardMain from "../../components/CardMain";
import CardPic from "../../components/CardPic";
import CardIcon from "../../components/CardIcon";

import bgMobileBlue from "../../media/images/bgMobileBlue.png";
import bgMobileRosa from "../../media/images/bgMobileRosa.png";
import bauernhof from "../../media/images/bauernhof.png";
import margotundhans from "../../media/images/MargotUndHans.png";
import kinder1 from "../../media/images/Kids1.png";
import donkey1 from "../../media/images/donkey1.png";
import fruits1 from "../../media/images/fruits1.png";

const Home = () => {
  return (
    <div>
      <HeaderMain
        heading="Herzlich Willkommen auf unserem Hof"
        bgImgSrc={bgMobileBlue}
        imgSrc={bauernhof}
        imgAlt="Bauernhof"
        btnText="Jetzt entdecken"
        btnPath="test"
      >
        Entdecken Sie den Erlebniswelt Bauernhof der Familie Döpper.
      </HeaderMain>

      <FlagImg />

      <TeaserMain heading="Willkommen">
        Erlebniswelt Bauernhof ist gegründet worden um: den Kindern direkt vor
        Ort die Natur nahezubringen, um Ihnen ein Gefühl für die Schönheit der
        "Schöpfung" zu vermitteln und die Welt auch noch für nachkommende
        Generationen in diesem Umfang zu erhalten.
      </TeaserMain>

      <CardMain
        heading="Margot & Hans Döpper"
        btnText="Über uns"
        imgalt="Margot und Hans"
        imgsrc={margotundhans}
        bgImgSrc={bgMobileRosa}
        bgImgAlt="Hintergrundbild"
      >
        Hans Döpper war bis 20xx Vollerwerbslandwirt mit 100 Tieren. Der
        ehemalige Vollerwerbs-Milchviehbetrieb wird nun als Bio-Mischbetrieb
        geführt. Margot Döpper gründete Erlebniswelt Bauernhof um den Kindern
        die Tier - und Pflanzenwelt nahezubringen.
      </CardMain>
      <CardMain
        heading="Spielend lernen"
        btnText="Zum Programm"
        imgalt="Kinder auf Hof"
        imgsrc={kinder1}
      >
        Kindergeburtstage sind das Herzstück der Erlebniswelt Bauernhof. Durch
        das spielerische Lernen und Erfahren, haben die Kinder einen
        unvergessliches Tag mit Erlebnissen die lange im Gedächtnis bleiben.
      </CardMain>

      <CardPic imgsrc={donkey1} imgalt="Esel" />
      <CardIcon
        imgsrc={fruits1}
        imgalt="Früchte"
        heading="Unsere Tiere"
        btnText="Tiere kennenlernen"
      >
        Durch die Vielzahl an Tieren ist für jeden eine Tierart dabei, die näher
        entdeckt werden will. Unsere Tiere freuen sich immer über nette Besucher
        und lieben Streicheleinheiten.
      </CardIcon>

      <ContactFooter/>
    </div>
  );
};

export default Home;
