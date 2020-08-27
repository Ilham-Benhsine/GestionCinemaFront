import { Utilisateur } from './Utilisateur';
import { Salle } from './Salle';
import { Film } from './Film';
export class Seance {
    id: number;
    horaire = new Date();
    placesSansReservation: number;
    sup3d: boolean;
    //film: Film;
    utilisateurs: Array<Utilisateur>;
    film = new Film();
}
