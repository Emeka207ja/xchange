import React,{useState,useEffect} from 'react'
import {
    Box,
    FormLabel,
    FormControl,
    
	Select,
	Button,
	useMediaQuery,
	Link,
	Grid,
	GridItem
} from '@chakra-ui/react'
import { RiExchangeDollarLine } from "react-icons/ri"
import { FaExchangeAlt } from "react-icons/fa"
import useNavigator from '../Hooks/useNavigator'
import { pointerData } from './pointerData'
import { Find } from '../Utils/funcs'
import SelectOption from './SelectOption'

const SendeReceive = () => {
	const [query] = useNavigator()

	const [isMobile] = useMediaQuery("(max-width: 768px)"); 
	const [coin, setCoin] = useState("BTC")
	const [receive, setReceive] = useState("naira")

	useEffect(() => {
		const data = Find(pointerData,query)!
		setCoin(data?.name)
	},[query])
	
	const handleChange = (
		e: React.ChangeEvent<HTMLSelectElement>,
		fn: React.Dispatch<React.SetStateAction<string>>
	) => {
		
		fn(e.target.value);
	};
	const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

  return (
		<Box>
			<form onSubmit={submitHandler}>
				<Grid
					gridTemplateColumns={{ base: "repeat(1fr)", md: "repeat(5,1fr)" }}
					alignItems={"center"}
					justifyItems={"center"}
					marginRight={{ base: "2rem", md: "0" }}
				>
					<GridItem colSpan={{ md: 2 }}>
						<FormControl w={{ base: "19rem" }}>
							<FormLabel>Send</FormLabel>
							<Select
								placeholder="select"
								value={coin}
								onChange={(e) => handleChange(e, setCoin)}
							>
								{pointerData?.map((el) => (
									<SelectOption name={el.name} img={el.img} key={el.id} />
								))}
							</Select>
						</FormControl>
					</GridItem>

					{/* second grid item */}
					<GridItem colSpan={{ md: 1 }}>
						<Box mt={7}>
							<FaExchangeAlt />
						</Box>
					</GridItem>

					{/* third grid item */}
					<GridItem colSpan={{ md: 2 }}>
						<FormControl w={{ base: "19rem" }}>
							<FormLabel>Receive</FormLabel>
							<Select
								placeholder="select"
								value={receive}
								onChange={(e) => handleChange(e, setReceive)}
							>
								<option
									value="naira"
									style={{ fontSize: "0.6rem", width: "4rem" }}
								>
									Naira
								</option>
							</Select>
						</FormControl>
					</GridItem>
				</Grid>
				<Box>
					<Link href="https://api.whatsapp.com/send/?phone=09028879815&text&type=phone_number&app_absent=0">
						<Button
							colorScheme="red"
							pos={"relative"}
							left={{ base: "30%", md: "42%" }}
							mt={{ base: "1rem", md: "2rem" }}
							mb={"1rem"}
							
						>
							<Box paddingRight={"0.5rem"}>
								<RiExchangeDollarLine />
							</Box>
							Exchange
						</Button>
					</Link>
				</Box>
			</form>
		</Box>
	);
}

export default SendeReceive
