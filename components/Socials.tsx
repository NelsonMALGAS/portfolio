import Link from "next/link"
import socials from "@/data/socials";


interface SocialsProps {
    containerStyles: string;
    iconStyles: string;
  }
const Socials = ({containerStyles , iconStyles}: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ icon: Icon, path }, index) => (
        <Link href={path} key={index} className={iconStyles}>
            <Icon />
        </Link>
      ))}
    </div>
  )
}

export default Socials