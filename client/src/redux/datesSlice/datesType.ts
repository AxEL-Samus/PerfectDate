export type DatesState = {
  id: number;
  title: string;
  date: string;
  loveId: number;
  restLat: string;
  restLng: string;
  restTitle: string;
  restImg: string;
  restUrl: string;
  kinoLat: string;
  kinoLng: string;
  kinoTitle: string;
  kinoImg: string;
  kinoUrl: string;
  parkLat: string;
  parkLng: string;
  parkTitle: string;
  parkImg: string;
  taxi: string;
  kinoDate: string;
  movieTitle: string;
  userId: number;
};

export type Type = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Attraction = {
  id: number;
  name: string;
  lat: string;
  lng: string;
  imgUrl: string;
  url: string;
  typeId: number;
  createdAt: Date;
  updatedAt: Date;
  Type: Type;
};

export type Date = {
  id: number;
  time: string;
  userId: number;
  loveId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type RootObject = {
  id: number;
  time: string;
  userId: number;
  loveId: number;
  createdAt: Date;
  updatedAt: Date;
  Attractions: Attraction[];
};

export type DateTypeSlice = {
  date: RootObject[];
};
