import { Utilisateur } from './Utilisateur';
import { Salle } from './Salle';
import { Film } from './Film';
export class Seance {
    id: number;
    horaire: any;
    placesSansReservation: number;
    sup3d: boolean;
    film: Film;
    //salle: Salle;

    utilisateurs: Array<Utilisateur>;
}