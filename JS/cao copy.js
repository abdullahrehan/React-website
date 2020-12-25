
/*CLock Functions == Display the InnerText of Buttons on Screen*/   

function Clock(){

  var hour=document.getElementById("hour");
  var min=document.getElementById("min");
  var Sec=document.getElementById("sec");
  
  var date=new Date();
  var Hours=date.getHours() % 12;
  var Min=date.getMinutes();
  var Secounds=date.getSeconds();
  
  hourDeg=Hours*30+(0.5*Min);
  minDeg=Min*6+(0.1*Secounds);
  secDeg=Secounds*6;
  
  
  hour.style.transform='Rotate('+hourDeg+'deg)';
  min.style.transform='Rotate('+minDeg+'deg)';
  sec.style.transform='Rotate('+secDeg+'deg)';
  
  setInterval(Clock,1000)
  
  }
  
  function month4(){
    var date=new Date();
    var month=date.getMonth();
  
  }
  
  
  function date(){
  var date=new Date();
  var actualdate=date.getDate();
  
  var month=date.getMonth();
  var year=date.getFullYear();
  var day=date.getDay();
  
  var g=document.getElementById("Date");
     if(actualdate==1){g.innerHTML="01";}
else if(actualdate==2){g.innerHTML="02";}
else if(actualdate==3){g.innerHTML="03";}
else if(actualdate==4){g.innerHTML="04";}
else if(actualdate==5){g.innerHTML="05";}
else if(actualdate==6){g.innerHTML="06";}
else if(actualdate==7){g.innerHTML="07";}
else if(actualdate==8){g.innerHTML="08";}
else if(actualdate==9){g.innerHTML="09";}
else{g.innerHTML=actualdate;}



  if(month==0){document.getElementById("Date").innerHTML+='<a> Jan </a>';}
 
  else if(month==1){document.getElementById("Date").innerHTML+=' Feb';}
  else if(month==2){document.getElementById("Date").innerHTML+=' Mar';}
  else if(month==3){document.getElementById("Date").innerHTML+=' Apr';}
  else if(month==4){document.getElementById("Date").innerHTML+=' May';}
  else if(month==5){document.getElementById("Date").innerHTML+=' Jun';}
  else if(month==6){document.getElementById("Date").innerHTML+=' Jul';}
  else if(month==7){document.getElementById("Date").innerHTML+=' Aug';}
  else if(month==8){document.getElementById("Date").innerHTML+=' Sep';}
  else if(month==9){document.getElementById("Date").innerHTML+=' oct';}
  else if(month==10){document.getElementById("Date").innerHTML+=' Nov';}
  else if(month==11){document.getElementById("Date").innerHTML+=' Dec';}
  else if(month==12){document.getElementById("Date").innerHTML+=' Sep';}
 
if(day==0){document.getElementById("Date").innerHTML+='<br><a style="margin-left: 109.2%;margin-top:-2%;color: rgb(51, 51, 51); "> Sun </a>';}
else if(day==1){document.getElementById("Date").innerHTML+='<br><a style="margin-left: 109.2%;margin-top:-2% " > Mon </a>';}
else if(day==2){document.getElementById("Date").innerHTML+='<br><a style="margin-left: 109.2%;margin-top:-2% "> Tue </a>';}
else if(day==3){document.getElementById("Date").innerHTML+='<br><a style="margin-left: 109.2%;margin-top:-2% "> Wed </a>';}
else if(day==4){document.getElementById("Date").innerHTML+='<br><a style="margin-left: 121.2%;margin-top:-2% "> Thu </a>';}
else if(day==5){document.getElementById("Date").innerHTML+='<br><a style="margin-left: 109.2%;margin-top:-2% "> Fri </a>';}
else if(day==6){document.getElementById("Date").innerHTML+='<br><a style="margin-left: 109.2%;margin-top:-2% "> Sat </a>';}
  
  
  
  }
  Clock();
  date();
 
/*Display Function == Display the InnerText of Buttons on Screen*/   
function displaybutton(x){
 
   document.getElementById('screen').value+=x;
   ev();}
    
/*Clear Screen Function == Clear the Screen*/   
function displaynull(){   
    
   document.getElementById('screen').value='';
   document.getElementById('result').value='';}
    
  
