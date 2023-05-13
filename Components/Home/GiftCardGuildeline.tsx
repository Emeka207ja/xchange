import React from 'react'
import { List, ListItem,ListIcon } from '@chakra-ui/react';
import { SettingsIcon } from "@chakra-ui/icons";

interface Props{
    name?:string
}

const GiftCardGuildeline = ({name}:Props) => {
  return (
		<List>
			<ListItem fontSize={{ base: "0.8rem", md: "1rem" }}>
				<ListIcon as={SettingsIcon} color="green.500" />
				{!name
					? "Select crypto or the type of fund you want to send"
					: `tell us how many ${name} you want to exchange for naira`}
			</ListItem>
			<ListItem fontSize={{ base: "0.8rem", md: "1rem" }}>
				<ListIcon as={SettingsIcon} color="green.500" />
				Click on exchange button or chat us to get payment info
			</ListItem>
			<ListItem fontSize={{ base: "0.8rem", md: "1rem" }}>
				<ListIcon as={SettingsIcon} color="green.500" />
				{!name
					? "State how many crypto or fund you want to send"
					: `State how many ${name} you want to send `}
			</ListItem>
			<ListItem fontSize={{ base: "0.9rem", md: "1rem" }}>
				<ListIcon as={SettingsIcon} color="green.500" />
				Transfer and wait for confirmation
			</ListItem>
			<ListItem fontSize={{ base: "0.8rem", md: "1rem" }}>
				<ListIcon as={SettingsIcon} color="green.500" />
				Confirm reception of funds
			</ListItem>
			<ListItem fontSize={{ base: "0.8rem", md: "1rem" }}>
				<ListIcon as={SettingsIcon} color="green.500" />
				Thanks for your patronage
			</ListItem>
		</List>
	);
}

export default GiftCardGuildeline
