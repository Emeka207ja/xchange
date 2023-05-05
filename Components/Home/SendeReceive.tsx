import React from 'react'
import {
    Box,
    FormLabel,
    FormControl,
    HStack,
    Input,
    Select,
    Stack,
	useMediaQuery,
	Flex,Image
} from '@chakra-ui/react'

const SendeReceive = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)"); 
  return (
		<Box>
			<form>
				<Flex
					flexDirection={{ base: "column", md: "row" }}
					alignItems={"center"}
					justifyContent={"space-around"}
				>
					<FormControl>
						<FormLabel textAlign={"center"}>Send</FormLabel>
						<Select
							placeholder="select"
							width={{ base: "sm", md: "md" }}
							display={"relative"}
							left={{ base: "0", md: "0" }}
						>
							<option value="option1" style={{ fontSize: "0.6rem" }}>
								Bitcoin
							</option>
							<option
								value="option2"
								style={{ fontSize: "0.6rem", width: "4rem" }}
							>
								USDT
							</option>
							<option
								value="option3"
								style={{ fontSize: "0.6rem", width: "4rem" }}
							>
								Option 3
							</option>
						</Select>
					</FormControl>
					{!isMobile && (
						<Box width={"7rem"} pos={"relative"} right={"2rem"} top={"1rem"}>
							<Image src="/assets/images/exchange.png" alt="" width={"100%"}  objectFit={"cover"}/>
						</Box>
					)}
					<FormControl>
						<FormLabel textAlign={"center"}>Receive</FormLabel>
						<Select
							placeholder="select"
							width={{ base: "sm", md: "md" }}
							display={"relative"}
							left={{ base: "0", md: "0" }}
						>
							<option
								value="option1"
								style={{ fontSize: "0.6rem", width: "4rem" }}
							>
								Naira
							</option>
							
						</Select>
					</FormControl>
				</Flex>
			</form>
		</Box>
	);
}

export default SendeReceive
