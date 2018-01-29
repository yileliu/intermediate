import { Template } from "meteor/templating";
import { Session } from "meteor/session"
Template.NewRecipe.events({
    'click .fa-close'(){
        Session.set('newRecipe', false);
    }
});
