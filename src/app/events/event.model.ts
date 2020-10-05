export class Event{

  public id: number;
public name: string;
public description: string;
public imageUrl: string;
public dateStarted: string;
public isVisible: boolean;

constructor(name: string , date: string , descript: string  , image: string, id: number = 0, visible: boolean = true)
{
  this.name = name;
  this.dateStarted = date;
  this.description = descript;
  this.imageUrl = image;
  this.id = id;
  this.isVisible = visible;
}
}