/*Scitific Values Display Function == Display the Scintific button Values*/   
function scin(){
   
 
 

    var Deg=document.getElementById("circle2");
    Deg.classList.toggle("circle"); 

    if(Deg.classList=='circle'){Deg.style.opacity="100%";}
    
    
    var Rad=document.getElementById("circle3");
    Rad.classList.toggle("circle1");
    

    
    var y=document.getElementsByClassName("simp");

var o;

for(o=0;o<8;o++){y[o].classList.toggle("new");}
 
   
if(y[1].classList=="simp"){
  y[0].innerHTML='<h4 style="font-family: sans-serif;">Scintific</h4>'
  y[1].innerText="+"; 
  y[1].innerText="+";
  y[2].innerText="-"; 
  y[3].innerText="*"; 
  y[4].innerText="/";
  y[5].innerText="( )3";    
  y[6].innerText=".";
  y[7].innerText="( )2";
 
}
else if(y[1].classList=="simp new"){
  y[0].innerHTML='<h4 style="font-family: sans-serif;">Simple</h4>'
  y[1].innerText="√";
  y[2].innerText="∛"; 
  y[3].innerText="log";
  y[4].innerText="Sin";
  y[5].innerText="Cos";  
  y[6].innerText="%";
  y[7].innerText="Tan";}
    
}

/*Scitific Values Display Function == Display the Scintific button Values*/   
// function simp(){

      
//     var clas=document.getElementsByClassName("Geg-Red")[0];
//     clas.classList.remove("Geg-Red");
//     clas.classList.add("Deg");
//     console.log(clas);

  
//     var Deg=document.getElementsByClassName("circle")[0];
//     Deg.classList.remove("circle");
//     Deg.classList.add("circle2");
    

    
    
//     var Rad=document.getElementsByClassName("circle1")[0];
//     Rad.classList.remove("circle1");
//     Rad.classList.add("circle3");
   
//     console.log(Rad);

//     var y=document.getElementsByClassName("simp");

//     y[1].innerText="+";
//     y[2].innerText="-"; 
//     y[3].innerText="*"; 
//     y[4].innerText="/";
//     y[5].innerText="( )3";    
//     y[6].innerText=".";
//     y[7].innerText="( )2";}
    





/*Scintific Cal Solving Function == Send Command to Scintific Function*/   
    function s(){
    
    var screen=document.getElementById("screen").value;
    
    if(screen.match( /[a-z,√,∛]/i )){
    console.log("Scree value is :",screen);
    
    var lastresult=screen;
    var screenlength=lastresult.match( /\d+/g).length;
    console.log("this is ",screenlength);
    var i;
    for(i=0;i<screenlength;i++){
        console.log("First loop This is lastresult",lastresult);
            if(lastresult.match(/(Sin)/g )){console.log("running sin"); Sin(lastresult);
            lastresult=Sin(lastresult);}
            else if(lastresult.match(/(Cos)/g )){console.log("running cos"); Cos(lastresult);
            lastresult=Cos(lastresult);}
            else if(lastresult.match(/(Tan)/g )){console.log("running tan"); Tan(lastresult);
            lastresult=Tan(lastresult);}
            else if(lastresult.match(/(log)/g )){console.log("running Log"); Log(lastresult);
            lastresult=Log(lastresult);}
            else if(lastresult.match(/(√)/g )){console.log("running Square Root"); Rootsq(lastresult);
            lastresult=Rootsq(lastresult);}
            else if(lastresult.match(/(∛)/g )){console.log("running Cube Root"); RootCube(lastresult);
            lastresult=RootCube(lastresult);}
    
            console.log("This is lastresult",lastresult);
        
    }
    }
    }
    
/*Display Function == Evaluate the values in digits foam*/        
    function ev(){ 
    
        var q=document.getElementById("screen").value;
    
        if(q.match( /[a-z,√,∛]/i )){var q=document.getElementById("screen2").value;}
        else{var q=document.getElementById("screen").value;}
        
        var y=eval(q);
        console.log(y);    
    
        document.getElementById("result").value=y;}
    
/*Back Function == Remove the Characters*/        
     function back() {
         var value = document.getElementById("screen").value;
         document.getElementById("screen").value = value.substr(0, value.length - 1);
     }
    

     function DegRad(){

        console.log("Enter DegRad",val);
        
        return val;
    }
     
   

    function Deg(){
 var msg=document.getElementById("msg");
 msg.innerText="Deg";

    }

    function Rad(g){
        
 var msg=document.getElementById("msg");
 msg.innerText="Rad";
        
            }

          /*---------------------------------Scintific Functions---------------------------------------------*/   


