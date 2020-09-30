export class Event{

public name:string;
public description:string;
public image_url:string;
public dateStarted:string;

constructor(name:string,date:string,descript:string,image:string)
{
  this.name=name;
  this.dateStarted=date;
  this.description=descript;
  this.image_url=image;
}
}












