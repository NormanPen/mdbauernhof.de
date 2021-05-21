import ButtonMain from "../ButtonMain";

const CardMain = (props) => {
  return (
    <article className="text-center bg-pink-400">
      <img src={props.imgsrc} alt={props.imgalt} />
      <h3 className="text-2xl font-medium font-Atma">{props.heading}</h3>
      <p className="font-Signika-Negative">{props.children}</p>
      <ButtonMain>{props.btnText}</ButtonMain>
    </article>
  );
};

export default CardMain;
