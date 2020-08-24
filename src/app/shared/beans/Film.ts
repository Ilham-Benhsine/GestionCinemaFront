import { Realisateur } from './Realisateur';
import { Genre } from './Genre';
import { Acteur } from './Acteur';
export class Film {
    id: number;
    titre: string;
    description: string;
    nomImg: string;
    dateSortie: any;
    duree: any;
    genres: Array<Genre>;
    acteurs: Array<Acteur>;
    realisateurs: Array<Realisateur>;
}
