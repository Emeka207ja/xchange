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
		<Card width={{base:"93%",md:"100%"}}>
			<CardBody>
				<Image src={img} alt={name} w={{base:"98%", md:"100%"}} borderRadius={"md"} />
			</CardBody>
			<CardFooter>
				<Text>{name}</Text>
			</CardFooter>
		</Card>
	);
}

export default GiftCard
