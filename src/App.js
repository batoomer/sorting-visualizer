import HomePage from "./views/pages/home/HomePage";
import Footer from "./views/shared_components/footer/Footer";
import Header from "./views/shared_components/header/Header";
import Navbar from "./views/shared_components/navbar/Navbar";
class App{
    constructor(){
        this.header = new Header();
        this.navbar = new Navbar('');
        this.main = new HomePage();
        this.footer = new Footer();
        
        document.body.append(
            this.header.create(),
            this.navbar.create(),
            this.main.create(),
            this.footer.create()
        );

    };

    run(){

    }
};



export default App;