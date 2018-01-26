import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import './Recipe.html';

Template.Recipes.onCreated(function(){
    this.autorun(()=>{
        this.subscribe('recipes');
    });
})

Template.Recipes.helpers({
    recipes() {
        return Recipes.find({ author: Meteor.userId() });
    }
})