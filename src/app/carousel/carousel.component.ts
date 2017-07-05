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
    new Shot('Bonkaz', 'Bonkaz performing at his headline show', '../../assets/bonkaz.jpg'),
    new Shot('Bonkaz', 'Bonkaz performing at his headline show', '../../assets/aj-tracey.jpg'),
    new Shot('Bonkaz', 'Bonkaz performing at his headline show', '../../assets/jevon.jpg')
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
