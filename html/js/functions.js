function relocate(url)
{
	window.location = url;
}



function check(eid)
{
	document.getElementById(eid).checked = true;
}

function uncheck(eid){
	document.getElementById(eid).checked = false;
}

function toggle(itemid){
	if(document.getElementById(itemid).style.display == 'none'){
		document.getElementById(itemid).style.display = '';
	}else{
		document.getElementById(itemid).style.display = 'none';
	}
}

function enable(item){
	document.getElementById(item).disabled = "";
}

function disable(item){
	document.getElementById(item).disabled = "disabled";
}

function setImage(imageId, newImage){
	document.getElementById(imageId).src = newImage;
}

function moveSelectItem(from, to){
	var source = document.getElementById(from);
	var target = document.getElementById(to);
	
	for(var i = 0; i < source.length; i++){
		if(source.options[i].selected == true){
			target.options[target.length] = new Option(source.options[i].text, source.options[i].value);
		}
	}
	for(var j = source.length-1; j >= 0; j--){
		if(source.options[j].selected == true){
			source.options[j] = null;
		}		
	}	
}

function checkMultiple(id){
	if(typeof(id) == typeof(String())){
		var box = document.getElementById(id);
		
		for(var i = 0; i < box.length; i++){
			box.options[i].selected = true;
		}
	}else if(typeof(id) == typeof(Array())){
		for(var j = 0; j < id.length; j++){
			var box = document.getElementById(id[j]);
		
			for(var i = 0; i < box.length; i++){
				box.options[i].selected = true;
			}
		}
	}
}

function StringtoXML(text){
  if (window.ActiveXObject){
    /*
  	var doc=new ActiveXObject('Microsoft.XMLDOM');
    doc.async='false';
    doc.loadXML(text);
    */
    
    // http://blogs.msdn.com/xmlteam/archive/2006/10/23/using-the-right-version-of-msxml-in-internet-explorer.aspx
		var types = [
			'MSXML2.XMLHTTP.6.0',
			'MSXML2.XMLHTTP.3.0'
		];

		for (var i = 0; i < types.length; i++)
		{
			try
			{
				return new ActiveXObject(types[i]);
			}
			catch(e) {}
		}

		return undefined;
  } else {
    var parser=new DOMParser();
    var doc=parser.parseFromString(text,'text/xml');
  }
  return doc;
}