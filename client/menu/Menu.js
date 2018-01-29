import { Template } from "meteor/templating";

Template.Menu.onCreated(function(){
    this.autorun(()=>{
        this.subscribe('recipes');
    });
});

Template.Menu.helpers({
    recipes() {
        return Recipes.find({ author: Meteor.userId(), inMenu: true });
    }
});
