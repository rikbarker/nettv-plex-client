function Video(elem) {
	var keyAttrNode = elem.attributes.getNamedItem("key");
	var titleAttrNode = elem.attributes.getNamedItem("title");
	var typeAttrNode = elem.attributes.getNamedItem("type");
	var summaryAttrNode = elem.attributes.getNamedItem("summary");
	var yearAttrNode = elem.attributes.getNamedItem("year");
	var thumbAttrNode = elem.attributes.getNamedItem("thumb");
	var artAttrNode = elem.attributes.getNamedItem("art");

    var grandparentTitleAttrNode = elem.attributes.getNamedItem("grandparentTitle");
    var grandparentThumbAttrNode = elem.attributes.getNamedItem("grandparentThumb");

	var durationAttrNode = elem.attributes.getNamedItem("duration");
	var viewOffsetAttrNode = elem.attributes.getNamedItem("viewOffset");
	
	var key = "";
	if (keyAttrNode != null) {
		key = keyAttrNode.nodeValue;
	}
	
	var title = "";
	if (titleAttrNode != null) {
		title = titleAttrNode.nodeValue;
	}
	var type = "";
	if (typeAttrNode != null) {
		type = typeAttrNode.nodeValue;
	}
	var summary = "";
	if (summaryAttrNode != null) {
		summary = summaryAttrNode.nodeValue;
	}
	var year = "";
	if (yearAttrNode != null) {
		year = yearAttrNode.nodeValue;
	}
	var thumb = "";
	if (thumbAttrNode != null) {
		thumb = thumbAttrNode.nodeValue;
	}
    
    var grandparentTitle = "";
    if (grandparentTitleAttrNode != null) {
        grandparentTitle = grandparentTitleAttrNode.nodeValue;
    }

    var grandparentThumb = "";
    if (grandparentThumbAttrNode != null) {
        grandparentThumb = grandparentThumbAttrNode.nodeValue;
    }
    
	var art = "";
	if (artAttrNode != null) {
		art = artAttrNode.nodeValue;
	}
	
    var duration = 0;
    if (durationAttrNode != null) {
        duration = Math.floor(parseInt(durationAttrNode.nodeValue, 10)/1000);
    }
    
    var viewOffset = 0;
    if (viewOffsetAttrNode != null) {
        viewOffset = Math.floor(parseInt(viewOffsetAttrNode.nodeValue, 10)/1000);
    }
    
	var url = "";
	var subtitles = null;
	var files = [];
    
    var children = elem.childNodes;
    var mediaCount = children.length;
	for (var i = 0; i < mediaCount; i++) {
		var media = children[i];	
		if (media.nodeName != "Media") continue;

		var parts = media.getElementsByTagName("Part");
        var partCount = parts.length;
		for (var j = 0; j < partCount; j++) {
			var part = parts[j];

			var partKeyAttrNode = part.attributes.getNamedItem("key");
			if (partKeyAttrNode != null) {
				url = partKeyAttrNode.nodeValue;
				files.push(url);
			}
			
			var streams = part.getElementsByTagName("Stream");
            var streamCount = streams.length;
			for (var k = 0; k < streamCount; k++) {
				var stream = streams[k];
				
				var streamKey = "";
				var streamCodec = "";
				var isStreamSelected = false;
				
				var streamKeyAttrNode = stream.attributes.getNamedItem("key");
				if (streamKeyAttrNode != null) {
					streamKey = streamKeyAttrNode.nodeValue;
				}
				var streamCodecAttrNode = stream.attributes.getNamedItem("codec");
				if (streamCodecAttrNode != null) {
					streamCodec = streamCodecAttrNode.nodeValue;
				}
				var streamSelectedAttrNode = stream.attributes.getNamedItem("selected");
				if (streamSelectedAttrNode != null) {
					isStreamSelected = streamSelectedAttrNode.nodeValue === "1";
				}
				
				if (isStreamSelected) {
					if (streamCodec === "srt") {
						subtitles = streamKey;
					}
				}
			}
		}
	}

	
	return {
		key: key,
		type: type,
		container:false,
		title: title,
		summary: summary,
        year: year,
		thumb: thumb,
        grandparentTitle: grandparentTitle,
        grandparentThumb: grandparentThumb,
		art: art,
		url: url,
		subtitles: subtitles,
        duration: duration,
        viewOffset: viewOffset
	}
}