import HeaderMain from "../../components/HeaderMain";
import CardMain from "../../components/CardMain";
import CardPic from "../../components/CardPic";
import CardIcon from "../../components/CardIcon";

import bgMobileRosa from "../../media/images/bgMobileRosa.png";
import bgMobileBlue from "../../media/images/bgMobileBlue.png";

import headerAnimals from "../../media/images/headerAnimals.png";
import huhn from "../../media/images/huhn.png";
import multiesel from "../../media/images/multiesel.png";
import kuh from "../../media/images/kuh.png";
import schafe from "../../media/images/schafe.png";
import gänse from "../../media/images/gänse.png";
import möhren from "../../media/images/möhren.png";

const Animals = () => {
  return (
    <div>
      <HeaderMain
        heading="Unsere Tiere"
        bgImgSrc={bgMobileBlue}
        imgSrc={headerAnimals}
        imgAlt="Bauernhof"
        btnText="Jetzt entdecken"
        btnPath="/tiere"
      >
        Unsere Tiere lieben Kinder. Mit ihren freundlichen Gemüt lassen sie sich
        gerne streicheln. Unsere Tiere haben genug Zeit zur Entspannung und
        freuen sich immer über nette Besucher.
      </HeaderMain>
      <CardMain
        heading="Hühner"
        btnText="Über uns"
        imgalt="Hühner"
        imgsrc={huhn}
        bgImgSrc={bgMobileRosa}
        bgImgAlt="Hintergrundbild"
      >
        Gemischte Hühnerrassen, die braune, weiße und grüne Eier legen, laufen
        bei uns frei auf dem Hof herum. Die Seidenhühner, die ganz besonders
        schön anzusehen sind, geben kleine Eier. Eier können bei uns auf dem Hof
        gekauft werden.
      </CardMain>
      <CardMain
        heading="Kühe"
        btnText="Zum Programm"
        imgalt="Kühe"
        imgsrc={kuh}
      >
        Unsere Bio-Kälber wachsen noch ganz ursprünglich bei ihren Müttern auf.
        Den ganzen Sommer über sind sie auf der Wiese und lassen sich gerne mit
        Brot und Möhren füttern. Unsere Rassen sind Fleckvieh, Charolai und die
        bayerische Milchkuh.
      </CardMain>

      <CardPic imgsrc={multiesel} imgalt="Esel" />
      <CardIcon
        imgsrc={möhren}
        imgalt="Möhren"
        heading="Esel"
        btnText="Tiere kennenlernen"
      >
        Pedro, Shelty, Mona, Teresa und Samson sind unsere liebenswürdigen Esel.
        Sie mögen lange Streicheleinheiten, Putzen oder Strigeln, ihre Mähne zu
        Zöpfen flechten oder mit Federn verzieren lassen. Außerdem mögen sie
        Spaziergänge oder geführtes Reiten.
      </CardIcon>

      <CardMain
        heading="Schafe"
        btnText="Über uns"
        imgalt="Schafe"
        imgsrc={schafe}
        bgImgSrc={bgMobileRosa}
        bgImgAlt="Hintergrundbild"
      >
        Eine kleine Schafherde von ca. 5 Schafen wohnt ebenfakks auf unserem
        Hof. Heidschnucken, Koburger Rotfuchs ist ihre Rasse.
      </CardMain>
      <CardMain
        heading="Gänse"
        btnText="Zum Programm"
        imgalt="Gänse"
        imgsrc={gänse}
      >
        Unsere “Wachhunde” die Gänse können Manchem mit ihrem Geschnatter Angst
        einjagen. Aber lassen sie sich nicht täuschen, ihr Charakter ist
        freundlich. Und im Frühjahr legen sie leckere Eier und sie freuen sich
        immer über eine Möhre.
      </CardMain>
    </div>
  );
};

export default Animals;
