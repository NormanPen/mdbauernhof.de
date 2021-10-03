import ButtonMain from "../ButtonMain";

const CardMain = (props) => {
  return (
    <article className="relative pt-24 text-center" id="test">
      <img
        className="absolute left-0 w-full top-48 lg:hidden -z-10"
        src={props.bgImgSrc}
        alt={props.bgImgAlt}
      />

      <div className="flex justify-center">
        <img
          src={props.imgsrc}
          alt={props.imgalt}
          className="w-11/12 h-11/12"
        />
      </div>
      <h3 className="pt-10 text-2xl font-medium font-Atma">{props.heading}</h3>
      <p className="px-6 pt-5 font-Signika-Negative">{props.children}</p>
      <ButtonMain color={props.color}>{props.btnText}</ButtonMain>
    </article>
  );
};

export default CardMain;
