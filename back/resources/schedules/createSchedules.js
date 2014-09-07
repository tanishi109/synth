exports.post = function (db, params) {
  if (!params.content) {
    throw 422;
  }

  return db.collection('schedules').insert({
    content: params.content.slice(0, 140),
    created_at: new Date()
  });
};
