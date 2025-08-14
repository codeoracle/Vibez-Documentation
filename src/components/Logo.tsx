import Image from "next/image";
import logo from "@/images/logos/logo.png";

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image
    src={logo}
    alt=""
    width={Number(props.width) || 12}
    height={Number(props.height) || 12}
    className="h-8 w-8"
  />
  
  )
}
