/*
Hey There!
My app "AYUSHMAN BHAVA" provides a platform for people to become a FirstResponder. It will have 
interactive Augmented Reality Tutorials and also a Live Procedure incase of a real emergency.

Make sure that you fill the UserInfo*****
Make sure you input your height in meters and weight in Kilograms 
If the list of Hospitals doesn't appear in the console, please reload:)
The API often shows "ERROR : FAILED TO FETCH", in such case please try after a few mins
Please Ignore the "touches" bug
Some functionalities of the Application may not be accepted by some browsers*****


Your location is displayed in this format : " latitude,longitude "

=> speech recognition :)
Utter the word "emergency" whenever you return to home screen inorder to report an emergency.
Incase the utterance is not recognised click on the mic 🎙 symbol to retry

Your webcam will be accessed incase of a real emergency inorder to get the situation assessed
by a professional(possibily a doctor) via a videocall
However foe now,it will not prompt any function and doesn't have any functionality 
With your help we can put it to good use :)

Use your mouse to select the options in the application. It is not touch based*****

( "*****" => Please check before you start testing)

The Blood Bank List and Blood Request are yet to be completed as the API is not yet available

The tutorials are supposed to be displayed in AR and I need the help of
the accomplished mentors for doing so:)

Hope The Jury Likes It!😊
*/ 

var scr1,scrEmergency,scrHome,scrAr,scrAmbulance,scrBloodBank,scrArTutorial,scrBlood,scrChooseEmergency,scrChoking,scrChestPain,scrFracture,scrSeizures,scrSnakeBite,scrFirstAid,scrFeedback,scrCompany,scrLearn,scrProcedure,scrThank,scrSafetyProtocol,scrNews;
var bgGradient1;
var imgBmi,imgEmergency,imgHome,imgAr,imgAmbulance,imgBloodBank,imgArTutorial,imgBlood,imgChooseEmergency,imgChoking,imgChestPain,imgFracture,imgSeizures,imgSnakeBite,imgFirstAid,imgFeedback,imgCompany,imgLearn,imgProcedure,imgThank,imgSafetyProtocol,imgNews;
var gameState = 0;
var home,EmergencyScreen;
var t1 = 50;
var CNV,listenB,backB,backFB,lbackARB,emStartB,emBackB,ambB,ambBackB,emergencyB,procB1,procB2,procB3,procB4,procB5,procB6,notEmergencyB,infoB,newsB,learnB,feedbackB,bloodB,compB,fracB,chokeB,chestB,snakeB,seizB,firstAidB,lbackB,lARB,feedbackSubmB,bloodRequestB,bloodBankB,learnChokeB,learnChestB,learnSeizuresB,learnSnakeB,learnFracB,learnFirstAidB;
var form1;
var userCount,user1;
var feedback1;
var font1;
var vid;
var foo,cam,lang,userResult,foo1;
var cmnd ="emergency";
var locationData,latitudeData,longitudeData;
var hospital;
var userFB = []; //users feedback stored in array
var cpr = 'cpr.mp4';
var choke = 'choke.mp4';
var frac = 'frac.mp4';
var firstAid = 'firstAid.mp4';
var seiz = 'seiz.mp4';
var snake = 'snake.mp4';
var play;
var first = true;


