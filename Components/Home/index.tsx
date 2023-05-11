import React from 'react'
import { Box, Text, HStack, Stack, useColorMode, Center,Grid,GridItem,Heading } from '@chakra-ui/react'
import SendeReceive from './SendeReceive';
import FundingGuildeline from './FundingGuildeline';
import SellGiftCard from './SellGiftCard';
import { Rates } from './Rate';
import { AiOutlineMenu } from "react-icons/ai"
import Testimonial from './Testimonial';


const Home = () => {
 const { colorMode, toggleColorMode } = useColorMode();
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
					<Box >
						<Heading
							textAlign={{ base: "center", md: "center" }}
							fontSize={"1.5rem"}
						>
							Start exchanges
						</Heading>
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
					  <Testimonial/>
					</Box>
				</GridItem>
			</Grid>

			{/* neeeewwwww */}
		</Box>
	);
}

export default Home
