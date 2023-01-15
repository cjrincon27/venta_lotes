import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotsService } from 'src/app/services/lots.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';
import { Lot } from 'src/app/commons/interfaces/lot.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lotelist',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lotelist.component.html',
  styleUrls: ['./lotelist.component.sass']
})
export class LotelistComponent implements OnInit {
  _lotService = inject(LotsService);
  lots$!: Observable<Lot[]>;
  searcher = new FormControl('');
  _router = inject(Router);

  ngOnInit() {
    //this._lotService.getLot().subscribe((res) => console.log(res));
    this.lots$ = this._lotService.getLot();
    this.searcher.valueChanges.pipe(debounceTime(1000)).subscribe(search => {
        console.log(search);

        if (search) {
          this.lots$ = this._lotService.getLot(search);
        } else {
          this.lots$ = this._lotService.getLot();
        }
      });

  }
  editlote(lot: Lot) {
    this._router.navigateByUrl('lotes/edit',{state:{lot}});
  };
  deletelote(lot: Lot) {
    if (confirm(`Delete lot "${lot.name}" ?`)) {
      //this._lotService.deletelote(lot.id);
    }
  };
}
