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
        btnText="Jetzt entdecekennnnnn"
        btnPath="/tiere"
      >
        Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem.
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
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores
      </CardMain>
      <CardMain
        heading="Spielend lernen"
        btnText="Zum Programm"
        imgalt="Kinder auf Hof"
        imgsrc={kinder1}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores
      </CardMain>

      <CardPic imgsrc={donkey1} imgalt="Esel" />
      <CardIcon
        imgsrc={fruits1}
        imgalt="Früchte"
        heading="Unsere Tiere"
        btnText="Tiere kennenlernen"
      >
        In this reinvented flick, which hovers like a Matisse cutout between the
        lashline and brow bone, curved crease of the eyelid, while the top is a
        long, flat line that extends past the outer corners.
      </CardIcon>

      <ContactFooter></ContactFooter>
    </div>
  );
};

export default Home;