function preload(){
//screens
scr1 = loadImage("ASSETS_NEW/Screens/logoScreen.png");
scrEmergency = loadImage("ASSETS_NEW/Screens/emergencyScreen.png");
scrChooseEmergency = loadImage("ASSETS_NEW/Screens/chooseEmergencyScreen.png");
scrSafetyProtocol = loadImage("ASSETS_NEW/Screens/safetyProtocolScreen.png");
scrProcedure = loadImage("ASSETS_NEW/Screens/procedureScreen.png");
scrAmbulance = loadImage("ASSETS_NEW/Screens/ambulanceRequestScreen.png");
scrAr = loadImage("ASSETS_NEW/Screens/arScreen.png");
scrArTutorial = loadImage("ASSETS_NEW/Screens/arTutorialScreen.png");
scrHome = loadImage("ASSETS_NEW/Screens/homeScreen.png");
scrLearn = loadImage("ASSETS_NEW/Screens/learnCatalogScreen.png");
scrThank = loadImage("ASSETS_NEW/Screens/thankScreen.png");
scrFeedback = loadImage("ASSETS_NEW/Screens/feedbackScreen.png");
scrFracture = loadImage("ASSETS_NEW/Screens/fractureScreen.png");
scrChoking = loadImage("ASSETS_NEW/Screens/chokingScreen.png");
scrChestPain = loadImage("ASSETS_NEW/Screens/chestPainsScreen.png");
scrSeizures = loadImage("ASSETS_NEW/Screens/seizuresScreen.png");
scrSnakeBite = loadImage("ASSETS_NEW/Screens/snakeBiteScreen.png");
scrFirstAid = loadImage("ASSETS_NEW/Screens/firstAidScreen.png");
scrCompany = loadImage("ASSETS_NEW/Screens/companyScreen.png");
scrBlood = loadImage("ASSETS_NEW/Screens/bloodScreen.png");
scrBloodBank = loadImage("ASSETS_NEW/Screens/bloodBankScreen.png");
scrNews = loadImage("ASSETS_NEW/Screens/newsScreen.png");

//gradients
bgGradient1 = loadImage("ASSETS_NEW/Gradients/MegaTron.png");

//ForegroundScreens
img1 = loadImage("ASSETS_NEW/Screens/logoScreen.png");
imgEmergency = loadImage("ASSETS_NEW/Screens/emergencyScreen.png");
imgChooseEmergency = loadImage("ASSETS_NEW/Screens/chooseEmergencyScreen.png");
imgSafetyProtocol = loadImage("ASSETS_NEW/Screens/safetyProtocolScreen.png");
imgProcedure = loadImage("ASSETS_NEW/Screens/procedureScreen.png");
imgAmbulance = loadImage("ASSETS_NEW/Screens/ambulanceRequestScreen.png");
imgAr = loadImage("ASSETS_NEW/Screens/arScreen.png");
imgArTutorial = loadImage("ASSETS_NEW/Screens/arTutorialScreen.png");
imgHome = loadImage("ASSETS_NEW/Screens/homeScreen.png");
imgLearn = loadImage("ASSETS_NEW/Screens/learnCatalogScreen.png");
imgThank = loadImage("ASSETS_NEW/Screens/thankScreen.png");
imgFeedback = loadImage("ASSETS_NEW/Screens/feedbackScreen.png");
imgFracture = loadImage("ASSETS_NEW/Screens/fractureScreen.png");
imgChoking = loadImage("ASSETS_NEW/Screens/chokingScreen.png");
imgChestPain = loadImage("ASSETS_NEW/Screens/chestPainsScreen.png");
imgSeizures = loadImage("ASSETS_NEW/Screens/seizuresScreen.png");
imgSnakeBite = loadImage("ASSETS_NEW/Screens/snakeBiteScreen.png");
imgFirstAid = loadImage("ASSETS_NEW/Screens/firstAidScreen.png");
imgCompany = loadImage("ASSETS_NEW/Screens/companyScreen.png");
imgBlood = loadImage("ASSETS_NEW/Screens/bloodScreen.png");
imgBloodBank = loadImage("ASSETS_NEW/Screens/bloodBankScreen.png");
imgFirstAid = loadImage("ASSETS_NEW/Screens/newsScreen.png");
imgBmi = loadImage("ASSETS_NEW/Gradients/BMI.png");

//fonts
//font1 = loadFont('ASSETS_NEW/Fonts/this.tff');

//location
    locationData =  getCurrentPosition();

}


