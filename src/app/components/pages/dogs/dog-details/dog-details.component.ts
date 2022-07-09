import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DogService } from '../../../../shared/services/dog.service';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.scss']
})
export class DogDetailsComponent implements OnInit {

  constructor(private location: Location, private dogService: DogService) { }

  public dog: any;
  public img: any;

  ngOnInit(): void {
    this.dog = this.dogService.dog;
    this.img = this.dogService.img;
  }


  goBack(){
    this.location.back();
  }

}
