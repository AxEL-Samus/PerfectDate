export type AttractionType = {
  id: number;
  name: string;
  typeId: number;
  imgUrl: string;
  url: string;
  lat: string;
  lng: string;
};

export type AttractionTypeSlice = {
  attraction: AttractionType[];
};

