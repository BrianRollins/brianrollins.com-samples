/*jsRedirector
Version 1.0
By Brian Rollins (me@brianrollins.com)
Released as free, open source example code.
Find more at www.BrianRollins
*/

var jsRedirector = {
	//Initialize the API with data (initData).
	//goAhead (Boolean) tells it whether or not to do the redirect.
	init : function (initData, goAhead) {
		this.data = initData;
		if (goAhead) {
			return (this.go());
		} else {
			return {
				loaded : true,
				go : false,
				msg : "Data loaded. No redirect per user request.",
				title : null,
				url : null
			};
		}
	},
	//This is what actually does the redirection.
	//Can be called manually (jsRedirector.go() 
	//or called by the init method with goAhead set to true.)
	go : function () {
		if (window.location.hash !== '') {
			var chosen = this.data[window.location.hash.substr(1)];
			if (typeof chosen !== "undefined") {
				document.location = chosen.url;
				return {
					loaded : true,
					go : true,
					msg : "URL found. Activating redirect to " + chosen.title + ".",
					title : chosen.title,
					url : chosen.url
				};
			} else {
				return {
					success : false,
					go : false,
					msg : "Unable to find a matching entry for the hash provided.",
					title : null,
					url : null
				};
			}
		} else {
			return {
				success : false,
				go : false,
				msg : "No hash provided in URL. Cannot redirect.",
				title : null,
				url : null
			};
		}
	}
};