/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"au/com/tri/demo_ui/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});