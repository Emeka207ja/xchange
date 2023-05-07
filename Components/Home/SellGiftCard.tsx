import React from 'react'
import { Box, Text, Heading,Grid} from '@chakra-ui/react'
import GiftCard from './GiftCard'

interface iCard{
    id: number,
    img: string,
    name:string
}

const SellGiftCard = () => {
    const Cards: iCard[] = [
        {
            id: 1,
            img: "/assets/images/ebay.jpeg",
            name:"Ebay Gift Card"
        },
        {
            id: 2,
            img: "/assets/images/google.jpeg",
            name:"Google Gift Card"
        },
        {
            id: 3,
            img: "/assets/images/vanilla.jpeg",
            name:"Vanilla Gift Card"
        },
        {
            id: 4,
            img: "/assets/images/walmart.jpeg",
            name:"Walmart Gift Card"
        },
        {
            id: 5,
            img: "/assets/images/amazon.jpeg",
            name:"Amazon Gift Card"
        },
        {
            id: 6,
            img: "/assets/images/razor.png",
            name:"Razor Gift Card"
        },
        {
            id: 7,
            img: "/assets/images/steam.jpeg",
            name:"Steam Gift Card"
        },
    ]
  return (
		<Box>
			<Heading textAlign={{ md: "center" }} fontSize={"1.2rem"} pos = {"relative"} left={{base:"30%",md:"0"}} margin={"1rem 0"}>
				Sell Gift card
			</Heading>
			
			<Grid
				gap="20px"
				templateColumns={{
					base: "repeat( 1fr)",
					md: "repeat(3, 1fr)",
				}}
			>
				{Cards?.map((el) => (
					<GiftCard id={el.id} name={el.name} img={el.img} key={el.id} />
				))}
			</Grid>
		</Box>
	);
}

export default SellGiftCard
