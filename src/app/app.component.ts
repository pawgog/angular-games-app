import { Component, ViewChild, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { IonRangeSliderComponent } from "ng2-ion-range-slider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('advancedSliderElement') advancedSliderElement: IonRangeSliderComponent;

      min: number = 0.99;
      max: number = 49.99;
      step: number = 0.01;
      from: number = 18.31;
      prefix: string = '$';
      countGames: number = 110760;
      showHideFilm: boolean;
      showHideFilm2: boolean;
      showHideFilm3: boolean;
      showHideFilm4: boolean;
      showHideFilm5: boolean;

  simpleSlider = {name: "Simple Slider", onUpdate: -1};

  update(slider, event) {
    slider.onUpdate = event;
  }


  @Output() counterChange :  EventEmitter<number>;
    constructor(private renderer: Renderer2){ 
      this.renderer.addClass(document.body, 'bodyBackground'); 
      this.counterChange = new EventEmitter(); 
      this.showHideFilm = false;
      this.showHideFilm2 = false;
      this.showHideFilm3 = false;
      this.showHideFilm4 = false;
      this.showHideFilm5 = false;  
    }
     
  @Input() 
    get counter(){
      return this.countGames; 
    }
        addGames(priceValue) {
          if(priceValue >= 18.31) {
            this.countGames = this.countGames+3; 
          }
          else if(priceValue < 18.31 && priceValue >= 7.67) {
            this.countGames = this.countGames+2; 
          }
          else {
            this.countGames = this.countGames+1; 
          }
          this.counterChange.emit(this.countGames);
        }

    firstFilm(){
      this.showHideFilm = !this.showHideFilm;
      this.showHideFilm2 = false;
      this.showHideFilm3 = false;
      this.showHideFilm4 = false;
      this.showHideFilm5 = false; 
    }
    secondFilm(){
      this.showHideFilm2 = !this.showHideFilm2;
      this.showHideFilm = false;
      this.showHideFilm3 = false;
      this.showHideFilm4 = false;
      this.showHideFilm5 = false;
    }
    thirdFilm(){
      this.showHideFilm3 = !this.showHideFilm3;
      this.showHideFilm = false;
      this.showHideFilm2 = false;
      this.showHideFilm4 = false;
      this.showHideFilm5 = false;
    }
    fourthFilm(){
      this.showHideFilm4 = !this.showHideFilm4;
      this.showHideFilm = false;
      this.showHideFilm2 = false;
      this.showHideFilm3 = false;
      this.showHideFilm5 = false;
    }
    fiveFilm(){
      this.showHideFilm5 = !this.showHideFilm5;
      this.showHideFilm = false;
      this.showHideFilm2 = false;
      this.showHideFilm3 = false;
      this.showHideFilm4 = false;
    }
}
