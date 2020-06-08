import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() { 
    this.correo = {
      titulo: "Título del correo",
      cuerpo: 'Cuerpo del Email, Cuerpo del Email, Cuerpo del Email',
      emisor: 'correoEmisor@openwebinar.inv',
      destinatario: 'correoReceptor@openwebinar.inv'
    }

  }

  ngOnInit() {
  }

}
