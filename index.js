function isIE(){var b=document.createElement('b');b.innerHTML='<!--[if lte IE 8]><i></i><![endif]-->';return b.getElementsByTagName('i').length===1};function CreateSnow(snowBox,src,style){this.snowBox=document.getElementById(snowBox);this.snowStyle=Math.ceil(Math.random()*style);this.maxLeft=this.snowBox.offsetWidth-Math.random()*5+3;this.maxTop=this.snowBox.offsetHeight-Math.random()*5+3;this.left=this.snowBox.offsetWidth*Math.random();this.top=this.snowBox.offsetHeight*Math.random();this.angle=1.1+0.8*Math.random();this.minAngle=1.1;this.maxAngle=1.9;this.angleDelta=0.01*Math.random();this.speed=1.4+Math.random();this.createEle(src)};CreateSnow.prototype={createEle:function(baseSrc){var srcIndex=baseSrc.lastIndexOf('.'),src=baseSrc.substring(0,srcIndex)+this.snowStyle+baseSrc.substring(srcIndex,baseSrc.length);var image=new Image();image.src=src;this.ele=document.createElement("img");this.ele.setAttribute('src',src);this.ele.style.position="absolute";this.ele.style.zIndex="99";this.snowBox.appendChild(this.ele);var img=this.ele;image.onload=function(){imgW=image.width;img.setAttribute('width',Math.ceil(imgW*(0.1+Math.random())));if(isIE()){imgH=image.height;img.setAttribute('height',Math.ceil(imgH*(0.1+Math.random())))}}},move:function(){if(this.angle<this.minAngle||this.angle>this.maxAngle){this.angleDelta=-this.angleDelta}this.angle+=this.angleDelta;this.left+=this.speed*Math.cos(this.angle*Math.PI);this.top-=this.speed*Math.sin(this.angle*Math.PI);if(this.left<0){this.left=this.maxLeft}else if(this.left>this.maxLeft){this.left=0}if(this.top>this.maxTop){this.top=0}this.ele.style.left=this.left+'px';this.ele.style.top=this.top+'px'}};function goSnow(snowBox,src,num,style){var snowArr=[];for(var j=0;j<num;j++){snowArr.push(new CreateSnow(snowBox,src,style))}var makeSnowtime=setInterval(function(){for(var i=snowArr.length-1;i>=0;i--){if(snowArr[i]){snowArr[i].move()}}},40)};window.onload=function(){var snowBox='snowBox',src='./img/snow.png',num=16,style=2;goSnow(snowBox,src,num,style)};