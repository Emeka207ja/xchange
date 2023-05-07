import React from 'react'
import { Box, Text, HStack, Stack, useColorMode, Center } from '@chakra-ui/react'
import SendeReceive from './SendeReceive';
import FundingGuildeline from './FundingGuildeline';
import SellGiftCard from './SellGiftCard';

const Home = () => {
 const { colorMode, toggleColorMode } = useColorMode();
  return (
		<Box
			width={"100%"}
			
			bg={colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.200"}
			borderRadius={"md"}
		>
			<Stack
				direction={{ sm: "column", md: "row" }}
				width={"100%"}
				display={{ sm: "block", md: "flex" }}
			>
				<Box
					width={{ base: "30rem", md: "70%" }}
					bg={colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.200"}
					borderRadius={"md"}
				>
					<Box position={"relative"} right={{ base: "2rem", md: "0" }}>
						<Text
							textAlign={{ base: "center", md: "center" }}
							fontSize={"0.9rem"}
						>
							Start exchanges
						</Text>
                  </Box>
				  <SendeReceive />
				  <FundingGuildeline />
				  <SellGiftCard/>
				</Box>

				<Box
					width={{ base: "30rem", md: "30%" }}
					bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.100"}
					borderRadius={"md"}
				>
					<Box position={"relative"} right={{ base: "2rem", md: "0" }}>
						<Text textAlign={"center"} fontSize={"0.9rem"}>
							Our rates
						</Text>
					</Box>
				</Box>
			</Stack>
		</Box>
	);
}

export default Home
