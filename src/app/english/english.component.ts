import { Component } from '@angular/core';

@Component({
  selector: 'english-root',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent {
  title = 'BMICalculatorTwo';



  public feet: number=0;
  public height: number=0;
  public inches: number=0;
 
  public weight: number=0;
  centimeters: number = 0;
  kilograms: number = 0;
  bmi: number = 0;

  public result : any = "";

  constructor() { }

  ngOnInit(): void {
  }


  

 
  


 

  totalResults():void{


    this.height = (this.feet * 12) + this.inches;

  
   Math.round(this.result = 703 * (this.weight /(this.height * this.height)))/100;
 
   this.bmi = (this.kilograms/this.centimeters/this.centimeters) * 10000;

 
}
}
