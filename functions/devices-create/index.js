console.log('starting function')

exports.handle = function(e, ctx) {
  e.createdAt = Date.now()
  ctx.succeed(e)
}
