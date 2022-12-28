import React from "react";
import Login from "./login";
import Routing from "./routes";


export default function App() {

  return (
    <>  
 {
 sessionStorage.getItem("isLoggedIn")  === "true" ?   <Routing/>:    <Login/>
}
   </>
  );

}
