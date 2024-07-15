import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { InformationsComponent } from "./informations/informations.component";
import { VideoInfosComponent } from "./video-infos/video-infos.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { AvantagesComponent } from "./avantages/avantages.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, InformationsComponent, VideoInfosComponent, CarouselComponent, AvantagesComponent, TestimonialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'landingPage';
}
