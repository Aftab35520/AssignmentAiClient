import Image from "next/image"
import logo from "../asset/logo.png"
export default function Header() {
  return (
    <div className="w-full flex justify-between ">
      <Image src={logo}alt="" className="w-[200px]"/>
      <div>
        <p>SignIn</p>
      </div>
    </div>
  )
}
