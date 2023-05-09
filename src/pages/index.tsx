import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {Text,Box} from "@chakra-ui/react"
const inter = Inter({ subsets: ['latin'] })
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { ReactNode } from 'react'
import { Layout } from '../../Components/Layout'
import LandingPage from '../../Components/Home'
import Marque from '../../Components/Home/Marque'
import Tawk from '../../Components/Tawk'

interface Props {
	children: ReactNode;
}

export default function Home({children}:Props) {
  return <>
   
    <Layout>
      <Box >
        <Marque/>
        <LandingPage />
        <Tawk/>
      </Box>
    </Layout>
  </>
}
