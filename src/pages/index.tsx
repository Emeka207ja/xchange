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

interface Props {
	children: ReactNode;
}

export default function Home({children}:Props) {
  return <>
   
    <Layout>
      <Box>Xchange in progress</Box>
    </Layout>
  </>
}
