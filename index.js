var conversation = [];

function thing(){
  var text = document.getElementById('input1').value;
  
  var txt1 = "<p class=\"student\">"+text+" </p>";
  var txt2 = "<p class=\"counselor\">"+getResponse(text)+" </p>";
  $("#input1").before(txt1,txt2);
 window.scrollTo(0,document.body.scrollHeight);
  
};
 

function getResponse(text){
  text=text.toLowerCase();
  conversation.push(text);
  if(conversation[0].indexOf("summer")>=0){
    if(conversation.length==1){
      return "Are you leaning towards doing something academics or an     extracurricular experience?";
    }
    if(conversation[1].indexOf("academic")>=0){
      if(conversation.length==2){
        return "It's nice to apply yourself. Some possible options are summer programs, internships, or jobs. What are you interested in?";
      }
      if(conversation[2].indexOf("program")>=0){
        if(conversation.length==3){
          return "Great! Are you thinking about a program with tuition?";
        }
        if(conversation[3].indexOf("no")>=0 || conversation[3].indexOf("free")>=0){
          if(conversation.length==4){
            return "In that case, have you considered RSI? Here is a link: <a href='http://www.cee.org/research-science-institute'>http://www.cee.org/research-science-institute</a>.";
          }
          if(conversation[4].indexOf("thank")>=0){
            if(conversation.length==5){
              return "My pleasure."
            }
          }
        }
      }
    }
    if(conversation[1].indexOf("extracurricular")>=0){
      if(conversation.length==2){
        return "That's not going to get you into good colleges";
      }
    }
  }
  conversation.pop();
  return "Sorry, I did not understand that. Did you mean to write what you sent?";
}
