type PopularRoute = {
  city: string;
  routes: {
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
        from: "شیراز",
        to: "تهران",
        startingPrice: 1_700_000,
        srcName: "tehran",
      },
      { from: "تهران", to: "کیش", startingPrice: 2_500_000, srcName: "kish" },
      {
        from: "تهران",
        to: "مشهد",
        startingPrice: 1_500_000,
        srcName: "mashhad",
      },
      {
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
        from: "تهران",
        to: "مشهد",
        startingPrice: 1_500_000,
        srcName: "mashhad",
      },
      {
        from: "مشهد",
        to: "تهران",
        startingPrice: 1_500_000,
        srcName: "tehran",
      },
      { from: "کیش", to: "مشهد", startingPrice: 2_700_000, srcName: "mashhad" },
      {
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
        from: "تهران",
        to: "شیراز",
        startingPrice: 1_700_000,
        srcName: "shiraz",
      },
      {
        from: "شیراز",
        to: "تهران",
        startingPrice: 1_800_000,
        srcName: "tehran",
      },
      { from: "کیش", to: "شیراز", startingPrice: 1_500_000, srcName: "shiraz" },
      {
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
      { from: "تهران", to: "کیش", startingPrice: 2_500_000, srcName: "kish" },
      { from: "کیش", to: "تهران", startingPrice: 2_200_000, srcName: "tehran" },
      { from: "کیش", to: "مشهد", startingPrice: 2_700_000, srcName: "mashhad" },
      { from: "شیراز", to: "کیش", startingPrice: 1_700_000, srcName: "kish" },
    ],
  },
];