function setup(){
  CNV = createCanvas(375,812);
  backB=new Clickable(50,50);
  backFB=new Clickable(50,50);
  lbackARB=new Clickable(50,50);
  emergencyB=new Clickable(200,200);
  notEmergencyB=new Clickable(200,500);
  infoB=new Clickable(50,50);
  newsB=new Clickable(50,50);
  learnB=new Clickable(50,50);
  feedbackB=new Clickable(50,50);
  bloodB=new Clickable(50,50);
  compB=new Clickable(50,50);
  procB1=new Clickable(50,50);
  procB2=new Clickable(50,50);
  procB3=new Clickable(50,50);
  procB4=new Clickable(50,50);
  procB5=new Clickable(50,50);
  procB6=new Clickable(50,50);
  emBackB=new Clickable(50,50);
  emStartB=new Clickable(50,50);
  ambB=new Clickable(50,50);
  ambBackB=new Clickable(50,50);
  fracB=new Clickable(50,50);
  chokeB=new Clickable(50,50);
  chestB=new Clickable(50,50);
  seizB=new Clickable(50,50);
  snakeB=new Clickable(50,50);
  firstAidB=new Clickable(50,50);
  lbackB=new Clickable(50,50);
  lARB=new Clickable(50,50);
  feedbackSubmB=new Clickable(50,50);
  bloodRequestB=new Clickable(50,50);
  bloodBankB=new Clickable(50,50);
  learnChestB=new Clickable(50,50);
  learnChokeB=new Clickable(50,50);
  learnFracB=new Clickable(50,50)
  learnSnakeB=new Clickable(50,50);
  learnSeizuresB=new Clickable(50,50);
  learnFirstAidB=new Clickable(50,50);
  play=new Clickable(50,50);
  listenB=new Clickable(50,50);
  form1 = new Form();
  //user1=new User();
  feedback1=new Feedback();
  //location
  latitudeData=locationData.latitude;
  longitudeData=locationData.longitude;
  print("Your Latitude: "+latitudeData);
  print("Your Longitude: "+longitudeData);
  text("Your Latitude: "+latitudeData,300,300);
  text("Your Longitude: "+longitudeData,300,320)

  //audio Output
  foo =   new p5.Speech();
  foo.listVoices();
  //audio Input
   
  //access to the webcam
  cam = createCapture(VIDEO);
  cam.size(370,200);
  cam.hide();
}

async function getHospital(){
  var response = await fetch("https://api.data.gov.in/resource/0dfebd78-bac4-44be-9291-025a983323f4?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10");
  var responseJSON = await response.json();
  var hp =  responseJSON.records;
  console.log(hp);
  text(hp,500,500);
}

function videoShow(xyz) {
   vid = createVideo(xyz);
  vid.size(350,200);
  vid.position(15,450); 
  vid.volume(1); 
  vid.loop();
}

function videoHide(){
  vid.remove();
}    

function gotSpeech(){
  result = foo1.resultString;
  if (foo1.resultValue){
    if (result === cmnd){
     gameState=2;
    }   
    else{     
      console.log("Failed to Listen?");
    } 
  }
}

function listen(){
  lang=navigator.language || 'en-US;'
  foo1=new p5.SpeechRec(lang,gotSpeech);
  foo1.start();
}

