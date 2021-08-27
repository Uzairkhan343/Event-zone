
import "../../src/assets/style/style.css"
import Header from "../components/header/header";
import Footer from "../components/section-3/footer";
const Layout = (props)=>{
    return(
        <div>
<Header/>
{props.childern}
<Footer/>
        </div>
    );
}
export default Layout;