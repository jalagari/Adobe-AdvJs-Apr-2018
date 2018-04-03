var radio = (function(){
	var radios = {};
	function radio(eventName){
		radios[eventName] = radios[eventName] || new Radio(eventName);
		return radios[eventName];
	}

	function Radio(eventName){
		this.__eventName__ = eventName;
		this.__subscribers__ = [];
	}

	Radio.prototype.subscribe = function(subscription) {
		this.__subscribers__.push(subscription);
		return this;
	};

	Radio.prototype.unsubscribe = function(subscription) {
		this.__subscribers__ = this.__subscribers__.filter(function(fn){
			return fn !== subscription;
		});
		return this;
	};

	Radio.prototype.broadcast = function() {
		var args = arguments;
		this.__subscribers__.forEach(function(fn){
			fn.apply(this, args);
		});
		return this;
	};

	return radio;
})();