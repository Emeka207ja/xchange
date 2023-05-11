interface iTestimonial{
    id:number,
    img1: string,
    img2: string,
    from: string,
    to: string,
    rate: string,
    content: string,
    name:string
}

export const testimonial: iTestimonial[] = [
	{
		id: 1,
		img1: "/assets/images/btc.png",
        img2: "/assets/images/cash.png",
        from: "BTC",
        to: "Naira",
        "rate": "Fast and Reliable",
        content: "They offer a fast and reliable service",
        name:"ugochukwu"
	},
	{
		id: 2,
		img1: "/assets/images/cashapp.png",
        img2: "/assets/images/cash.png",
        from: "Casshapp",
        to: "Naira",
        "rate": "Great trade",
        content: "They offer a quick and reliable service",
        name:"Henry"
	},
	{
		id: 3,
		img1: "/assets/images/paypal.png",
        img2: "/assets/images/cash.png",
        from: "Paypal funds",
        to: "Naira",
        "rate": "Great trade",
        content: "They offer a quick and reliable service",
        name:"Maggaret"
	},
];