import { filterProps } from "framer-motion";
import { Fragment } from "react";
import Header from "../../components/common-page/header/header";
import Footer from "../../components/common-page/footer/footer";
function Layout(props){
    return <Fragment>
        <Header/>
        <main>{props.children}</main>
        <Footer/>
    </Fragment>;
}
export default Layout;