import { Component ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LotsService } from 'src/app/services/lots.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loteadd',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './loteadd.component.html',
  styleUrls: ['./loteadd.component.sass']
})
export class LoteaddComponent {
  _lotService=inject(LotsService);
  _router=inject(Router);

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    latitude: new FormControl('', Validators.required),
    longitude: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    latitude1: new FormControl('', Validators.required),
    longitude1: new FormControl('', Validators.required),
    latitude2: new FormControl('', Validators.required),
    longitude2: new FormControl('', Validators.required),
    latitude3: new FormControl('', Validators.required),
    longitude3: new FormControl('', Validators.required),
    latitude4: new FormControl('', Validators.required),
    longitude4: new FormControl('', Validators.required),

  });
}
