import { ProductoAbstracto } from "./producto-abstracto";

abstract class CreadorAbstracto {
    abstract CreateZapato() : ProductoAbstracto;  
}

export { CreadorAbstracto };