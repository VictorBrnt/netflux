import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Serie} from "../../models/serie.model";


@Injectable({
  providedIn: 'root'
})
export class SerieService {

  series: BehaviorSubject<Array<Serie>>;

  constructor() {

    const seriesToPush = [
      new Serie('Game of Thrones', '2011',8, 'Il y a très longtemps, à une époque oubliée, une force a détruit l\'équilibre des saisons. Dans un pays où l\'été peut durer plusieurs années et l\'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes. La confrérie de la Garde de Nuit, protégeant le Royaume de toute créature pouvant provenir d\'au-delà du Mur protecteur, n\'a plus les ressources nécessaires pour assurer la sécurité de tous. Après un été de dix années, un hiver rigoureux s\'abat sur le Royaume avec la promesse d\'un avenir des plus sombres. Pendant ce temps, complots et rivalités se jouent sur le continent pour s\'emparer du Trône de Fer, le symbole du pouvoir absolu. L\'incroyable défi d\'adapter cette saga épique en une série télévisée d\'une telle ampleur n\'a pu être relevé que grâce au courage de ses faiseurs. Et par courage, je veux dire que les scénaristes / producteurs David Benioff et D.B. Weiss ont pris à bras le corps le vaste travail de George R.R. Martin et l\'ont adapté fidèlement pour les nombreux fans. A l\'inverse, la difficulté pour HBO était d\'en faire une série s\'adressant à un public encore plus vaste. Est-ce que les téléspectateurs qui n\'ont pas lu les niombreux volumes vont se plonger dans cette intrigue multiple, peuplée de très nombreux personnages, le tout situé dans un vaste monde imaginaire ? (...) Game of Thrones a fait le buzz très en amont grâce à sa réputation de série pleine de sexe et de violence - et je ne veux surtout pas gâcher le plaisir à ceux qui vont découvrir la série. Mais ce que je peux affirmer c\'est que le sexe et la violence sont mieux ancrés dans l\'intrigue et les motivations des personnages que dans d\'autres séries récentes comme The Borgias et Spartacus - c\'est dans ces cas-là que l\'on s\'aperçoit qu\'avoir un matériau original de qualité aide beaucoup ','https://fr.web.img6.acsta.net/pictures/19/03/21/17/05/1927893.jpg',''),
      new Serie('Peaky Blinders', '2013',5, 'En 1919, à Birmingham, soldats, révolutionnaires politiques et criminels combattent pour se faire une place dans le paysage industriel de l\'après-Guerre. Le Parlement s\'attend à une violente révolte, et Winston Churchill mobilise des forces spéciales pour contenir les menaces. La famille Shelby compte parmi les membres les plus redoutables. Surnommés les "Peaky Blinders" par rapport à leur utilisation de lames de rasoir cachées dans leurs casquettes, ils tirent principalement leur argent de paris et de vol. Tommy Shelby, le plus dangereux de tous, va devoir faire face à l\'arrivée de Campbell, un impitoyable chef de la police qui a pour mission de nettoyer la ville. Ne doit-il pas se méfier tout autant de la ravissante Grace Burgess ? Fraîchement installée dans le voisinage, celle-ci semble cacher un mystérieux passé et un dangereux secret. La série soigne chaque plan, travaille à l\'excès la lumière, multiplie les cadrages originaux, sublime ses personnages aux gueules théâtrales, s\'imposant à chaque nouvelle scène comme une des œuvres télévisuelles les plus formellement remarquables de ces dernières années. ','https://images-na.ssl-images-amazon.com/images/I/817GCdFKJiL.jpg',''),
      new Serie('Chernobyl', '2019',1, '26 avril 1986, l\'histoire vraie de la pire catastrophe causée par l\'homme et de ceux qui ont sacrifié leur vie pour sauver l\'Europe du drame. L\'explosion d\'un réacteur à la centrale nucléaire de Chernobyl, en Ukraine, a de terribles conséquences aussi bien sur le personnel de l\'usine, que sur les équipes de secours, la population et l\'environnement.En mêlant l’intime à la grande histoire, Chernobyl livre un récit aussi didactique que poignant, aussi instructif qu’haletant.','https://fr.web.img6.acsta.net/pictures/21/02/11/14/15/4218723.jpg',''),
      new Serie('Breaking Bad', '2008',5, 'Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique. Pour subvenir aux besoins de Skyler, sa femme enceinte, et de Walt Junior, son fils handicapé, il est obligé de travailler doublement. Son quotidien déjà morose devient carrément noir lorsqu\'il apprend qu\'il est atteint d\'un incurable cancer des poumons. Les médecins ne lui donnent pas plus de deux ans à vivre. Pour réunir rapidement beaucoup d\'argent afin de mettre sa famille à l\'abri, Walter ne voit plus qu\'une solution : mettre ses connaissances en chimie à profit pour fabriquer et vendre du crystal meth, une drogue de synthèse qui rapporte beaucoup. Il propose à Jesse, un de ses anciens élèves devenu un petit dealer de seconde zone, de faire équipe avec lui. Le duo improvisé met en place un labo itinérant dans un vieux camping-car. Cette association inattendue va les entraîner dans une série de péripéties tant comiques que pathétiques. Le jeu des acteurs est le meilleur que vous trouverez à la télévision. Le scénario et l\'intrigue sont à la hauteur de X-Files. Non, Breaking Bad n\'est pas pour tout le monde, mais si vous avez le coeur bien accroché, AMC a les tripes. ','https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg',''),
      new Serie('True Detective', '2014',3, 'A chaque saison, son histoire. True Detective nous embarque dans des récits policiers mêlant mysticisme, réflexions philosophiques et personnages torturés. Les performances de Woody Harrelson et Matthew McConaughey figurent parmi les meilleures vues cette saison à la télévision, voire toutes années confondues. ','https://fr.web.img4.acsta.net/c_210_280/pictures/21/02/11/13/41/4959064.jpg', '')
    ];

    this.series = new BehaviorSubject<Array<Serie>>(seriesToPush)
  }

  addSerie(serieToAdd: Serie) {
    return new Promise<void>(
      (res, rej) => {
        setTimeout(() => {
          const series = this.series.getValue();
          series.push(serieToAdd);
          this.series.next(series);
          res();
        }, 500)
      }
    )
  }

  editSerie(editedSerie: Serie): Promise<void> {
    return new Promise<void>(
      (res, rej) => {
        setTimeout(() => {

          const series = this.series.getValue();

          for (let [index, product] of series.entries()) {
            if (product.id === editedSerie.id) {
              series[index] = editedSerie;
              this.series.next(series);
              res();
              break;
            }
          }
        }, 500)
      }
    );
  }


  getSerieById(serieId: number): Promise<Serie>{
    return new Promise<Serie>(
      (res, rej) => {
        for(let serie of this.series.getValue()) {
          if (serie.id === serieId) {
            res(serie);
            break;
          }
        }
      }
    )
  }

  deleteSerie(serieIdToDelete: number) {
    const series =this.series.getValue();
    for (let [index, serie] of series.entries()) {
      if (serie.id === serieIdToDelete) {
        series.splice(index, 1);
        this.series.next(series);
        break;
      }
    }


  }

}
