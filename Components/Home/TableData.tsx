import React from 'react'
import { Tr, Td,Image,HStack,Text,Box } from '@chakra-ui/react'

interface Props {
    currency: string,
    img: string,
    rate1: number,
    rate2 : number
}

const TableData = ({currency,img,rate1,rate2}:Props) => {
  return (
		<Tr>
			<Td>
				<HStack>
					<Box width={"1.5rem"}>
						<Image
							src={img}
							alt={currency}
							width={"100%"}
                          objectFit={"cover"}
                          borderRadius={"md"}
						/>
					</Box>
					<Box>
						<Text fontSize={"0.8rem"}>{currency}</Text>
					</Box>
				</HStack>
			</Td>
			<Td fontSize={"0.8rem"}>
				{" "}
				&#8358;{rate1} - &#8358;{rate2}{" "}
			</Td>
		</Tr>
	);
}

export default TableData
