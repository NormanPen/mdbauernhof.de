import ButtonMain from "../ButtonMain";

const CardIcon = (props) => {
  return (
    <section>
      <img src={props.imgsrc} alt={props.imgalt} />
      <h3>{props.heading}</h3>
      <p>{props.children}</p>
      <ButtonMain>{props.btnText}</ButtonMain>
    </section>
  );
};

export default CardIcon;
