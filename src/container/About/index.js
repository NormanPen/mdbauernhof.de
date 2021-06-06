import ContactFooter from "../../components/ContactFooter";
import HeaderMain from "../../components/HeaderMain";
import CardText from "../../components/CardText";
import CardPic from "../../components/CardPic";

import bgMobileBlue from "../../media/images/bgMobileBlue.png";
import margotUndHansBig from "../../media/images/margotUndHansBig.png";
import großeltern from "../../media/images/großeltern.png";
import tracktor from "../../media/images/tracktor.png";

const About = () => {
  return (
    <div>
      <HeaderMain
        heading="Herzlich Willkommen auf unserem Hof"
        bgImgSrc={margotUndHansBig}
        imgSrc={bgMobileBlue}
        imgAlt="Bauernhof"
        btnText="Jetzt entdecken"
        btnPath="/tiere"
      >
        Margot Döpper wollte nicht nur Landwirtin sein. Heute organisiert sie,
        unterstützt von ihrem Mann Hans Döpper, Kindergeburtstage auf dem
        Bauernhof. In Kursen der Landwirtschaftskammer erwirbt sie regelmäßig
        das nötige Know-how.
      </HeaderMain>
      <CardPic imgsrc={großeltern} imgAlt="" />
      <CardText heading="Der Hof damals">
        Der Bauernhof existiert nun in der 4. Generatinon. Er wurde damals für
        den unglaublichen Preis von 9 Pferden gekauft.
      </CardText>
      <CardPic imgsrc={tracktor} imgAlt="Trecker" />
      <CardText heading="Der Hof heute">
        Heute kümmern sich hauptsächlich Hans, Margot und Mathias Döpper um den
        Hof und die Wiesen. Es gibt viel zu entdecken. Zum Beispiel eine
        Vielzahl an Tieren, ein Heustall, ein Obstgarten und Insektengarten.
      </CardText>

      <ContactFooter />
    </div>
  );
};

export default About;
