Template.body.helpers({
    'events' : function () {
        return Events.find();
    },
    'items' : function () {
        return Items.find();
    }
});
