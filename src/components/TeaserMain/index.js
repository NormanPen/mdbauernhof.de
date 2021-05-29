const TeaserMain = (props) => {
  return (
    <article className="text-center px-9 pt-7 ">
      <h2 className="text-xl font-medium font-Atma">{props.heading}</h2>
      <p className="pt-6 text-base font-Signika-Negative">{props.children}</p>
    </article>
  );
};

export default TeaserMain;
