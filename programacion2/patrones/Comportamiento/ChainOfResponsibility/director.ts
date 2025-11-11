import { EmpleadoAbstracto } from "./empleado-abstracto";

class Director extends EmpleadoAbstracto {

  public constructor(
    pNombre: string,
    pApellido: string,
    pLegajo: number,
    pSuperior: EmpleadoAbstracto | undefined
  ) {
    super(pNombre, pApellido, pLegajo, pSuperior);
  }
  
  public Tope(): number {
    return 10000000;
  }

  public autorizar(pMonto: number): void {
    if (this.Tope() > pMonto) {
      console.log(
        "El director " + this.presentarse() + " aprobó el monto de " + pMonto
      );
    }
  }
}

export { Director };
