import React from 'react'
import { Box, Text, Heading } from "@chakra-ui/react";
import GuildelineList from './GuildelineList';

const FundingGuildeline = () => {
    interface guide{
        id: number,
        process:string
    }
    const fundingProcedure: guide[] = [
        {
            id: 1,
            process:"Select crypto or the type of fund you want to send"
        },
        {
            id: 2,
            process:"Click on exchange button to get info to send to"
        },
        {
            id: 3,
            process:"State how many crrpto or fun you want to send to the info"
        },
        {
            id: 4,
            process:"Transfer and wait for confirmation"
        },
        {
            id: 5,
            process:"Confirm reception of funds"
        },
        {
            id: 6,
            process:"Thanks for patronage"
        },
    ]
  return (
		<Box pos={"relative"} left={{ base: "3%", md: "0" }}>
			<Heading
				fontSize={"1rem"}
				textAlign={{ md: "center" }}
				pos={"relative"}
				left={{ base: "13%", md: "0" }}
				margin={"1.2rem 0"}
			>
				How to sell crypto or funds to us
			</Heading>
			<Box display={"flex"} margin={{md:"0 6rem"}} flexDirection={"column"}>
				{fundingProcedure?.map((el) => (
					<GuildelineList id={el.id} process={el.process} key={el.id} />
				))}
			</Box>
		</Box>
	);
}

export default FundingGuildeline
