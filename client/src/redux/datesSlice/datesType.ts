export type DatesState = {
  id: number;
  title: string;
  date: string;
  loveId: number;
  restLat: string;
  restLng: string;
  restTitle: string;
  kinoLat: string;
  kinoLng: string;
  kinoTitle: string;
  parkLat: string;
  parkLng: string;
  parkTitle: string;
  taxi: string;
  kinoDate: string;
  movieTitle: string;
  userId: number;
};

export type DateTypeSlice = {
  date: DatesState[];
};
