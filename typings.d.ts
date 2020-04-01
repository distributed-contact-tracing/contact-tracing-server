interface ContagiousEventDocument {
  id: string;
  timestamp: number;
  region: string;
  hashedEvents: Array<string>;
}
