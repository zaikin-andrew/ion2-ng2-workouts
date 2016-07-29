export default class Workout {
  type: string;
  note: string;
  title: string;
  _id: string;
  constructor(title = '', note = '', type = 'Jugging'){
    this.title = title;
    this.note = note;
    this.type = type;
  }
}
