exports.getIndex = function (db) {
  return db.collection('schedules').find()
  .sort({ created_at: -1 })
  .limit(30)
  .toArray().then(function (schedules) {
    return {
      schedules: schedules
    };
  });
};
