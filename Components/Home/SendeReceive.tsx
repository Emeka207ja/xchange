import React from 'react'
import {
    Box,
    FormLabel,
    FormControl,
    HStack,
    Input,
    Select,
    Stack,
    useMediaQuery
} from '@chakra-ui/react'

const SendeReceive = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)"); 
  return (
		<Box>
			<form>
				<Stack direction={{ base: "column", md: "row" }}>
					<FormControl>
						<FormLabel>Send</FormLabel>
						<Input />
					</FormControl>
					{!isMobile && <Box>Icon</Box>}
					<FormControl>
						<FormLabel>Send</FormLabel>
						<Select placeholder="select">
							<option value="option1" style={{width:"2rem"}}>Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3" >Option 3</option>
						</Select>
					</FormControl>
				</Stack>
			</form>
		</Box>
	);
}

export default SendeReceive
