import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea, TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tareita:Tarea = {
    titulo: '',
    texto: '',
    duracion: '',
    realizado: false
  }
  constructor(private servicio: TareaService, private router: Router) {}

  anadirTarea(){
    this.servicio.anadirTarea(this.tareita);
    this.router.navigateByUrl('tabs/tab2');
  }
}
