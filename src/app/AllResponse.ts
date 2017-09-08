import{Character} from './character'

export interface AllResponse {
  count: number;
  next: string;
  previous: any;
  results: Character[];
}