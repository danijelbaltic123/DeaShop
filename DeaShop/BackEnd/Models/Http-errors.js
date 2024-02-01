class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); //Dodavanje error poruke
    this.code = errorCode; //Dodavanje koda za errore tipa 404 i drugh
  }
}

module.exports = HttpError;
