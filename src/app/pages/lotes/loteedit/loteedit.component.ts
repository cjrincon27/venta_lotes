import { Component ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
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
  _lotService=inject(LotsService);
  _router=inject(Router);
  
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

}
