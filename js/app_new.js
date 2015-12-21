function loadGrammar(name) {
	var grammar = tracery.createGrammar(grammars[name]);
	var s = grammar.flatten("#origin#");
	var div = $("<div/>", {
		id: "outputcontent",
		html: s
	});

	$("#output").animate({
		opacity: 0
	}, 700, function() {
		$("#output").html("");
		$("#output").append(div).animate({
			opacity: 1
		}, 700, function(){
			// TODO: if content is too long, do not generate tweet button but only share button //
			// TODO: generate facebook share button //
			$('#social iframe').fadeOut(100).remove();
			var tweetBtn = $('<a></a>')
					.addClass('twitter-share-button')
					.attr('href', 'http://twitter.com/share')
					.attr('target', '_blank')
					.attr('data-url', 'http://www.gazeupinto.space/')
					.attr('data-size', 'large')
					.attr('data-count', 'none')
					.attr('data-text', $('#outputcontent').text());
			$('#social').append(tweetBtn);
			twttr.widgets.load();
			$('#social').fadeIn(500);
		});
	});
}

$(document).ready(function() {
	// random galaxy backgrounds, on page load
	var rand = Math.floor((Math.random() * 10) + 1);
	if(rand < 4) {
		$('<img/>').attr('src', 'http://www.gazeupinto.space/img/1.jpg').load(function() {
			$(this).remove();
			$('#galaxy').css('background-image', 'url(http://www.gazeupinto.space/img/1.jpg)').animate({opacity: 0.3}, 1000);
		});
	} else if(rand > 7) {
		$('<img/>').attr('src', 'http://www.gazeupinto.space/img/2.jpg').load(function() {
			$(this).remove();
			$('#galaxy').css('background-image', 'url(http://www.gazeupinto.space/img/2.jpg)').animate({opacity: 0.3}, 1000);
		});
	} else {
		$('<img/>').attr('src', 'http://www.gazeupinto.space/img/3.jpg').load(function() {
			$(this).remove();
			$('#galaxy').css('background-image', 'url(http://www.gazeupinto.space/img/3.jpg)').animate({opacity: 0.3}, 1000);
		});
	}
	// load quote after background
	setTimeout(function() {
		var grammarNames = ["universe", "cosmos"];
		var randomGrammar = grammarNames[Math.floor(Math.random()*grammarNames.length)];
		loadGrammar(randomGrammar);
		$('#buttons').delay(1000).fadeIn(500);
	}, 0);

});
