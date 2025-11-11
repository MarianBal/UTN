import {
  Presidente,
  CreadorConcretoZapatoUrbano,
  ClienteAbstractFactory,
  ModernFurnitureFactory,
  VictorianFurnitureFactory,
  Empleado,
  Jefe,
  Gerente,
  Director,
  DirectorBuilder,
  DepartamentoBuilder,
  OficinaBuilder,
  Folder,
  File,
  CafeSimple,
  ConLeche,
  ConCrema,
  ConChocolate,
  CineEnCasaFacade,
  EstacionMeteorologica,
   Documento, Compresion, Encriptacion, Cliente,
  PantallaApp,
  PantallaLED,
  PanBlanco,
  PanIntegral,
  Mascota,
  Hambrienta,
  Aburrida,
  Contenta,
  AdaptadorEuropeoAAmericano, EnchufeEuropeo
} from "./patrones";

/*
Patrones Creacionales
*/

//Singleton
console.log('-------Singleton-------')
Presidente.nuevoPresidente("Mariana", "Bálsamo", "Hago lo que puedo");
console.log(Presidente.presentarse());
console.log('-----------------------')

//Factory Method
console.log('-------Factory Method-------')
const crearZapas = new CreadorConcretoZapatoUrbano();
crearZapas.CreateZapato();
console.log('----------------------------')

//Abstract Factory
console.log('-------Abstract Factory -------')
const modernFactory = new ModernFurnitureFactory();
const victorianFactory = new VictorianFurnitureFactory();


console.log("---- Muebles Modernos ----");
const modernClient = new ClienteAbstractFactory(modernFactory);
modernClient.describeFurniture();

console.log("\n---- Muebles Victorianos ----");
const victorianClient = new ClienteAbstractFactory(victorianFactory);
victorianClient.describeFurniture();
console.log('-------------------------------')

//Builder
console.log('------- Builder -------')
const constructor = new DirectorBuilder();
const builder = new OficinaBuilder();
const oficina = constructor.construirUnidad(builder);
console.log("Puertas:", oficina.getPuertas().length);
console.log("Ventanas:", oficina.getVentanas().length);
console.log("Baños:", oficina.getBanios().length);
console.log('-----------------------')

/*
Patrones Estructurales
*/

// Adapter
console.log('------- Adapter -------')
const enchufeEuropeo = new EnchufeEuropeo();
const adaptador = new AdaptadorEuropeoAAmericano(enchufeEuropeo);

adaptador.conectarEnUSA();
console.log('--------------------------')

// Composite
console.log('------- Composite -------')
const root = new Folder();
const docs = new Folder();
const images = new Folder();

const file1 = new File(10);
const file2 = new File(20);
const img1 = new File(5);

docs.add(file1);
docs.add(file2);
images.add(img1);

root.add(docs);
root.add(images);

console.log("Tamaño total:", root.getSize());
console.log('--------------------------')

//Decorator
console.log('------- Decorator -------')
const miCafe = new ConChocolate(new ConCrema(new ConLeche(new CafeSimple())));
console.log(miCafe.descripcion(), "→ $", miCafe.costo());
console.log('-------------------------')

//Facade
console.log('------- Facade -------')
const cine = new CineEnCasaFacade();
cine.verPelicula("Inception");
console.log('----------------------')

/*
Patrones Comportamiento
*/

//Strategy
console.log('------- Strategy -------')
const comprimir: Compresion = new Compresion();
const encriptar: Encriptacion = new Encriptacion();

const documento: Documento = new Documento('unArchivo', 'contenido del Archivo');

console.log('documento', documento);

const objCliente: Cliente = new Cliente(encriptar);
objCliente.procesarDocumento(documento, encriptar);

const otroCliente: Cliente = new Cliente(comprimir);
otroCliente.procesarDocumento(documento, comprimir);
console.log('------------------------')

//Observer
console.log('------- Observer -------')
const estacion = new EstacionMeteorologica();
const app = new PantallaApp();
const led = new PantallaLED();

estacion.agregarObservador(app);
estacion.agregarObservador(led);

estacion.setTemperatura(22);
console.log('------------------------')

//Chain of resposibility
console.log('------- Chain of Responsibility -------')
const director = new Director("Giselle", "Tello de Meneses", 798543, undefined);
const gerente = new Gerente("Micaela", "Saez", 635411, director);
const jefe = new Jefe("Luz", "Rubini", 558743, gerente);
const empleado = new Empleado("Mariana", "Bálsamo", 684456, jefe);

empleado.autorizar(50000);

console.log('---------------------------------------')

//Template Method
console.log('------- Template Method -------')
const panBlanco = new PanBlanco();
panBlanco.hacerPan();

const panIntegral = new PanIntegral();
panIntegral.hacerPan();

console.log('-------------------------------')

// State
console.log('------- State -------')
const tamagotchi = new Mascota();
tamagotchi.setEstado(new Hambrienta(tamagotchi));
tamagotchi.jugar();
tamagotchi.comer();

tamagotchi.setEstado(new Contenta(tamagotchi));
tamagotchi.jugar();
tamagotchi.comer();

tamagotchi.setEstado(new Aburrida(tamagotchi));
tamagotchi.jugar();
tamagotchi.comer();

console.log('---------------------')