class Version {
  private _id: number = this.generarIdRandom()


  generarIdRandom(): number {
    return Math.random()
  }

  generarNuevaVersion() {
    this._id = this.generarIdRandom()
  }

}

export{ Version };