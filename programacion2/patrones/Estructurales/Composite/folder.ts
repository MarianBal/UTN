import { IComponente } from './componente-interface';

export class Folder implements IComponente {
  private elementos: Array<IComponente> = [];

  add(componente: IComponente): void {
    this.elementos.push(componente);
  }

  remove(componente: IComponente): void {
    this.elementos = this.elementos.filter(elem => elem !== componente);
  }

  delete(): void {
    console.log("Eliminando carpeta y sus elementos...");
    this.elementos.forEach(elem => elem.delete());
  }

  getSize(): number {
    return this.elementos.reduce((total, elem) => total + elem.getSize(), 0);
  }
}
