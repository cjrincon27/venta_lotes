import { Component ,inject} from '@angular/core';
import { CommonModule ,Location} from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LotsService } from 'src/app/services/lots.service';
import {Lot} from 'src/app/commons/interfaces/lot.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loteedit',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './loteedit.component.html',
  styleUrls: ['./loteedit.component.sass']
})
export class LoteeditComponent {
  _lotService = inject(LotsService);
  _location = inject(Location);
  _router = inject(Router);
  lot!:Lot;

  form = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    latitude: new FormControl(),
    longitude: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    latitude1: new FormControl(),
    longitude1: new FormControl(),
    latitude2: new FormControl(),
    longitude2: new FormControl(),
    latitude3: new FormControl(),
    longitude3: new FormControl(),
    latitude4: new FormControl(),
    longitude4: new FormControl(),
  });
  ngOnInit(){
    this.lot=(this._location.getState() as any).lot ; 
    this.form.patchValue(this.lot as any);
    
  }
 

  updatelot() {
    console.log("hola");
     
   console.log( this.lot.id);
   
    this._lotService.updateLot({id: this.lot.id,...this.form.getRawValue()} as Lot);
    this._router.navigate(['lotes']);
  }
  
}