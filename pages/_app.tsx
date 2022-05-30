import '../styles/globals.css'

import { ReactElement, ReactNode } from 'react'
import type {NextPage} from "next"
import { AppProps } from 'next/app'

type NextPageWithLayout = NextPage & {
  //getLayaput es la funcion que nombramos en cada layaput y es condicional 
  // reactelement o jsx.element es lo mismo solo que no se importa react
getLayout ? : (page: ReactElement )=> ReactNode
//getLayout ? : (page:JSX.Element)=>JSX.Element

}

type AppPropsWithLayout = AppProps&{
  Component :NextPageWithLayout
}

export default function MyApp({ Component, pageProps }:AppPropsWithLayout) {

  const getLayout = Component.getLayout || (page=>page)

  return (
  
   getLayout( <Component {...pageProps} />)
 
  )
}



