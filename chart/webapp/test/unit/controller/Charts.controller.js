/*global QUnit*/

sap.ui.define([
	"chart/controller/Charts.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Charts Controller");

	QUnit.test("I should test the Charts controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
