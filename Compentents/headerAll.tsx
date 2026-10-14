"use client";

import HeaderMain from "./header";
import Headertour from "./tour/header";
import {usePathname} from "next/navigation";


export default function HeaderAll() {

    const  path = usePathname() || "";
   
    
return (

    <>
    { (path === "/") ? ( <HeaderMain pathname={path}/> ) : <Headertour pathname={path}/> }
    </>
)




}