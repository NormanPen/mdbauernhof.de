import bauernhof from "../../media/images/bauernhof.png";
import ButtonMain from "../../components/ButtonMain";
const HeaderMain = (props) => {
  return (
    <div className="text-center ">
      <img className="asdasdasAASDASDWIDHT" src={bauernhof} alt="bauernhof" />
      <h1 className="text-2xl font-medium font-Atma">{props.heading}</h1>
      <p className="text-base ">{props.children}</p>
      <ButtonMain to={"#"}>Jetzt entdencken</ButtonMain>
    </div>
  );
};

export default HeaderMain;
