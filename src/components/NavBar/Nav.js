import { useEffect, useState } from "react";
import MobNav from "./Mob/MobNav";
import DesNav from "./Des/DesNav";

function Nav() {
const [mob, setMOb] = useState(false); 

useEffect(()=> {
  const mql= window.matchMedia('(max-width:600px)');
  mql.addEventListener('change', (e) => {
    const result = e.matches;
    setMOb(result);
  })
},[]);



  return (
    <>
     {mob?<MobNav />:<DesNav/>}
    </>
  );
}

export default Nav;
