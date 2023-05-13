import { ReactNode } from "react";
import {
	Box,
	Flex,
	Avatar,
	Link,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
    Center,
    HStack,
	IconButton,
	Image
	
 
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
	{
		id: "Exhange",
		url: "/",
	},

	{
		id: "Bitcoin",
		url: "/?query=bitcoin",
	},
	{
		id: "USDT",
		url: "/?query=usdt",
	},
	{
		id: " Skrill Funds",
		url: "/?query=skrill_funds",
	},
	{
		id: "Paypal Funds",
		url: "/?query=paypal_funds",
	},
	{
		id: "Zelle Funds",
		url: "/?query=zelle_funds",
	},
	{
		id: "CashApp",
		url: "/?query=cashapp",
	},
	
];
interface Props {
    children?: ReactNode,
	url?: string,
	
}

const NavLink = ({ children,url}:Props) => (
	<Link
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700"),
		}}
		href={url?url:"#"}
	>
		{children}
	</Link>
);

export default function Nav() {;
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					<IconButton
						size={"md"}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<Box width={"8"}>
						<Image src="/assets/images/logo_icon.png" alt="" objectFit={"cover"}  borderRadius={"md"}/>
					</Box>

					<Flex alignItems={"center"}>
						<Stack direction={"row"} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
							</Button>
						</Stack>
					</Flex>
					<HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
						{Links.map((link) => (
							<Box key={link.id}>
								<NavLink url={link.url}>{link.id}</NavLink>
							</Box>
						))}
					</HStack>
				</Flex>
				{isOpen ? (
					<Box pb={4} display={{ md: "none" }}>
						<Stack as={"nav"} spacing={4}>
							{Links.map((link) => (
								<Box key={link.id}>
									<NavLink url={link.url}>{link.id}</NavLink>
								</Box>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	);
}
