import { Component, signal } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = "Bender"
  count = signal(0);
  value = true;
  imgUrl = "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_hf7nb732th2tvd4ghacvc40u76/-S265-FWEBP"
  joke = '';

  lista = ["Bender", "Fry", "lila"]

  constructor(private service: JokeService) {
    this.service.getTest().subscribe(
      {
        next: data => this.joke = data.value,
        error: err => console.log(err),
        complete: () => {
          console.log("finalizado"); 
        }
      }
    )
  }

  test() {
    this.count.update(value => value + 1);
  }
}
