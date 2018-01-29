import { Template } from "meteor/templating";
import { Session } from "meteor/session";

Template.Recipe.events({
    'click .toggle-menu': function () {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash'(){
       Meteor.call('deleteRecipe', this._id);
    },
    'click .fa-pencil'(){
       Session.set('editMode', !Session.get('editMode'));
     }
});

Template.Recipe.helpers({
    updateRecipeId() {
        return this._id;
    }
})
