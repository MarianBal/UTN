import { Documento } from "./documento";

class DocumentoPDF extends Documento {
  validar() {
    /* valida que sea un PDF*/
  }
}

class DocumentoImagen extends Documento {
  validar() {
    /* valida que sea una imagen*/
  }
}

export { DocumentoPDF, DocumentoImagen };
