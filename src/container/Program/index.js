import PriceList from "../../components/PriceList";
import HeaderMain from "../../components/HeaderMain";
import TeaserMain from "../../components/TeaserMain";
import CardMain from "../../components/CardMain";
import CardPic from "../../components/CardPic";
import CardIcon from "../../components/CardIcon";

import bgMobileRosa from "../../media/images/bgMobileRosa.png";
import bgMobileBlue from "../../media/images/bgMobileBlue.png";

import hats from "../../media/images/hats.svg";
import programTeaser from "../../media/images/ProgrammTeaser.png";
import apples from "../../media/images/apples.png";
import heustall from "../../media/images/heustall.png";
import eselreiten from "../../media/images/eselreiten.png";
import stiefel from "../../media/images/stiefel.png";
import geburtstagstisch from "../../media/images/geburtstagstisch.png";
import floß from "../../media/images/floß.png";

const Program = () => {
  return (
    <div className="pt-20">
      <HeaderMain
        heading="Unser Programm"
        bgImgSrc={bgMobileBlue}
        imgSrc={programTeaser}
        imgAlt="Bauernhof"
        btnText="Jetzt entdecken"
        btnPath="/tiere"
      >
        Unser Bauernhof bietet ein vielfältiges Programm. Von
        Kindergeburtstagen, über tiergestützte Pädagogik und -Therapie, bis zu
        Genreation 50+{" "}
      </HeaderMain>
      <TeaserMain
        heading="Kindergeburtstage"
        imgsrc={hats}
        imgalt="Geburtstagshüte"
      >
        Kindergeburtstage sind das Herzstück der Erlebniswelt Bauernhof.
        Heustalltoben, Eselreiten, Bauerngarten ernten, Lagerfeuer mit
        Stockbrot, Kreativwerkstatt etc. machen den Geburtstag zu einem
        unvergesslichen Erlebnis.Ein Kindergeburtstag dauert in der Regel 3-4
        Stunden und sind geeignet für Kinder von 4-10 Jahren. Verpflegung wie
        Pizza wird gerne gestellt oder kann mitgebracht werden. Der genaue Preis
        richtet sich je nach Auswahl. Die Preisliste finden Sie unten auf der
        Seite.
      </TeaserMain>
      <CardMain
        heading="Haustalltoben"
        btnText="Über uns"
        imgalt="Margot und Hans"
        imgsrc={heustall}
        bgImgSrc={bgMobileRosa}
        bgImgAlt="Hintergrundbild"
      >
        Im Heustall können sich die Kinder richtig austoben und ihre Energie
        loswerden. Fangen, im Heu verstecken, Heuburgen bauen oder auf der
        Schaukel die Seele baumeln lassen macht riesigen Spaß.
      </CardMain>
      <CardMain
        heading="Baumgarten-Ernten"
        btnText="Zum Programm"
        imgalt="Kinder auf Hof"
        imgsrc={apples}
      >
        Die Bio-Äpfel aus unserem Bauerngarten können geplügt werden und daraus
        können leckere Kuchen oder Bratäpfel gemacht wernden. Außerdem haben wir
        Bäume oder Sträucher mit Pflaumen, Birnen, MIrabellen, Quitten,
        Esskastanien, Johannisbeeren, Stachelbeeren, Himbeeren, Sauer und
        Süßkirchen. Lecker!
      </CardMain>

      <CardPic imgsrc={eselreiten} imgalt="Esel Reiten" />
      <CardIcon
        imgsrc={stiefel}
        imgalt="Grummistiefel"
        heading="Geführtes Eselreiten"
        btnText="Tiere kennenlernen"
      >
        Die Kinder können mit einem Voltigiergurt und Helm auf dem Esel reiten,
        dabei werden sie von einem Erwachsenen geführt. Dann kann eine Runde
        über Hof gedreht werden oder über Feldwege zum Wald.
      </CardIcon>
      <CardMain
        heading="Gemeinsam Essen + Feiern"
        btnText="Über uns"
        imgalt="Margot und Hans"
        imgsrc={geburtstagstisch}
        bgImgSrc={bgMobileRosa}
        bgImgAlt="Hintergrundbild"
      >
        Unser Veranstaltungsraum bietet ausreichend Platz um gemeinsam Kuchen
        oder Pizza zu essen und die Geschenke auszupacken und ein
        Geburtstagsständchen zu singen.
      </CardMain>
      <CardMain
        heading="Kreativworkshops"
        btnText="Zum Programm"
        imgalt="Kinder auf Hof"
        imgsrc={floß}
      >
        Kreativprogramm kann gerne auch außerhalb eines Geburtstags gebucht
        werden. In einer Gruppe können Holzflöße gebastelt, oder z.B.
        Fosterhocker oder Teelicht-Häuschen getöpfert werden.
      </CardMain>
      <PriceList />
    </div>
  );
};

export default Program;
