const ButtonMain = (props)=>{
    return(
        <button to={props.to} className="px-6 py-3 mt-6 text-white rounded-full bg-web-blue-dark">{props.children}</button>
    );
};

export default ButtonMain;