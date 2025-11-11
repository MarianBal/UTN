import { EmpleadoAbstracto } from "./empleado-abstracto";

class Gerente extends EmpleadoAbstracto {

    public constructor(
    pNombre: string,
    pApellido: string,
    pLegajo: number,
    pSuperior: EmpleadoAbstracto | undefined
  ) {
    super(pNombre, pApellido, pLegajo, pSuperior);
  }

  public Tope(): number {
    return 2000;
  }

  public autorizar(pMonto: number): void {
    if (this.Tope() > pMonto)
      console.log("El gerente " + this.presentarse() + " autorizó la compra de " + pMonto);

    else if (this.superior != undefined) this.superior.autorizar(pMonto);
  }
}

export { Gerente };
