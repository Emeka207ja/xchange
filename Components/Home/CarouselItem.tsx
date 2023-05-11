import React from 'react'
import { Box, Text, Image, HStack,Card, CardHeader,CardBody,Button,CardFooter,Heading } from '@chakra-ui/react'
import { AiOutlineStar } from "react-icons/ai"
import {FaUserAlt} from "react-icons/fa"

interface Props{
    content: string,
    name:string
}

const CarouselItem = ({content,name}:Props) => {
  return (
		<Card align="center">
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
				</HStack>
				<Box mt={6}>
					<HStack spacing={6}>
						<Box>By</Box>
						<Box>
							<FaUserAlt />
						</Box>
						<Box>{name}</Box>
					</HStack>
				</Box>
			</CardHeader>
			<CardBody>
				<Text>{content}</Text>
			</CardBody>
			<CardFooter>
				<Button colorScheme="red">View here</Button>
			</CardFooter>
		</Card>
	);
}

export default CarouselItem
