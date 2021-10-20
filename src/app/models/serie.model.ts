

export class Serie {

  private _id: number;
  private _title: string;
  private _release: string;
  private _season: number;
  private _review: string;
  private _picture: string;
  private _commentmodel: string;

  static serielength = 1;

  constructor(title: string, release: string, season: number, review: string, picture: string, commentmodel: string) {
    this._id = Serie.serielength;
    this._title = title;
    this._release = release;
    this._season = season;
    this._review = review;
    this._picture = picture;
    this._commentmodel = commentmodel; // Manque à integrer les commentaires dans la class.

    Serie.serielength++;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get release(): string {
    return this._release;
  }

  set release(value: string) {
    this._release = value;
  }

  get season(): number {
    return this._season;
  }

  set season(value: number) {
    this._season = value;
  }

  get review(): string {
    return this._review;
  }

  set review(value: string) {
    this._review = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }

  get commentmodel(): string {
    return this._commentmodel;
  }

  set commentmodel(value: string) {
    this._commentmodel = value;
  }

}
