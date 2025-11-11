import { IObservador } from "./observador-interface";

interface IObservado {
  agregarObservador(o: IObservador): void;
  eliminarObservador(o: IObservador): void;
  notificarObservadores(): void;
}

export { IObservado };