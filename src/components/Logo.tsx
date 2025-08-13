import Image from "next/image";
import logo from "@/images/logos/logo.png";

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image
    src={logo}
    alt=""
    width={Number(props.width) || 20}
    height={Number(props.height) || 20}
    className="h-12 w-12"
  />
  
  )
}
