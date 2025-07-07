import Image from "next/image"
import logo from "../asset/favicon.png"
export default function Header() {
  return (
    <div className="w-full flex justify-between pl-2 pr-2">
      <Image src={logo}alt="" className="w-[200px]"/>
      <div>
        <p className="text-white">SignIn</p>
      </div>
    </div>
  )
}
