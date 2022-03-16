class ApiError extends Error {
  data;

  status;

  constructor(data, status) {
    super(data);

    this.name = this.constructor.name;

    // a workaround to make `instanceof ApiError` work in ES5 with babel
    this.constructor = ApiError;
    this.__proto__ = ApiError.prototype; // eslint-disable-line

    this.data = data;
    this.status = status;
    this.message = `\nstatus: ${this.status}\ndata: ${JSON.stringify(this.data, null, 2)}`;
  }
}

ApiError.prototype = Error.prototype;

export default ApiError;
