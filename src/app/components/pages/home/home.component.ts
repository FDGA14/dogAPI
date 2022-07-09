import { Component, OnInit } from '@angular/core';
import { DogService } from '../../../shared/services/dog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dogsList: any;
  public dogs: any;
  public pics: any;
  public modal: any;

  constructor(private dogService: DogService) { }
 
  ngOnInit() {
    this.getDogsList();
  }

  getDogsList(): void {
    this.dogService.getDogsList()
        .subscribe(response => {
        this.dogsList = response.message;
        console.log(this.dogsList);
        let dataValues = [];
        for(let dog in this.dogsList) {
          dataValues.push(dog);
       }
       //console.log(dataValues);
       this.dogs = dataValues;
       this.getBreedsPic(this.dogs);
       });
  }

  getBreedsPic(dogs: any): void {
    //console.log(dogs)
    const dataV : string[] = [];
    for(let dog in this.dogsList) {
      //console.log(dog);
      this.dogService.getBreedsPic(dog)
        .subscribe(response => {
          //console.log(response.message);
          dataV.push(response.message);
      });
   }
   console.log(dataV);
   this.pics = dataV
  }

  dogDetails(dog: any, img: any){
    this.dogService.dogDetails(dog, img);
  }

}