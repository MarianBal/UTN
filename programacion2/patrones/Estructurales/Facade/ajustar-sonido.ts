class SistemaSonido {
  encender(): void {
    console.log("Sistema de sonido encendido");
  }

  ajustarVolumen(nivel: number): void {
    console.log(`Volumen ajustado a ${nivel}`);
  }
}

export { SistemaSonido };