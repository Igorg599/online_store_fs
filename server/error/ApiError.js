class ApiError extends Error {
  constructor(status, messages) {
    super()
    this.status = status
    this.messages = message
  }

  static badRequest(message) {
    return new ApiError(404, message)
  }

  static internal(message) {
    return new ApiError(500, message)
  }

  static forbidden(message) {
    return new ApiError(403, message)
  }
}
