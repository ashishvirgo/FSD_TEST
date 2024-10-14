import Navbar from "../components/navbar";
import Navbar from "../components/searchbody";
import Navbar from "../components/footer";
import "/app.css";

const Homepage=()=>{
    return (
        <div>
            <Navbar/>
            <Searchbody/>
            <Footer/>
        </div>
    );
};

export default Homepage;