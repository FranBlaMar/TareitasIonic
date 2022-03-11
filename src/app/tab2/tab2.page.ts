import { ChangeDetectorRef, Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Tarea, TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tareas: Tarea[] = [];
  constructor(private servicio: TareaService,  private cd: ChangeDetectorRef) {
    
  }
  ngOnInit(){
    this.servicio.obtenerTareas().subscribe(res => {
      this.tareas = res;
      this.cd.detectChanges();
    });
  }


}
