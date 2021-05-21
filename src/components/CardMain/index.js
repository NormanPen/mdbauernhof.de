import ButtonMain from "../ButtonMain";

const CardMain = (props) => {
  return (
    <article>
      <img src={props.imgsrc} alt={props.imgalt} />
      <h3>{props.heading}</h3>
      <p>{props.children}</p>
      <ButtonMain>{props.btnText}</ButtonMain>
    </article>
  );
};

export default CardMain;
