import Header from "./header";
import {Outlet} from "react-router";
export default function Layout(){
    return (
        <div>
            <Header />
            <Outlet/>
        </div>
    )
}