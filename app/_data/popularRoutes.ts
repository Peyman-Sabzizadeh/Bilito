type PopularRoute = {
  city: string;
  routes: {
    id: number;
    from: string;
    to: string;
    startingPrice: number;
    srcName: string;
  }[];
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
        srcName: "tehran",
      },
      {
        id: 2,
        from: "تهران",
        to: "کیش",
        startingPrice: 2_500_000,
        srcName: "kish",
      },
      {
        id: 3,
        from: "تهران",
        to: "مشهد",
        startingPrice: 1_500_000,
        srcName: "mashhad",
      },
      {
        id: 4,
        from: "مشهد",
        to: "تهران",
        startingPrice: 1_500_000,
        srcName: "tehran",
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
        srcName: "mashhad",
      },
      {
        id: 6,
        from: "مشهد",
        to: "تهران",
        startingPrice: 1_500_000,
        srcName: "tehran",
      },
      {
        id: 7,
        from: "کیش",
        to: "مشهد",
        startingPrice: 2_700_000,
        srcName: "mashhad",
      },
      {
        id: 8,
        from: "مشهد",
        to: "شیراز",
        startingPrice: 1_700_000,
        srcName: "shiraz",
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
        srcName: "shiraz",
      },
      {
        id: 10,
        from: "شیراز",
        to: "تهران",
        startingPrice: 1_800_000,
        srcName: "tehran",
      },
      {
        id: 11,
        from: "کیش",
        to: "شیراز",
        startingPrice: 1_500_000,
        srcName: "shiraz",
      },
      {
        id: 12,
        from: "شیراز",
        to: "مشهد",
        startingPrice: 1_800_000,
        srcName: "mashhad",
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
        srcName: "kish",
      },
      {
        id: 14,
        from: "کیش",
        to: "تهران",
        startingPrice: 2_200_000,
        srcName: "tehran",
      },
      {
        id: 15,
        from: "کیش",
        to: "مشهد",
        startingPrice: 2_700_000,
        srcName: "mashhad",
      },
      {
        id: 16,
        from: "شیراز",
        to: "کیش",
        startingPrice: 1_700_000,
        srcName: "kish",
      },
    ],
  },
];
