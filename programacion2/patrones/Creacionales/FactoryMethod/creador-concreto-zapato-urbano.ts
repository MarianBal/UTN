import { CreadorAbstracto } from './creador-abstracto';
import { ProductoAbstracto } from './producto-abstracto';
import { ZapatoUrbanoConcreto } from './producto-concreto-zapato-urbano';

class CreadorConcretoZapatoUrbano extends CreadorAbstracto {
  CreateZapato(): ProductoAbstracto {
    const miZapatoConcreto: ZapatoUrbanoConcreto = new ZapatoUrbanoConcreto(
      36,
      'zapatillas',
      'Cuero ecologico',
      'negro',
      'Adidas'
    );

    return miZapatoConcreto;
  }
}

export { CreadorConcretoZapatoUrbano };
