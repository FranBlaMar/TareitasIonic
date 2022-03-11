import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
 
export interface Tarea {
  id?: string;
  titulo: string;
  texto: string;
  duracion: string;
  realizado: boolean;
}
 
@Injectable({
  providedIn: 'root'
})
export class TareaService {
 
  constructor(private firestore: Firestore) { }
 
  obtenerTareas(): Observable<Tarea[]> {
    const url = collection(this.firestore, 'tarea');
    return collectionData(url, { idField: 'id'}) as Observable<Tarea[]>;
  }
 
  obtenerTareaPorId(id): Observable<Tarea> {
    const url = doc(this.firestore, `tarea/${id}`);
    return docData(url, { idField: 'id' }) as Observable<Tarea>;
  }
 
  anadirTarea(note: Tarea) {
    const url = collection(this.firestore, 'tarea');
    return addDoc(url, note);
  }
 
  borrarTarea(tarea: Tarea) {
    const url = doc(this.firestore, `tarea/${tarea.id}`);
    return deleteDoc(url);
  }
 
  editarTarea(tarea: Tarea) {
    const url = doc(this.firestore, `tarea/${tarea.id}`);
    return updateDoc(url, { titulo: tarea.titulo, texto: tarea.texto, realizado: tarea.realizado, duracion: tarea.duracion });
  }
}