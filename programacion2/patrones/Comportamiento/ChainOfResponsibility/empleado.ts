import { EmpleadoAbstracto } from "./empleado-abstracto";

class Empleado extends EmpleadoAbstracto {

    public constructor(
    pNombre: string,
    pApellido: string,
    pLegajo: number,
    pSuperior: EmpleadoAbstracto | undefined
  ) {
    super(pNombre, pApellido, pLegajo, pSuperior);
  }
  
  public Tope(): number {
    return 50;
  }

  public autorizar(pMonto: number): void {
    if (this.Tope() > pMonto)
      console.log(
        "El empleado " + this.presentarse() + " autorizó la compra de " + pMonto
      );
    else if (this.superior) {
      console.log(
        this.presentarse() + " no puede aprobar, se lo pide al superior "
      );
      this.superior.autorizar(pMonto);
    }
  }
}

export { Empleado };
