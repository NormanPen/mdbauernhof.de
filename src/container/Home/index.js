import bauernhof from "../../media/images/bauernhof.png";
import ContactFooter from "../../components/ContactFooter";


const Home = () => {
    return(
        <div>
            <img src={bauernhof} alt="bauernhof"/>
            <h1>Herzlich Willkommen auf unserem Hof</h1>
            <p>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem.</p>
            <button>Jetzt entdecken</button>
        <ContactFooter></ContactFooter>
        </div>
    );
}

export default Home;