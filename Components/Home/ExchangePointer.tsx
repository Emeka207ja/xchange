import React from 'react'
import { Box, Image, Text, HStack } from '@chakra-ui/react'
import { FcRight } from "react-icons/fc"
import { pointerData } from './pointerData'
interface Props{
   
    id:string
}

const ExchangePointer = ({ id }: Props) => {
    const foundData = pointerData?.find(el=> el.id === id)
  return (
		<Box>
			<HStack>
				<Box>
					<HStack spacing={5}>
						<Box fontSize={"0.9rem"}>Exchange</Box>
						<Box>
							<HStack>
								<Box width={"1.2rem"}>
									<Image
										src={foundData?.img}
										alt={foundData?.name}
										width={"100%"}
										objectFit={"cover"}
									/>
								</Box>
								<Box fontSize={"0.9rem"}>{foundData?.name}</Box>
							</HStack>
						</Box>
					</HStack>
				</Box>
				<Box>
					<FcRight />
				</Box>
				<Box>
					<HStack>
						<Box width={"1.6rem"}>
							<Image
								src="/assets/images/cash.png"
								alt=""
								width={"100%"}
								objectFit={"contain"}
							/>
						</Box>
						<Box fontSize={"0.9rem"}>Naira NGN</Box>
					</HStack>
				</Box>
			</HStack>
		</Box>
	);
}

export default ExchangePointer
