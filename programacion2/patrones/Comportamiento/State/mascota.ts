import { IEstado } from "./estado-interface";

class Mascota {
  private estado: IEstado | null = null;

  public setEstado(estado: IEstado): void {
    this.estado = estado;
  }

  public comer(): void {
    this.estado?.comer();
  }

  public jugar(): void {
    this.estado?.jugar();
  }
}

export { Mascota };