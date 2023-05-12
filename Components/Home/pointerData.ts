export interface pointer{
    img: string,
    id: string,
    name:string
}

export const pointerData: pointer[] = [
	{
		img: "/assets/images/btc.png",
		id: "bitcoin",
		name: "BTC",
	},
	{
		img: "/assets/images/usdt.png",
		id: "usdt",
		name: "USDT",
	},
	{
		img: "/assets/images/skrill.png",
		id: "skrill_funds",
		name: "Skrill",
	},
	{
		img: "/assets/images/paypal.png",
		id: "paypal_funds",
		name: "Paypal",
	},
	{
		img: "/assets/images/zelle.jpeg",
		id: "zelle_funds",
		name: "Zelle",
	},
	{
		img: "/assets/images/cashapp.png",
		id: "cashapp",
		name: "Cashapp",
	},
	
];