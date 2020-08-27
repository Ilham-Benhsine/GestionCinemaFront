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
    genres = new Array<Genre>();
    acteurs = new Array<Acteur>();
    realisateurs = new Array<Realisateur>();
}
