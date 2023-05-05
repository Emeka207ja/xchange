import React from 'react'
import { VStack } from '@chakra-ui/react'
import Footer from '../Footer'
import Nav from '../Navbar'
import { ReactNode } from "react";


interface Props{
    children?:ReactNode
}
export const Layout = ({children}:Props) => {
  return (
		<>
			<Nav />
			{children}
			<Footer />
		</>
	);
}


