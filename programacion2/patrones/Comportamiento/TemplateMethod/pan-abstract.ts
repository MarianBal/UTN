abstract class PanAbstracto {

  public hacerPan(): void {
    this.prepararIngredientes();
    this.amasar();
    this.hornear();
    this.agregarExtras();
    console.log("El pan está listo!\n");
  }

  protected abstract prepararIngredientes(): void;
  protected abstract amasar(): void;
  protected abstract hornear(): void;

  protected agregarExtras(): void {
    console.log("No se agregan extras.");
  }
}

export { PanAbstracto };