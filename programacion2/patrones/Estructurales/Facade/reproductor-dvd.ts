class ReproductorDVD {
  encender(): void {
    console.log("Reproductor de DVD encendido");
  }

  reproducir(pelicula: string): void {
    console.log(`Reproduciendo "${pelicula}"`);
  }
}

export { ReproductorDVD };