import React from 'react'
import { Box, Text, Heading } from "@chakra-ui/react";
import GuildelineList from './GuildelineList';
import GiftCardGuildeline from './GiftCardGuildeline';
import useNavigator from '../Hooks/useNavigator';
import { pointerData } from "./pointerData"
import {Find} from "../Utils/funcs"


const FundingGuildeline = () => {
  
    interface guide{
        id: number,
        process:string
    }
    
    const [query] = useNavigator()
      const found = Find(pointerData,query);
  return (
		<Box pos={"relative"} left={{ base: "3%", md: "0" }}>
			<Heading
				fontSize={"1rem"}
				textAlign={{ md: "center" }}
				pos={"relative"}
				left={{ base: "13%", md: "0" }}
				margin={"1.2rem 0"}
			>
				How to {query ? `sell ${found?.name}` : "sell crypto or funds"} to us
			</Heading>
			<Box display={"flex"} margin={{ md: "0 6rem" }} flexDirection={"column"}>
				{query ? <GiftCardGuildeline name={found?.name} /> : <GiftCardGuildeline />}
			</Box>
		</Box>
	);
}

export default FundingGuildeline
