import React from 'react'
import { Box, Text, Image, HStack,Card, CardHeader,CardBody,Button,CardFooter,Heading } from '@chakra-ui/react'
import { AiOutlineStar } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import {BsArrowRight} from "react-icons/bs"

interface Props{
    content: string,
	name: string,
	from: string,
	to: string,
	img1: string,
	img2:string
}

const CarouselItem = ({content,name,from,to,img1,img2}:Props) => {
  return (
		<Card align="center" w={{base:"95%",md:"100%"}}>
			<CardHeader>
				<HStack spacing={4}>
					<Box>
						<AiOutlineStar />
					</Box>
					<Box>
						<AiOutlineStar />
					</Box>
					<Box>
						<AiOutlineStar />
					</Box>
					<Box>
						<AiOutlineStar />
					</Box>
				</HStack>
				<Box mt={6}>
					<HStack spacing={6}>
						<Box>By</Box>
						<Box display={"flex"} alignItems={"center"}>
							<FaUserAlt />
							<Box marginLeft={2}>{name}</Box>
						</Box>
						{/* <Box>{name}</Box> */}
					</HStack>
				</Box>
			</CardHeader>
			<CardBody
				display={"flex"}
				justifyContent={"center"}
				flexDirection={"column"}
			>
				<Box>
					<HStack spacing={6}>
						<Box display={"flex"} alignItems={"center"}>
							<Box w={6}>
								<Image src={img1} alt={from} w={"100%"} objectFit={"cover"} />
							</Box>
							<Box marginLeft={2}>{from}</Box>
						</Box>

						<Box>
							<BsArrowRight />
						</Box>

						<Box display={"flex"} alignItems={"center"}>
							<Box w={6}>
								<Image src={img2} alt={to} w={"100%"} objectFit={"cover"} />
							</Box>
							<Box marginLeft={2}>{to}</Box>
						</Box>
					</HStack>
				</Box>
				<Box mt={6}>
					<Text>{content}</Text>
				</Box>
			</CardBody>
			<CardFooter></CardFooter>
		</Card>
	);
}

export default CarouselItem
