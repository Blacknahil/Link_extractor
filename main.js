function extractLinks() {
    var doc = DocumentApp.getActiveDocument();
    var body = doc.getBody();
    var numChildren = body.getNumChildren();
    var links = [];
  
    for (var i = 0; i < numChildren; i++) {
      var child = body.getChild(i);
  
      if (child.getType() == DocumentApp.ElementType.PARAGRAPH) {
        var elements = child.getNumChildren();
        for (var j = 0; j < elements; j++) {
          var element = child.getChild(j);
  
          if (element.getType() == DocumentApp.ElementType.TEXT) {
            var text = element.asText();
            var textLength = text.getText().length;
  
            for (var k = 0; k < textLength; k++) {
              var url = text.getLinkUrl(k);
  
              if (url) {
                links.push({
                  text: text.getText(),
                  linkText: text.getText().substring(k, k + 1),
                  url: url
                });
              }
            }
          }
        }
      }
    }
  
    // Log the extracted links or show them in a dialog
    links.forEach(function(link) {
      Logger.log('Text: ' + link.text + ' | Link: ' + link.url);
    });
  }
  