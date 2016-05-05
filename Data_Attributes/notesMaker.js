//Putting data in a flat file so we don't 
//have to mess with AJAX calls in our demo.
var data = [];
data["intro"] = {  
  title:"Introduction",
  content:"This is content. It's built out of a JSON object in notesMaker.js. You can also make an AJAX call and load the content dynamically.",
  date:"2016-05-04"
};
data ["message"] = {
  id:"message",
  title:"A Message",
  content:"This is a message from the great beyond. Can you hear me? Wooo. It's scary, isn't it? And there's another thing I've been wanting to tell you, Zaphod.",
  date:"2016-02-15"
};
data["end"] = {
  id:"end",
  title:"Conclusion",
  content:"And that's all I have to say about that.",
  date:"2016-02-15"
};

//This would be simpler with jQuery, 
//but we'll do it without so you're seeing just vanilla JS.
var e = document.getElementsByTagName("*");
for (var i=0; i<e.length;i++){
  if(e[i].dataset.notesContent){
    var c = e[i].dataset;
    var d =data[c.notesContent];
    var content = d.content;
    
    if(c.notesLength){      
      var addon = "";
      if (d.content.length>c.notesLength){
        addon = "...";
      }
      d.content = content.substr(0,parseInt(c.notesLength)) + addon;
    }
    e[i].innerHTML = "<h2>"+d.title+"</h2><p class='noteContent'>"+d.content+"</p>";
    if(!c.notesHideDate){
      e[i].innerHTML += "<p class='noteDate'>Posted: "+d.date+"</p>";
    }
  }
}
