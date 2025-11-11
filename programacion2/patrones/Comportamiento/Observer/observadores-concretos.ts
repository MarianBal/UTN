import { IObservador } from "./observador-interface";

class PantallaApp implements IObservador {
  actualizar(temp: number): void {
    console.log(`App: Temperatura ${temp}°C`);
  }
}

class PantallaLED implements IObservador {
  actualizar(temp: number): void {
    console.log(`Pantalla LED: ${temp}°C`);
  }
}

export { PantallaApp, PantallaLED };