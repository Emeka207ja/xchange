import React,{useState,useEffect} from 'react'
import { Box, Text, HStack, Stack, useColorMode, Center,Grid,GridItem,Heading } from '@chakra-ui/react'
import SendeReceive from './SendeReceive';
import FundingGuildeline from './FundingGuildeline';
import SellGiftCard from './SellGiftCard';
import { Rates } from './Rate';
import { AiOutlineMenu } from "react-icons/ai"
import Testimonial from './Testimonial';
import useNavigator from '../Hooks/useNavigator';
import ExchangePointer from './ExchangePointer';


const Home = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const [query] = useNavigator()
	console.log(query)
  return (
		<Box
			bg={colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.200"}
			borderRadius={"md"}
		>
			<Grid
				gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
				gap={4}
			>
				<GridItem
					colSpan={{ md: 2 }}
					bg={colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.200"}
					borderRadius={"md"}
				>
					<Box margin={{ base: "0 2rem", md: "0 21rem" }} paddingTop={4}>
						
						{query?.length ? (
							<ExchangePointer id={query} />
						) : (
							<Heading
								textAlign={{ base: "center", md: "center" }}
								fontSize={"1.5rem"}
							>
								Start Exchange
							</Heading>
						)}
					</Box>
					<SendeReceive />
					<FundingGuildeline />
					<SellGiftCard />
				</GridItem>

				<GridItem
					colSpan={{ md: 1 }}
					bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.100"}
					borderRadius={"md"}
				>
					<Box>
						<Box
							marginLeft={{ base: "0.7rem", md: "0" }}
							paddingTop={{ base: "0.7rem", md: "0" }}
						>
							<HStack>
								<Box>
									<AiOutlineMenu />
								</Box>
								<Box>
									<Text fontSize={"0.9rem"}>Our rates</Text>
								</Box>
							</HStack>
						</Box>

						<Rates />
						<Testimonial />
					</Box>
				</GridItem>
			</Grid>

			{/* neeeewwwww */}
		</Box>
	);
}

export default Home
