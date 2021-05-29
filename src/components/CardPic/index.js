const CardPic = (props) => {
  return (
    <div className="flex justify-center pt-24 ">
      <img src={props.imgsrc} alt={props.imgalt} className="w-11/12 h-11/12" />
    </div>
  );
};
export default CardPic;
