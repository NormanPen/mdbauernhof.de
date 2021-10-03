const ButtonMain = (props) => {
  return (
    <button
      to={props.to}
      className={`px-6 py-3 mt-6 text-black rounded-full  ${props.color}`}

      
    >
      {props.children}
    </button>
  );
};

export default ButtonMain;

/*
//className={`burger-item ${click ? "active" : ""}`}
//className={`px-6 py-3 mt-6 text-white rounded-full bg-web-blue-dark ${props.color}'}
//className="px-6 py-3 mt-6 text-white rounded-full bg-web-blue-dark "
*/