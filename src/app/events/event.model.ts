export class Event{

public id: number;
public name: string;
public description: string;
public imageUrl: string;
public dateStarted: string;
public isVisible: boolean;

constructor(name: string = 'Name',
            date: string = '20.20.2020',
            descript: string = 'desc' ,
            image: string = 'img' ,
            id: number = 0,
            visible: boolean = true)
{
  this.name = name;
  this.dateStarted = date;
  this.description = descript;
  this.imageUrl = image;
  this.id = id;
  this.isVisible = visible;
}
}