/*Sin Function == Replace the Sin Values into digits foam*/
function Sin(lastresult){

    /*Variables*/
   
    var i , getAllSins, secoundscreen, getDigitofSins ,length , evaluateSin , first ,secound , loopvalue;     
   
    /*Checking Statement*/  console.log("Entering in the Sin Function",lastresult);

     getAllSins=lastresult.match(/Sin\d+/g);

    /*Checking Statement*/ console.log("First Matching", getAllSins);
    var msg=document.getElementById("msg");  
    document.getElementById("screen3").value=getAllSins;
    secoundscreen=document.getElementById("screen3").value;
    getDigitofSins=secoundscreen.match( /\d+/g);
     
    /*Checking Statement*/ console.log( "Secound Matching",getDigitofSins);
              
    length=getDigitofSins.length;

    /*Checking Statement*/ console.log(length);

    
    /*Loop*/for(i=0;i<length;i++){

      loopvalue=getDigitofSins[i];

      if(msg.innerText=="Deg"){
        evaluateSin=(Math.sin(loopvalue*(Math.PI/180)));

      console.log("ye to Degree hn");

      }else if(msg.innerText=="Rad"){

      evaluateSin=Math.sin(loopvalue);
      console.log("ye to radian hn");
     
    }
      first=getAllSins[i];
      secound=evaluateSin;
    
      lastresult=lastresult.replace(first,secound);
      document.getElementById("screen2").value=lastresult;
    
    /*Checking Statement*/ console.log("Result for Sin",lastresult);}   
    /*Return Statement*/ return lastresult;}



/*Cos Function == Replace the Cos Values into digits foam*/
    function Cos(lastresult){
   
        /*Variables*/
       
        var i , getAllCos, secoundscreen, getDigitofCos ,length , evaluateCos , first ,secound , loopvalue;     
       
        /*Checking Statement*/  console.log("Entering in the Cos Function",lastresult);
    
         getAllCos=lastresult.match(/Cos\d+/g);
    
        /*Checking Statement*/ console.log("First Matching", getAllCos);
        var msg=document.getElementById("msg");  
        document.getElementById("screen3").value=getAllCos;
        secoundscreen=document.getElementById("screen3").value;
        getDigitofCos=secoundscreen.match( /\d+/g);
         
        /*Checking Statement*/ console.log( "Secound Matching",getDigitofCos);
                  
        length=getDigitofCos.length;
    
        /*Checking Statement*/ console.log(length);
    
        
        /*Loop*/for(i=0;i<length;i++){
    
          loopvalue=getDigitofCos[i];
          if(msg.innerText=="Deg"){
            evaluateCos=(Math.cos(loopvalue*(Math.PI/180)));
    
          console.log("ye to Degree hn");
    
          }else if(msg.innerText=="Rad"){
    
          evaluateCos=Math.cos(loopvalue);
          console.log("ye to radian hn");
         
        }
          
         
          first=getAllCos[i];
          secound=evaluateCos;
        
          lastresult=lastresult.replace(first,secound);
          document.getElementById("screen2").value=lastresult;
        
        /*Checking Statement*/ console.log("Result for Cos",lastresult);}   
/*Return Statement*/ return lastresult;}
   

    
/*Tan Function == Replace the Tan Values into digits foam*/
    function Tan(lastresult){
   
        /*Variables*/
       
        var i , getAllTan, secoundscreen, getDigitofTan ,length , evaluateTan , first ,secound , loopvalue;     
       
        /*Checking Statement*/  console.log("Entering in the Tan Function",lastresult);
    
         getAllTan=lastresult.match(/Tan\d+/g);
    
        /*Checking Statement*/ console.log("First Matching", getAllTan);
        var msg=document.getElementById("msg");  
        document.getElementById("screen3").value=getAllTan;
        secoundscreen=document.getElementById("screen3").value;
        getDigitofTan=secoundscreen.match( /\d+/g);
         
        /*Checking Statement*/ console.log( "Secound Matching",getDigitofTan);
                  
        length=getDigitofTan.length;
    
        /*Checking Statement*/ console.log(length);
    
        
        /*Loop*/for(i=0;i<length;i++){
    
          loopvalue=getDigitofTan[i];
          if(msg.innerText=="Deg"){
            evaluateTan=(Math.tan(loopvalue*(Math.PI/180)));
    
          console.log(" Degree");
    
          }else if(msg.innerText=="Rad"){
    
          evaluateTan=Math.tan(loopvalue);
          console.log("radian ");
         
        }
          first=getAllTan[i];
          secound=evaluateTan;
        
          lastresult=lastresult.replace(first,secound);
          document.getElementById("screen2").value=lastresult;
        
        /*Checking Statement*/ console.log("Result for Tan",lastresult);}   
/*Return Statement*/ return lastresult;}


