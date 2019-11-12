import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  selectedHero: Hero;

  heroes$:Observable< Hero[]>;
  selectedId: number;
  constructor(private heroService: HeroService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.heroes$=this.route.paramMap.pipe(
      switchMap(params=>{
        this.selectedId=+params.get('id');
        return this.heroService.getHeroes()
      })
    )
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

//   getHeroes(): void {
//     this.heroService.getHeroes()
//         .subscribe(heroes => this.heroes = heroes);
//   }
}