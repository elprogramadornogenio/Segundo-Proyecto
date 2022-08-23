import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent {

  constructor(private gifsService: GifsService) { }

  get historial (){
    return this.gifsService.historial;
  }

  buscar(busqueda: string){
    this.gifsService.buscarGifs(busqueda);
  }

}
