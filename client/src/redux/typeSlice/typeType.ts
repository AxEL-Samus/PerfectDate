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
};

export type TypeType = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  Attractions: Attraction[];
};
export type TypeTypeSlice = {
  type: TypeType[];
};
