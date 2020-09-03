export class Planet {

public name: string;
public moons: number;
public distanceFromSun: number;

constructor (name: string, moons: number, distanceFromSun: number){
this.name = name;
this.moons = moons;
this.distanceFromSun = distanceFromSun;
}
}
