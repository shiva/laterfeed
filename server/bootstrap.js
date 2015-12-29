Meteor.startup(function () {
  console.log("Starting laterfeed!!");

  /* */
  if (Events.find().count() === 0) {
    var evts = JSON.parse(Assets.getText("events.json")).events;
    console.log("Importing private/events.json to db.");

    evts.forEach(function(doc) {
      console.log("Inserting event: " + doc.content);
      var createdAt = new Date(doc.createdAt);
      doc.createdAt = createdAt;

      Events.insert(doc);
    });
  }

  /* load items */
  if (Items.find().count() === 0) {
    var items = JSON.parse(Assets.getText("items.json")).items;
    console.log("Importing private/items.json to db.");

    items.forEach(function(doc) {
      console.log("Inserting event: " + doc.comment);
      var receivedAt = new Date(doc.receivedAt);
      var createdAt = new Date(doc.createdAt);
      var src_createdAt = new Date(doc.source.createdAt);

      doc.receivedAt = receivedAt;
      doc.createdAt = createdAt;
      doc.source.createdAt = src_createdAt;

      Items.insert(doc);
    });
  }
});
