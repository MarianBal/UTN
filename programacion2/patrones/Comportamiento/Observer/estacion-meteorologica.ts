import { IObservado } from "./observado-interface";
import { IObservador } from './observador-interface';

class EstacionMeteorologica implements IObservado {
  private observadores: Array<IObservador> = [];
  private temperatura: number = 0;

  agregarObservador(o: IObservador): void {
    this.observadores.push(o);
  }

  eliminarObservador(o: IObservador): void {
    this.observadores = this.observadores.filter(obs => obs !== o);
  }

  setTemperatura(temp: number): void {
    console.log(`Nueva temperatura: ${temp}°C`);
    this.temperatura = temp;
    this.notificarObservadores();
  }

  notificarObservadores(): void {
    this.observadores.forEach(obs => obs.actualizar(this.temperatura));
  }
}

export { EstacionMeteorologica };
