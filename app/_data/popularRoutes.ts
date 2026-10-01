export type RouteProp = {
  id: number;
  from: string;
  to: string;
  startingPrice: number;
  src: string;
};

type PopularRoute = {
  city: string;
  routes: RouteProp[];
};

export const popularRoutes: PopularRoute[] = [
  {
    city: "تهران",
    routes: [
      {
        id: 1,
        from: "شیراز",
        to: "تهران",
        startingPrice: 1_700_000,
        src: "/popular/tehran.png",
      },
      {
        id: 2,
        from: "تهران",
        to: "کیش",
        startingPrice: 2_500_000,
        src: "/popular/kish.png",
      },
      {
        id: 3,
        from: "تهران",
        to: "مشهد",
        startingPrice: 1_500_000,
        src: "/popular/mashhad.png",
      },
      {
        id: 4,
        from: "مشهد",
        to: "تهران",
        startingPrice: 1_500_000,
        src: "/popular/tehran.png",
      },
    ],
  },
  {
    city: "مشهد",
    routes: [
      {
        id: 5,
        from: "تهران",
        to: "مشهد",
        startingPrice: 1_500_000,
        src: "/popular/mashhad.png",
      },
      {
        id: 6,
        from: "مشهد",
        to: "تهران",
        startingPrice: 1_500_000,
        src: "/popular/tehran.png",
      },
      {
        id: 7,
        from: "کیش",
        to: "مشهد",
        startingPrice: 2_700_000,
        src: "/popular/mashhad.png",
      },
      {
        id: 8,
        from: "مشهد",
        to: "شیراز",
        startingPrice: 1_700_000,
        src: "/popular/shiraz.png",
      },
    ],
  },
  {
    city: "شیراز",
    routes: [
      {
        id: 9,
        from: "تهران",
        to: "شیراز",
        startingPrice: 1_700_000,
        src: "/popular/shiraz.png",
      },
      {
        id: 10,
        from: "شیراز",
        to: "تهران",
        startingPrice: 1_800_000,
        src: "/popular/tehran.png",
      },
      {
        id: 11,
        from: "کیش",
        to: "شیراز",
        startingPrice: 1_500_000,
        src: "/popular/shiraz.png",
      },
      {
        id: 12,
        from: "شیراز",
        to: "مشهد",
        startingPrice: 1_800_000,
        src: "/popular/mashhad.png",
      },
    ],
  },
  {
    city: "کیش",
    routes: [
      {
        id: 13,
        from: "تهران",
        to: "کیش",
        startingPrice: 2_500_000,
        src: "/popular/kish.png",
      },
      {
        id: 14,
        from: "کیش",
        to: "تهران",
        startingPrice: 2_200_000,
        src: "/popular/tehran.png",
      },
      {
        id: 15,
        from: "کیش",
        to: "مشهد",
        startingPrice: 2_700_000,
        src: "/popular/mashhad.png",
      },
      {
        id: 16,
        from: "شیراز",
        to: "کیش",
        startingPrice: 1_700_000,
        src: "/popular/kish.png",
      },
    ],
  },
];
