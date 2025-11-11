import { IComponente } from './componente-interface';

class File implements IComponente {
  private size: number;

  constructor(size: number) {
    this.size = size;
  }

  delete(): void {
    console.log("Archivo eliminado");
  }

  getSize(): number {
    return this.size;
  }
}

export { File };
