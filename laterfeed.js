/*
  Event
    Id
    Text
    TimeReceived
    Source

  Events.insert({
    text: "Event 1. Just some text",
    source: "Browser",
    createdAt: new Date()
  });

  Item
    Id
    SourceEvent
    Type
    URI
    Service

*/

Events = new Mongo.Collection('events');
Items = new Mongo.Collection('items')

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.feed.helpers({
      'event' : function () {
          return Events.find();
      },
      'item' : function () {
          return Items.find();
      }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
