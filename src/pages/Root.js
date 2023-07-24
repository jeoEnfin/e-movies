import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import Auth from "../components/Auth/Auth";

function RootLayout() {
    const auth = useSelector(state => state.auth.isAuthenticated);
    return (
           <>
           <NavBar />
           {auth ? <Outlet /> : <Auth />}
           </>
        );

}
export default RootLayout;