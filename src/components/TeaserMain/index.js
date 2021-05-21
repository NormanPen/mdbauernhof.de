
const TeaserMain = (props)=>{
    return(
        <article className="text-center"> 
            <h2 className="text-xl font-medium font-Atma">{props.heading}</h2>
            <p className="text-base font-Signika-Negative">{props.children}</p>
        </article>
    );
};

export default TeaserMain;
