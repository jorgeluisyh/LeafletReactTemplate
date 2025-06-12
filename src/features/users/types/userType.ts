
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;       // Aquí agregamos la interfaz Address
  phone: string;          // Agregamos el teléfono
  website: string;        // Agregamos el sitio web
  company: Company;       // Aquí agregamos la interfaz Company
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;               // Aquí agregamos la interfaz Geo para la ubicación
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
