import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  selectedCrisis: Crisis;

  crises$:Observable< Crisis[]>;
  selectedId: number;
  constructor(private crisisService: CrisisService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.crisisService.getCrises();
      })
    );
  
  }

  onSelect(crises: Crisis): void {
    this.selectedCrisis = crises;
  }

//   getcrises(): void {
//     this.heroService.getcrises()
//         .subscribe(crises => this.crises = crises);
//   }
}