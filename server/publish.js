import { Meteor } from "meteor/meteor";

Meteor.publish('recipes', function () {
    return Recipes.find({ author: this.userId });
});