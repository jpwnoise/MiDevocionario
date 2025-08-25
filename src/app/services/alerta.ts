import { Injectable, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Alerta as AlertaComponent } from '../alerta/alerta';

@Injectable({
  providedIn: 'root'
})
export class Alerta {
  constructor ( private overlay: Overlay, private injector: Injector ) {

  }

   mostrar(mensaje: string, tipo: 'exito' | 'error' | 'info' | 'warning' = 'info') {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        .global()
        .top('20px')
        .right('20px'),
    })

    const alertaPortal = new ComponentPortal(AlertaComponent, null, this.injector);
    const compRef = overlayRef.attach(alertaPortal);

    compRef.instance.mensaje = mensaje;
    compRef.instance.tipo = tipo;

    // Auto-cerrar en 3s
    setTimeout(() => overlayRef.dispose(), 3000);
  
  }

    
  
}
