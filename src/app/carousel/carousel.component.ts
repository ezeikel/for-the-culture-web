import { Component, AfterViewInit } from '@angular/core';

import * as $ from 'jquery';
import 'slick-carousel/slick/slick';
import { Shot } from '../shot/shot.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {
  shots: Shot[] = [
    new Shot('Bonkaz Headline Show @ Camden Assembly', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '../../assets/bonkaz-headline-show-camden-assembley.jpg'),
    new Shot('Cadet X Bogijko', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '../../assets/cadet-bogijko.jpg'),
    new Shot('Michael Dapaah: #SWIL', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '../../assets/micheal-dapaah-studio.jpg')
  ];
  constructor() { }

  ngAfterViewInit() {
    $('.hero-carousel').slick({
      autoplay: true,
      dots: false,
      fade: true,
      arrows: false
    });
  }

}
