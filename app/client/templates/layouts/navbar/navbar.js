/*****************************************************************************/
/* navbar: Event Handlers */
/*****************************************************************************/
Template.navbar.events({

});

/*****************************************************************************/
/* navbar: Helpers */
/*****************************************************************************/
Template.navbar.helpers({
	isHome: function(){
		return Router.current().route.path('home');
	}
});

/*****************************************************************************/
/* navbar: Lifecycle Hooks */
/*****************************************************************************/


Template.navbar.created = function () {
};

Template.navbar.rendered = function () {
};

Template.navbar.destroyed = function () {
};