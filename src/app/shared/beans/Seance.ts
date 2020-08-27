import { Film } from './Film';
export class Seance {
    id: number;
    horaire = new Date();
    placesSansReservation: number;
    sup3d: boolean;
    film = new Film();
}
