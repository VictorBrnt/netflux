export class Commentary {

  private _id: number;
  private _author: string;
  private _date: string
  private _commentary: string;

  constructor(id:number, author: string, commentary: string, date: string) {

    this._id = id;
    this._author = author;
    this._date = date;
    this._commentary = commentary;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get commentary(): string {
    return this._commentary;
  }

  set commentary(value: string) {
    this._commentary = value;
  }
}
