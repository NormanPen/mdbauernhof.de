import bauernhof from "../../media/images/bauernhof.png";
import ButtonMain from "../../components/ButtonMain";
const HeaderMain = (props) => {
  return (
    <div>
      <img src={bauernhof} alt="bauernhof" />
      <h1>{props.heading}</h1>
      <p>{props.children}</p>
<ButtonMain to={"#"}>Jetzt entdencken</ButtonMain>
    </div>
  );
};

export default HeaderMain;
