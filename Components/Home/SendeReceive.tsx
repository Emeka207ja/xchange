import React,{useState} from 'react'
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
	const [coin, setCoin] = useState("Bitcoin")
	const [receive, setReceive] = useState("naira")
	
	const handleChange = (
		e: React.ChangeEvent<HTMLSelectElement>,
		fn: React.Dispatch<React.SetStateAction<string>>
	) => {
		fn(e.target.value);
	};
  return (
		<Box>
			<form>
				<Flex
					flexDirection={{ base: "column", md: "row" }}
					alignItems={"center"}
					justifyContent={"space-around"}
				>
					<FormControl>
						<FormLabel
							textAlign={{ md: "center" }}
							marginLeft={{ base: "1rem", md: "0" }}
						>
							Send
						</FormLabel>
						<Select
							placeholder="select"
							width={{ base: "sm", md: "md" }}
							display={"relative"}
							left={{ base: "0", md: "0" }}
						  value={coin}
						  onChange={(e)=>handleChange(e,setCoin)}
						>
							<option value="Bitcoin" style={{ fontSize: "0.6rem" }}>
								Bitcoin
							</option>
							<option
								value="usdt"
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
							<Image
								src="/assets/images/exchange.png"
								alt=""
								width={"100%"}
								objectFit={"cover"}
							/>
						</Box>
					)}
					<FormControl>
						<FormLabel
							textAlign={{ md: "center" }}
							marginLeft={{ base: "1rem", md: "0" }}
						>
							Receive
						</FormLabel>
						<Select
							placeholder="select"
							width={{ base: "sm", md: "md" }}
							display={"relative"}
						  left={{ base: "0", md: "0" }}
						  value={receive}
						  onChange={(e)=>handleChange(e,setReceive)}
						>
							<option
								value="naira"
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
