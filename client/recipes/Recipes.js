import { Meteor } from "meteor/meteor";
import {Template} from "meteor/templating";

import './Recipe.html';

Meteor.subscribe('recipes');

Template.Recipes.helpers({
    recipes(){
        return Recipes.find({});
    }
})