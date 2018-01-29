import { Template } from "meteor/templating";
import { Session } from "meteor/session";
import { ReactiveVar } from "meteor/reactive-var";

Template.Recipe.onCreated(function(){
    this.editMode = new ReactiveVar(false);
    // this.editMode = new ReactiveVar();
    // this.editMode.set(false);
});

Template.Recipe.events({
    'click .toggle-menu': function () {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash'(){
       Meteor.call('deleteRecipe', this._id);
    },
    'click .fa-pencil'(event, template){
        template.editMode.set(!template.editMode.get())
     }
});

Template.Recipe.helpers({
    updateRecipeId() {
        return this._id;
    },
    editMode: function(){
        return Template.instance().editMode.get();
    }
})
