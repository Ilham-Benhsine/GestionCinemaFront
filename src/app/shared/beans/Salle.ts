import { Cinema } from './Cinema';
import { Seance } from './Seance';
export class Salle {
    id: number;
    capacite: number;
    numero: number;
    //cinema: Cinema;
    seances: Array<Seance>;
}