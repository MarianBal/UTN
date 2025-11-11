import { Documento } from './documento';
import { Compresion } from './compresion';
import { Encriptacion } from './enccriptacion';
import { Cliente } from './cliente';

const comprimir: Compresion = new Compresion();
const encriptar: Encriptacion = new Encriptacion();

const documento: Documento = new Documento('unArchivo', 'contenido del Archivo');

console.log('documento', documento);

const objCliente: Cliente = new Cliente(encriptar);
objCliente.procesarDocumento(documento, encriptar);

const otroCliente: Cliente = new Cliente(comprimir);
otroCliente.procesarDocumento(documento, comprimir);

export { Documento, Compresion, Encriptacion, Cliente };