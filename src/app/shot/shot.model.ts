export class Shot {
  public title: string;
  public description: string;
  public src: string;

  constructor (title: string, desc: string, src: string) {
    this.title = title;
    this.description = desc;
    this.src =  src;
  }
}
