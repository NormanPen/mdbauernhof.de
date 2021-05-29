import ButtonMain from "../ButtonMain";

const CardIcon = (props) => {
  return (
    <section className="pt-5 text-center">
      <div className="flex justify-center">
        <img src={props.imgsrc} alt={props.imgalt} />
      </div>

      <h3 className="pt-5 text-2xl font-medium font-Atma">{props.heading}</h3>
      <p className="px-6 text-base pt-9 font-Signika-Negative">
        {props.children}
      </p>
      <ButtonMain>{props.btnText}</ButtonMain>
    </section>
  );
};

export default CardIcon;
