'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../../node_modules/ava-ia/lib/helpers');

exports.default = function (state) {
	
	return new Promise(function (resolve, reject) {
			
		for (var rule in Config.modules.parle.rules) {
			  var match = (0, _helpers.syntax)(state.sentence, Config.modules.parle.rules[rule]); 
			  if (match) break;
		}
		
		 setTimeout(function(){ 			
			if (match) {
				if (state.debug) info('ActionExec'.bold.yellow, 'action:', rule.yellow);
				
					state.action = {
						module: 'parle',
						command: rule,
						value: value,
						txt: txt						
					};	
			}		
				
			resolve(state);	
		}, 500);
	});
};