function draw(){ 
  
  t1--;

//textFont(font1);
if (t1 === 0 || t1<0 && gameState !== 2 && gameState !== 3_1 && gameState !== 3_12 && gameState !== 3_13 && gameState !== 3 && gameState !== 3_0 && gameState !== 4  && gameState !== 5 && gameState !== 6 && gameState !== 6_2 && gameState !== 7 && gameState !== 8 && gameState !== 5_1 && gameState !== 5_2 && gameState !== 5_3 && gameState !== 5_4 && gameState !== 5_5 && gameState !== 5_6 && gameState !== 5_0 && gameState !== 5_01 && gameState !== 5_02 && gameState !== 5_03 && gameState !== 5_04 && gameState !== 5_05 && gameState !== 5_06 && gameState !== 6_1 && gameState !== 7_1 && gameState !== 7_2 && gameState!==9){
  background(scrEmergency);
 
  gameState = 1; 

  //emergencyB.color = "#6F42C1"; 
  emergencyB.locate(40,127);  
  emergencyB.resize(300,230); 
  emergencyB.draw();

  
 // notEmergencyB.color = "#6F42C1";
  notEmergencyB.locate(36,490);
  notEmergencyB.resize(307,230); 
  notEmergencyB.draw();

  background(imgEmergency);
    }

else if (gameState === 0){
  background(scr1);
} 

emergencyB.onRelease = function(){
  gameState=2;
  background(scrChooseEmergency);
  emergencyB.hide();
  
}

notEmergencyB.onRelease = function(){
  if (first){
  gameState=3_0;
  background(bgGradient1);
  notEmergencyB.hide();
  foo.speak('Welcome');
  first = false;
  }
  else{
    gameState = 3;
    background(scrHome);
    foo.speak('Welcome Again');
    listen();
  }
}

if (gameState === 2){
  
  //procB.color = "#6F42C1";
  procB1.locate(40,250);
  procB1.resize(305,55); 
  procB1.draw();

  procB2.locate(40,340);
  procB2.resize(305,55); 
  procB2.draw();

  procB3.locate(40,435);
  procB3.resize(305,55); 
  procB3.draw();

  procB4.locate(40,525);
  procB4.resize(305,55); 
  procB4.draw();

  procB5.locate(40,615);
  procB5.resize(305,55); 
  procB5.draw();

  procB6.locate(40,705);
  procB6.resize(305,55); 
  procB6.draw();  

  //emBackB.color = "#6F42C1";
  emBackB.locate(10,10);
  emBackB.resize(25,25);
  emBackB.text= "";
  emBackB.draw();

  background(imgChooseEmergency);

  procB1.onRelease = function(){
    gameState=3_1;
    background(scrSafetyProtocol);
   procB1.hide();  
  }

  procB2.onRelease = function(){
    gameState=3_1;
    background(scrSafetyProtocol);
   procB2.hide();  
  }

  procB3.onRelease = function(){
    gameState=3_1;
    background(scrSafetyProtocol);
   procB3.hide();  
  }

  procB4.onRelease = function(){
    gameState=3_1;
    background(scrSafetyProtocol);
   procB4.hide();  
  }

  procB5.onRelease = function(){
    gameState=3_1;
    background(scrSafetyProtocol);
   procB5.hide();  
  }

  procB6.onRelease = function(){
    gameState=3_1;
    background(scrSafetyProtocol);
   procB6.hide();  
  }
   emBackB.onRelease = function(){
    gameState=1;
    background(scrEmergency);
   procB1.hide(); 
   
  }
}

if (gameState === 3_1){
  
 // emStartB.color = "#6F42C1";
  emStartB.locate(70,462);
  emStartB.resize(250,65); 
  emStartB.draw();

  //emBackB.color = "#6F42C1";
  emBackB.locate(20,710);
  emBackB.resize(25,25); 
  emBackB.text= "";
  emBackB.draw();

  ambB.locate(30,25);
  ambB.resize(300,65); 
  ambB.text= "";
  ambB.draw();

background(imgSafetyProtocol);

  emBackB.onRelease = function(){
    gameState=1;
    background(scrEmergency);
   emBackB.hide();   
  }
   emStartB.onRelease = function(){
    gameState=3_12;
    background(scrProcedure);
   emStartB.hide();  
  
  }    
  ambB.onRelease = function(){
    gameState=3_13;
    background(scrAmbulance);
       ambB.hide();
   
      }

  }
if (gameState === 3_12){
  
  emBackB.color = "#2C5364"
  emBackB.locate(100,720);
  emBackB.resize(200,50);
  emBackB.text= "";
  emBackB.draw(); 
  background(scrProcedure);
  image(cam,3,220,width,490);

}

if (gameState === 3_13){
  ambBackB.locate(10,10);
  ambBackB.resize(25,25); 
  ambBackB.text= "";
  ambBackB.draw();
background(imgAmbulance);
textSize(25);
text(latitudeData + "," + longitudeData,187,260);
getHospital(); 
  ambBackB.onRelease = function(){
    gameState=3_1;
    ambBackB.hide();      
  }
}
if (gameState === 3_0){
  form1.display();
  background(bgGradient1);
//gameState = 3;
}

if (gameState===3 ){

  infoB.color = "#B14172"
  infoB.locate(55,190 );
  infoB.resize(270,157);
  infoB.text= "Select";
  infoB.draw(); 

  newsB.color = "#B14172"
  newsB.locate(55,450 );
  newsB.resize(270,165);
  newsB.text= "Select";
  newsB.draw(); 
  
  learnB.color = "#B14172"
  learnB.locate(18,755);
  learnB.resize(40,40);
  learnB.text= ""
  learnB.draw();

  feedbackB.color = "#B14172"
  feedbackB.locate(118,755);
  feedbackB.resize(40,40);
  feedbackB.text= "";
  feedbackB.draw();

  bloodB.color = "#B14172"
  bloodB.locate(218,755);
  bloodB.resize(40,40);
  bloodB.text= "";
  bloodB.draw();

  compB.color = "#B14172"
  compB.locate(318,755);
  compB.resize(40,40);
  compB.text= "";
  compB.draw();

  listenB.color = "#B14172"
  listenB.locate(37,672);
  listenB.resize(35,33);
  listenB.text= "";
  listenB.draw();
  
  background(imgHome);

  form1.displayUserName();

}

listenB.onRelease = function(){
  listen();
 }

infoB.onRelease = function(){
   gameState= 4;
   background(bgGradient1);
   form1.displayUserInfo();
  }

newsB.onRelease = function(){
  gameState= 9;
  background(scrNews);
  }

  learnB.onRelease = function(){
    gameState= 5;
    background(scrLearn);
    
   }

   feedbackB.onRelease = function(){
    gameState= 6;
    background(scrFeedback);
    
   }

   bloodB.onRelease = function(){
    gameState= 7;
    background(scrBlood);
    
   }

   compB.onRelease = function(){
    gameState= 8;
    background(scrCompany);
   }

   fracB.onRelease = function(){
    gameState= 5_1;
    background(scrFracture);
   }

   chokeB.onRelease = function(){
    gameState= 5_2;
    background(scrChoking);
   }

   chestB.onRelease = function(){
    gameState= 5_3;
    background(scrChestPain);
   }

   snakeB.onRelease = function(){
    gameState= 5_4;
    background(scrSnakeBite);
   }

   seizB.onRelease = function(){
    gameState= 5_5;
    background(scrSeizures);
   }

   firstAidB.onRelease = function(){
    gameState= 5_6;
    background(scrFirstAid);
   }

   lbackB.onRelease = function(){
     gameState = 5;
     background(scrLearn);
   }

   lbackARB.onRelease = function(){
    gameState = 5;
    background(scrLearn);
    videoHide();
  }

   learnSnakeB.onRelease = function(){
     gameState = 5_05;
     background(scrArTutorial);
     videoShow(snake);    
   }

   learnSeizuresB.onRelease = function(){
    gameState = 5_04;
    background(scrArTutorial);
    videoShow(seiz);
  }
  
  learnFracB.onRelease = function(){
    gameState = 5_03;
    background(scrArTutorial);
    videoShow(frac);
  }
  
  learnChokeB.onRelease = function(){
    gameState = 5_02;
    background(scrArTutorial);
    videoShow(choke);
  }
  
  learnChestB.onRelease = function(){
    gameState = 5_01;
    background(scrArTutorial);
    videoShow(cpr);
  }

  learnFirstAidB.onRelease = function(){
    gameState = 5_06;
    background(scrArTutorial);
    videoShow(firstAid);
  }

   feedbackSubmB.onRelease = function(){
    gameState = 6_1;
    background(bgGradient1);
  }

  bloodRequestB.onRelease = function(){
    gameState = 7_1;
    background(bgGradient1);
  }

  bloodBankB.onRelease = function(){
    gameState = 7_2;
    background(bgGradient1);
  }

if (gameState === 4){
  background(bgGradient1);
  form1.displayUserInfo();
 
}
backFB.onRelease = function(){
  gameState =3;
  form1.hideUserInfo();
  listen();
}
if (gameState === 5){
  backB.color = "#2C5364"
  backB.locate(10,10);
  backB.resize(25,25);
  backB.text= "";
  backB.draw(); 

  fracB.color = "#2C5364"
  fracB.locate(40,328);
  fracB.resize(120,130);
  fracB.text= "";
  fracB.draw();
  
  chokeB.color = "#2C5364"
  chokeB.locate(210,328);
  chokeB.resize(120,130);
  chokeB.text= "";
  chokeB.draw(); 

  chestB.color = "#2C5364"
  chestB.locate(40,490);
  chestB.resize(120,130);
  chestB.text= "";
  chestB.draw(); 

  snakeB.color = "#2C5364"
  snakeB.locate(40,650);
  snakeB.resize(120,140);
  snakeB.text= "";
  snakeB.draw(); 

  seizB.color = "#2C5364"
  seizB.locate(210,660);
  seizB.resize(120,125);
  seizB.text= "";
  seizB.draw();
  
  firstAidB.color = "#2C5364"
  firstAidB.locate(215,495);
  firstAidB.resize(127,130);
  firstAidB.text= "";
  firstAidB.draw();

  background(imgLearn);
   }

   if (gameState === 5_1){
    lbackB.color = "#2C5364"
    lbackB.locate(10,10);
    lbackB.resize(25,25);
    lbackB.text= "";
    lbackB.draw(); 

    learnFracB.color = "#2C5364"
    learnFracB.locate(65,710);
    learnFracB.resize(245,50);
    learnFracB.text= "";
    learnFracB.draw(); 
    
    background(imgFracture);
   }

   if (gameState === 5_2){
    lbackB.color = "#2C5364"
    lbackB.locate(10,10);
    lbackB.resize(25,25);
    lbackB.text= "";
    lbackB.draw(); 

    learnChokeB.color = "#2C5364"
    learnChokeB.locate(65,710);
    learnChokeB.resize(245,50);
    learnChokeB.text= "";
    learnChokeB.draw(); 

    background(imgChoking);
   }

   if (gameState === 5_3){
    lbackB.color = "#2C5364"
    lbackB.locate(10,10);
    lbackB.resize(25,25);
    lbackB.text= "";
    lbackB.draw(); 

    learnChestB.color = "#2C5364"
    learnChestB.locate(65,710);
    learnChestB.resize(245,50);
    learnChestB.text= "";
    learnChestB.draw(); 

    background(imgChestPain);
   }

   if (gameState === 5_4){
    lbackB.color = "#2C5364"
    lbackB.locate(10,10);
    lbackB.resize(25,25);
    lbackB.text= "";
    lbackB.draw(); 

    learnSeizuresB.color = "#2C5364"
    learnSeizuresB.locate(65,710);
    learnSeizuresB.resize(245,50);
    learnSeizuresB.text= "";
    learnSeizuresB.draw(); 

    background(imgSeizures)
   }

   if (gameState === 5_5){
    lbackB.color = "#2C5364"
    lbackB.locate(10,10);
    lbackB.resize(25,25);
    lbackB.text= "";
    lbackB.draw(); 

    learnSnakeB.color = "#2C5364"
    learnSnakeB.locate(65,710);
    learnSnakeB.resize(245,50);
    learnSnakeB.text= "";
    learnSnakeB.draw(); 

    background(imgSnakeBite);
   }

   if (gameState === 5_6){
    lbackB.color = "#2C5364"
    lbackB.locate(10,10);
    lbackB.resize(25,25);
    lbackB.text= "";
    lbackB.draw(); 

    learnFirstAidB.color = "#2C5364"
    learnFirstAidB.locate(65,710);
    learnFirstAidB.resize(245,50);
    learnFirstAidB.text= "";
    learnFirstAidB.draw(); 

    background(scrFirstAid);
   }

   if (gameState === 5_01){
    lbackARB.color = "#2C5364"
    lbackARB.locate(10,10);
    lbackARB.resize(25,25);
    lbackARB.text= "";
    lbackARB.draw(); 
   
    background(imgArTutorial);

    }
   
   if (gameState === 5_02){
    lbackARB.color = "#2C5364"
    lbackARB.locate(10,10);
    lbackARB.resize(25,25);
    lbackARB.text= "";
    lbackARB.draw(); 
    
    background(imgArTutorial);
    
   }
   
   if (gameState === 5_03){
    lbackARB.color = "#2C5364"
    lbackARB.locate(10,10);
    lbackARB.resize(25,25);
    lbackARB.text= "";
    lbackARB.draw(); 
    
    background(imgArTutorial);
    
   }
   
   if (gameState === 5_04){
    lbackARB.color = "#2C5364"
    lbackARB.locate(10,10);
    lbackARB.resize(25,25);
    lbackARB.text= "";
    lbackARB.draw(); 
    
    background(imgArTutorial);
    
   }
   
   if (gameState === 5_05){
    lbackARB.color = "#2C5364"
    lbackARB.locate(10,10);
    lbackARB.resize(25,25);
    lbackARB.text= "";
    lbackARB.draw(); 
    
    background(imgArTutorial);
     
   }

   if (gameState === 5_06){
    lbackARB.color = "#2C5364"
    lbackARB.locate(10,10);
    lbackARB.resize(25,25);
    lbackARB.text= "";
    lbackARB.draw(); 
    
    background(imgArTutorial);
     
   }
  
   if (gameState === 6){
    backB.color = "#2C5364"
    backB.locate(10,10);
    backB.resize(25,25);
    backB.text= "";
    backB.draw(); 

    feedbackSubmB.color = "#2C5364"
    feedbackSubmB.locate(50,370);
    feedbackSubmB.resize(300,60);
    feedbackSubmB.text= "";
    feedbackSubmB.draw(); 

background(imgFeedback);
  }

  if (gameState === 6_1){
    
    backB.color = "#2C5364"
    backB.locate(10,10);
    backB.resize(25,25);
    backB.text= "";
    backB.draw(); 
    background(bgGradient1);
    feedback1.display();
 
//display feedback form here*****
  }
  if (gameState === 6_2){
  backB.color = "#2C5364"
    backB.locate(80,680);
    backB.resize(230,80);
    backB.text= "";
    backB.draw(); 
    background(scrThank);
  }

  if (gameState === 7){
    backB.color = "#2C5364"
  backB.locate(10,10);
  backB.resize(25,25);
  backB.text= "";
  backB.draw(); 

  bloodRequestB.color = "#2C5364"
  bloodRequestB.locate(20,330);
  bloodRequestB.resize(150,220);
  bloodRequestB.text= "";
  bloodRequestB.draw(); 

  bloodBankB.color = "#2C5364"
  bloodBankB.locate(200,550);
  bloodBankB.resize(150,220);
  bloodBankB.text= "";
  bloodBankB.draw(); 

  background(imgBlood);
  }

  if (gameState === 7_1){
    backB.color = "#2C5364"
    backB.locate(10,10);
    backB.resize(25,25);
    backB.text= "";
    backB.draw(); 
    textSize(44);
    fill("CadetBlue");
    text("Work In Progress",180,200);
    //display blook bank database here*****
  }

  if (gameState === 7_2){
    backB.color = "#2C5364"
    backB.locate(10,10);
    backB.resize(25,25);
    backB.text= "";
    backB.draw(); 
    textSize(44);
    fill("CadetBlue");
    text("Work In Progress",180,200);
    //display user request form here*****
  }

  if (gameState === 8){
    backB.color = "#2C5364"
  backB.locate(10,10);
  backB.resize(25,25);
  backB.text= "";
  backB.draw(); 
  background(scrCompany);
  }

  if (gameState === 9){
    backB.color = "#2C5364"
  backB.locate(10,10);
  backB.resize(25,25);
  backB.text= "";
  backB.draw(); 
  background(scrNews);
  }
    backB.onRelease = function(){
    gameState= 3;
    background(scrHome);
    listen();    
   }
}



