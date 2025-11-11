import { Mascota } from './mascota';
import { IEstado } from './estado-interface';

class Hambrienta implements IEstado {

  private mascota: Mascota;

  constructor(mascota: Mascota) {
    this.mascota = mascota;
  }

  setMascota(mascota: Mascota): void {
    this.mascota = mascota;
  }

  comer(): void {
    console.log("La mascota comió y ahora está contenta");
    this.mascota.setEstado(new Contenta(this.mascota));
  }

  jugar(): void {
    console.log("No quiere jugar, tiene hambre");
  }
}

class Contenta implements IEstado {
  private mascota: Mascota;

  setMascota(mascota: Mascota): void {
    this.mascota = mascota;
  }

  constructor(mascota: Mascota) {
    this.mascota = mascota;
  }

  comer(): void {
    console.log("Comió un poco más, está muy feliz");
  }

  jugar(): void {
    console.log("Jugó y se cansó un poco, ahora está aburrida");
    this.mascota.setEstado(new Aburrida(this.mascota));
  }
}

class Aburrida implements IEstado {
  private mascota: Mascota;

  setMascota(mascota: Mascota): void {
    this.mascota = mascota;
  }

  constructor(mascota: Mascota) {
    this.mascota = mascota;
  }

  comer(): void {
    console.log("Comió algo y se puso contenta otra vez");
    this.mascota.setEstado(new Contenta(this.mascota));
  }

  jugar(): void {
    console.log("Jugó y se puso contenta");
    this.mascota.setEstado(new Contenta(this.mascota));
  }
}

export { Hambrienta, Contenta, Aburrida };