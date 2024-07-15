import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { InformationsComponent } from "../informations/informations.component";
import { VideoInfosComponent } from "../video-infos/video-infos.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { AvantagesComponent } from "../avantages/avantages.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, InformationsComponent, VideoInfosComponent, CarouselComponent, AvantagesComponent, TestimonialsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
