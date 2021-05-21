import ButtonMain from "../ButtonMain";

const CardIcon = (props) => {
  return (
    <section className="text-center">
      <img src={props.imgsrc} alt={props.imgalt} />
      <h3 className="text-2xl font-medium font-Atma">{props.heading}</h3>
      <p className="text-base font-Signika-Negative">{props.children}</p>
      <ButtonMain>{props.btnText}</ButtonMain>
    </section>
  );
};

export default CardIcon;
