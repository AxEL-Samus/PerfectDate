export type DatesState = {
  id: number;
  title: string;
  date: string;
  loveId: number;
  restLat: string;
  restLng: string;
  restTitle: string;
  restImg: string;
  kinoLat: string;
  kinoLng: string;
  kinoTitle: string;
  kinoImg: string;
  parkLat: string;
  parkLng: string;
  parkTitle: string;
  parkImg: string;
  taxi: string;
  kinoDate: string;
  movieTitle: string;
  userId: number;
};

export type DateTypeSlice = {
  date: DatesState[];
};
