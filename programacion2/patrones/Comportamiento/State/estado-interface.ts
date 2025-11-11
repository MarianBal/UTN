import { Mascota } from './mascota';

interface IEstado {
  setMascota(mascota: Mascota): void;
  comer(): void;
  jugar(): void;
}

export { IEstado };