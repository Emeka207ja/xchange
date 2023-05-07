import React from 'react'
import {
	
	Card,
	CardBody,
	Image,
	CardFooter,
	Text,
	
} from "@chakra-ui/react";

interface Props{
    id: number,
    img: string,
    name:string
}

const GiftCard = ({id,img,name}:Props) => {
  return (
		<Card width={{base:"78%",md:"100%"}}>
			<CardBody>
				<Image src={img} alt={name} w={"100%"} />
			</CardBody>
			<CardFooter>
				<Text>{name}</Text>
			</CardFooter>
		</Card>
	);
}

export default GiftCard