/*Log Function == Replace the Log Values into digits foam*/
    function Log(lastresult){
   
        /*Variables*/
       
        var i , getAllLog, secoundscreen, getDigitofLog ,length , evaluateLog , first ,secound , loopvalue;     
       
        /*Checking Statement*/  console.log("Entering in the Log Function",lastresult);
    
         getAllLog=lastresult.match(/log\d+/g);
    
        /*Checking Statement*/ console.log("First Matching", getAllLog);
      
        document.getElementById("screen3").value=getAllLog;
        secoundscreen=document.getElementById("screen3").value;
        getDigitofLog=secoundscreen.match( /\d+/g);
         
        /*Checking Statement*/ console.log( "Secound Matching",getDigitofLog);
                  
        length=getDigitofLog.length;
    
        /*Checking Statement*/ console.log(length);
    
        
        /*Loop*/for(i=0;i<length;i++){
    
          loopvalue=getDigitofLog[i];
          evaluateLog=Math.log10(loopvalue);
         
          first=getAllLog[i];
          secound=evaluateLog;
        
          lastresult=lastresult.replace(first,secound);
          document.getElementById("screen2").value=lastresult;
        
        /*Checking Statement*/ console.log("Result for Log",lastresult);}   
/*Return Statement*/ return lastresult;}


/*Square Root Function == Replace the Square Root Values into digits foam*/
 function Rootsq(lastresult){
   
    /*Variables*/
   
    var i , getAllRootsq, secoundscreen, getDigitofRootsq ,length , evaluateRootsq , first ,secound , loopvalue;     
   
    /*Checking Statement*/  console.log("Entering in the Square Root Function",lastresult);

     getAllRootsq=lastresult.match(/√\d+/g);

    /*Checking Statement*/ console.log("First Matching", getAllRootsq);
  
    document.getElementById("screen3").value=getAllRootsq;
    secoundscreen=document.getElementById("screen3").value;
    getDigitofRootsq=secoundscreen.match( /\d+/g);
     
    /*Checking Statement*/ console.log( "Secound Matching",getDigitofRootsq);
              
    length=getDigitofRootsq.length;

    /*Checking Statement*/ console.log(length);

    
    /*Loop*/for(i=0;i<length;i++){

      loopvalue=getDigitofRootsq[i];
      evaluateRootsq=Math.sqrt(loopvalue);
     
      first=getAllRootsq[i];
      secound=evaluateRootsq;
    
      lastresult=lastresult.replace(first,secound);
      document.getElementById("screen2").value=lastresult;
    
    /*Checking Statement*/ console.log("Result for Square Root",lastresult);}   
/*Return Statement*/ return lastresult;}


/*Cube Root Function == Replace the Cube Values into digits foam*/s
function RootCube(lastresult){
   
    /*Variables*/
   
    var i , getAllRootCube, secoundscreen, getDigitofRootCube ,length , evaluateRootCube , first ,secound , loopvalue;     
   
    /*Checking Statement*/  console.log("Entering in the Cube Root Function",lastresult);

     getAllRootCube=lastresult.match(/∛\d+/g);

    /*Checking Statement*/ console.log("First Matching", getAllRootCube);
  
    document.getElementById("screen3").value=getAllRootCube;
    secoundscreen=document.getElementById("screen3").value;
    getDigitofRootCube=secoundscreen.match( /\d+/g);
     
    /*Checking Statement*/ console.log( "Secound Matching",getDigitofRootCube);
              
    length=getDigitofRootCube.length;

    /*Checking Statement*/ console.log(length);

    
    /*Loop*/for(i=0;i<length;i++){

      loopvalue=getDigitofRootCube[i];
      evaluateRootCube=Math.cbrt(loopvalue);
     
      first=getAllRootCube[i];
      secound=evaluateRootCube;
    
      lastresult=lastresult.replace(first,secound);
      document.getElementById("screen2").value=lastresult;
    
    /*Checking Statement*/ console.log("Result for Cube Root",lastresult);}   
/*Return Statement*/ return lastresult;}    
    


