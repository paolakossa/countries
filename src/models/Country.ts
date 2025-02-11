interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  numericCode: string;
  nativeName: string;
  subregion: string;
  cca3: string;
  tld: string[];
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  borders: string[];
  flags: {
    png: string;
    svg: string;
  };
  region: string;
  population: number;
  capital: string;
}

export default Country;
