import Image from "next/image";
import "src/app/globals.css"
import Nin from "./Nin";
import Print from "./Print";
export default function Home() {

  const payload ={
    nin: "4509 492 5215"  ,
    surname: "david",
    dob: "12 -4- 50",
    fullname: "iorsase sesu",
  }
  return <main>
    <Print/>
    <Nin data={payload}/>
  </main>;
}
