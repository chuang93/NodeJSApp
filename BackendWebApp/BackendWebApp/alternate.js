module.exports ={
zeroCreator: function () {
		return 0;
	},
 zeroLife : 0,

/*zeroLife is essentially a public method that can be used in other classes
 * while private Object remains only usable within this module*/


};

var privateFunctions = {

	privateObject: function () {
		console.log("privateObject can only be called in this module");
	},
};