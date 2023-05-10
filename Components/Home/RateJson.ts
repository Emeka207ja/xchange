interface iRate{
    id: number,
    img: string,
    currency: string,
    rate1: number,
    rate2: number
}

export const RateJson: iRate[] = [
    {
        id: 1,
        img: "/assets/images/zelle.jpeg",
        currency: "Zelle",
        rate1: 400,
        rate2: 430
    },
    {
        id: 2,
        img: "/assets/images/skrill.png",
        currency: "Skrill",
        rate1: 500,
        rate2: 600
    },
    {
        id: 3,
        img: "/assets/images/usdt.png",
        currency: "USDT",
        rate1: 600,
        rate2: 700
    },
    {
        id: 4,
        img: "/assets/images/wise.png",
        currency: "Wise",
        rate1: 400,
        rate2: 500
    },
    {
        id: 5,
        img: "/assets/images/revolut.png",
        currency: "Revolut",
        rate1: 400,
        rate2: 500
    },
    {
        id: 6,
        img: "/assets/images/perfectmoney.png",
        currency: "Perfect Money",
        rate1: 500,
        rate2: 650
    },
    {
        id: 7,
        img: "/assets/images/payoneer.png",
        currency: "Payoneer",
        rate1: 500,
        rate2: 650
    },
   
    {
        id: 9,
        img: "/assets/images/greendot.jpg",
        currency: "Greendot",
        rate1: 400,
        rate2: 500
    },
    {
        id: 10,
        img: "/assets/images/neteller.jpg",
        currency: "Neteller",
        rate1: 500,
        rate2: 600
    },
   
]