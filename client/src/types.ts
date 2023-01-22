export type Product = {
  _id: string;
  name: string;
  description: string;
  category: string;
  images: FileList[];
  price: string;
};

export type Category = {
  _id: string;
  name: string;
}


export type Tag = {
  _id: string,
  tag: string;
}