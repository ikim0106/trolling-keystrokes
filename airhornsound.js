//META{"name":"typingSoundPlugin"}*//

function typingSoundPlugin() {}

typingSoundPlugin.prototype.load = function() {
	if($("#tsp-ts").length) return;
	$("head").append('<audio id="tsp-ts"><source src="//raw.githubusercontent.com/hammerandchisel/airhornbot/master/audio/airhorn_default.wav"></audio>');
	this.ts = $("#tsp-ts");
	if($("#tsp-bs").length) return;
	$("head").append('<audio id="tsp-bs"><source src="//raw.githubusercontent.com/hammerandchisel/airhornbot/master/audio/airhorn_default.wav"></audio>');
	this.bs = $("#tsp-bs");
};

typingSoundPlugin.prototype.unload = function() {
	$("#tsp-ts").remove();
	$("#tsp-bs").remove();
};

typingSoundPlugin.prototype.start = function() {
	var self = this;
	$(document).on("keypress.ts", function(e) {
		self.ts.trigger("pause");
		self.bs.trigger("pause");
		self.ts.prop("currentTime", 0);
		self.bs.prop("currentTime", 0);
		self.ts.trigger("play");
	});

	$(document).on("keydown.ts", function(e) {
		if(e.keyCode == 8) {
			self.bs.trigger("pause");
			self.bs.prop("currentTime", 0);
			self.bs.trigger("play");
			return;
		}
	});
};

typingSoundPlugin.prototype.stop = function() {
	$(document).off("keypress.ts");
	$(document).off("keydown.ts");
};

typingSoundPlugin.prototype.getName = function() {
    return "airhorn sounds for faggots";
};

typingSoundPlugin.prototype.getDescription = function() {
    return "Plays airhorn sounds when you type, git memed bitch";
};

typingSoundPlugin.prototype.getVersion = function() {
    return "1.1";
};

typingSoundPlugin.prototype.getAuthor = function() {
    return "me";
};

typingSoundPlugin.prototype.getSettingsPanel = function() {
	return "";
};
