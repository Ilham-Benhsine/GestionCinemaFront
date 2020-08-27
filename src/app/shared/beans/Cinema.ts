import { Salle } from './Salle';

export class Cinema {
    id: number;
    adresse: string;
    nom: string;
    nombreSalles: number;
    prixht: number;
    sup3d: number;
    salles: Array<Salle>;
}
