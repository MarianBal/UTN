import { Version } from "./version"

abstract class GestionVersion {

  private _versionActual: Version;
  private _versionesAnteriores: Array<Version>

restaurarVersion(v:Version): void 
visualizarUltimasDiez():void
visulizarEnesima():Version 


}

export { GestionVersion}