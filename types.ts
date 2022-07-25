export type Project = {
  name: string,
  address: string,
  type: string,
  client: string,
  value: number,
  dateCompleted: string | null,
  image: string,
  description?: string,
}

export type Service = {
  title: string,
  description: string,
  photo: string,
}

export type Reccomendation = {
  quote: string,
  company: string,
  name: string,
  title: string
}

export type Client = {
  name: string;
  link: string | undefined;
  img:  string | null;
}