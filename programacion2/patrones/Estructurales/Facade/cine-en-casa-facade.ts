
import { SistemaSonido } from "./ajustar-sonido";
import { Proyector } from "./proyector";
import { ReproductorDVD } from "./reproductor-dvd";


class CineEnCasaFacade {
  private sonido: SistemaSonido;
  private proyector: Proyector;
  private dvd: ReproductorDVD;

  constructor() {
    this.sonido = new SistemaSonido();
    this.proyector = new Proyector();
    this.dvd = new ReproductorDVD();
  }

  verPelicula(pelicula: string): void {
    console.log("Preparando sistema para ver la película...");
    this.proyector.encender();
    this.proyector.modoCine();
    this.sonido.encender();
    this.sonido.ajustarVolumen(7);
    this.dvd.encender();
    this.dvd.reproducir(pelicula);
    console.log("¡Disfruta tu película!");
  }

  apagarTodo(): void {
    console.log("Apagando todos los sistemas...");
  }
}

export { CineEnCasaFacade };