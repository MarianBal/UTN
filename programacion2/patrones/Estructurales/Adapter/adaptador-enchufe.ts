import { EnchufeEuropeo } from "./enchufe-europeo";
import { IEnchufeAmericano } from "./enchufe-americano-interface";

class AdaptadorEuropeoAAmericano implements IEnchufeAmericano {
  private enchufeEuropeo: EnchufeEuropeo;

  constructor(enchufeEuropeo: EnchufeEuropeo) {
    this.enchufeEuropeo = enchufeEuropeo;
  }

  conectarEnUSA(): void {
    console.log("Usando adaptador para convertir de Europa a USA...");
    this.enchufeEuropeo.conectarEnEuropa();
  }
}

export { AdaptadorEuropeoAAmericano };