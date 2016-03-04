

var base={
	
	randNumb:"",
	randName:"",
	randBool:"",
	randTemplate:"",
	randID:"",
	answ:"",
	randomQuestion:"",
	arr:[],
}

base.getRandomName = function(){
var names=[["Dorsey"],["Trojan"],["Hortense"],["Chavous"],["Randa"],["Kemmer"],["Nelle"],["Vives"],["Kristie"],["Spang"],["Rickie"],["Whitehouse"],["Jay"],["Ells"],["Fredda"],["Nardi"],["Deandrea"],["Rosado"],["Eartha"],["Fusco"],["Michele"],["Beyer"],["Dacia"],["Mclennon"],["Lenard"],["Palumbo"],["Homer"],["Kron"],["Kris"],["Saragosa"],["Nia"],["Tompkins"],["Amos"],["Hargreaves"],["Lawana"],["Mangum"],["Danna"],["Raygoza"],["Mei"],["Junious"],["Megan"],["Membreno"],["Ignacio"],["Anguiano"],["Maureen"],["Beaudet"],["Livia"],["Heaney"],["Isela"],["Mikels"],["Magda"],["Maxton"],["Enrique"],["Kinley"],["Latina"],["Eifert"],["Felecia"],["Rodrique"],["Kazuko"],["Crean"]];
var randint=this.getRandomInt(0,names.length);

return '"'+names[randint]+'"';
}

base.getRandomNumb = function(){
	return this.getRandomInt(0,9);
}

base.getRandomBool = function(){

var bool=[["true"],["false"],["false"]];
var randint=this.getRandomInt(0,bool.length-1);
return bool[randint];
}


base.getRandomTemplate = function(){

var tmpl=[["NONE"],["SOME"],["ID"]];
var randint=this.getRandomIntTemp(0,tmpl.length);
return tmpl[randint];
}

base.getRandomID = function(){

return this.getRandomNumb()+""+this.getRandomNumb()+""+this.getRandomNumb()+""+this.getRandomNumb()+""+this.getRandomNumb();

}


base.getRandomIntTemp = function(min, max) {
	 
	 var i=0;
	 
	 while(i<this.arr.length){
		 
		 if(this.arr[i]==""){
			 
			 var temp=Math.floor(Math.random() * (max - min)) + min;
			 var j=0;
			 while(j<this.arr.length){
				 if(this.arr[j]==temp){
					 j++;
				 }else{
					 this.arr[i]=temp;
					 return temp;
				 }
	
			 }
		 }
		 i++;
		 
	 }
	 
	 this.arr=[];
	 
	this.arr[0]=Math.floor(Math.random() * (max - min)) + min;
	
	return this.arr[0];

}







/*
*Generates a random integer
*/
 base.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

 base.clear = function(){
	
	this.randNumb="";
	this.randName="";
	this.randBool="";
	this.randTemplate="";
	 this.randID="";
	 this.answ="";
	 this.randomQuestion="";
 }

 base.getRandomQuestion = function(){
	 
	 var type=this.getRandomTemplate();
	 
	 if(type=="NONE"){
		this.answ="2";
		return" val s = Name("+this.getRandomName()+", NONE, "+this.getRandomName()+")";
	 }
	 
	 else if(type=="SOME"){
		this.answ="1";
		return" val s = Name("+this.getRandomName()+", SOME "+this.getRandomName()+" , "+this.getRandomName()+")";
	 }
	 
	  else if(type=="ID"){
		 
		 this.answ="3";
		return" val s = ID("+this.getRandomID()+")";
		 
	 }
 }






base.generateListAnswers = function(){
	

	this.randNumb=this.getRandomNumb();
	this.randName=this.getRandomName();
	this.randBool=this.getRandomBool();
	
	this.randomQuestion=this.getRandomQuestion();
	

}

base.generateResult= function(){
	this.clear();
	this.generateListAnswers();
	

	
}










