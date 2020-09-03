export class Planet {

public name: string;
public moons: number;
public distanceFromSun: number;
public Url: string;

constructor (name: string, moons: number, distanceFromSun: number, Url: string){
this.name = name;
this.moons = moons;
this.distanceFromSun = distanceFromSun;
this.Url = Url;
}
}
