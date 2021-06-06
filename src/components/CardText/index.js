const CardText = (props)=> {
    return(
        <div>
            <h3>{props.heading}</h3>
            <p>{props.children}</p>
        </div>
    );
}

export default CardText;