import React from 'react'
import { List, ListItem, ListIcon } from "@chakra-ui/react"
import { SettingsIcon } from "@chakra-ui/icons";

interface Props {
	id: number;
	process: string;
}
const GuildelineList = ({id,process}: Props) => {
    
  return (
		<List key={id} spacing={5}>
			<ListItem fontSize={{ base: "0.9rem", md: "1rem" }}>
				<ListIcon as={SettingsIcon} color="green.500" />
				{process}
			</ListItem>
		</List>
	);
}

export default GuildelineList
