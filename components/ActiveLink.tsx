import {CSSProperties, FC} from "react"
import { useRouter } from "next/router"
import Link from "next/link"

  const style:CSSProperties = {
        color : "tomato" ,
        textDecoration :" underline" ,
      
    }
    interface Props{
      text : string ,
      href : string
    }

export const ActiveLink:FC<Props> =({text,href})=> {

  const {pathname} = useRouter()
   
  return (
      <Link  href={href} >
        <a style={pathname === href? style :undefined }>Custom {text}</a>
      </Link>
  )
}
