import { Template } from "meteor/templating";

Template.ShoppingList.onCreated(function(){
    this.autorun(()=>{
        this.subscribe('recipes');
    });
});

Template.ShoppingList.helpers({
    shoppingList() {
        return Recipes.find({ author: Meteor.userId(), inMenu: true });
    }
});
