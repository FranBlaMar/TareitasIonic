import { Component, OnInit } from '@angular/core';
import { Tarea, TareaService } from '../services/tarea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  carga: boolean = false;
  tareita: Tarea; 
  constructor( public alertCtrl : AlertController, private router: ActivatedRoute,private route: Router, private servicio: TareaService) {
    
  }
  ngOnInit(){
    this.servicio.obtenerTareaPorId(this.router.snapshot.params['id'])
    .subscribe({
      next: res =>{
        this.tareita=res;
        this.carga = true;
      },
      error: resp=>{
        console.log(resp);
      }
    })
  }

  cambiarTareaNoCompletada(tarea: Tarea){
    tarea.realizado = false;
    this.servicio.editarTarea(tarea);
  }

  cambiarTareaCompletada(tarea: Tarea){
    tarea.realizado = true;
    this.servicio.editarTarea(tarea);
  }

  async borrarTarea(tarea: Tarea){
    let alert = this.alertCtrl.create({

      message: '¿Estás seguro de que deseas eliminar esta tareita?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.servicio.borrarTarea(tarea);
            this.route.navigateByUrl("/tabs/tab2");
           }
        }
      ]
    });
    (await alert).present();

    
  }

}
