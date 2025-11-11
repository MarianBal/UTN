import { EmpleadoAbstracto } from "./empleado-abstracto";

class Jefe extends EmpleadoAbstracto {

  public constructor(
    pNombre: string,
    pApellido: string,
    pLegajo: number,
    pSuperior: EmpleadoAbstracto | undefined
  ) {
    super(pNombre, pApellido, pLegajo, pSuperior);
  }

  public Tope(): number {
    return 250;
  }

  public autorizar(pMonto: number): void {
    if (pMonto < this.Tope())
      console.log("El jefe " + this.presentarse() + " autorizó la compra de " + pMonto);

    else {
      if (this.superior != undefined) {
        this.superior.autorizar(pMonto);
      }
    }
  }
}

export { Jefe };
