var colorsBlue =("acadbc-9b9ece-6665dd-473bf0-000500".split("-").map(a=>"#"+a))
var colorsRed =("cc5803-e2711d-ff9505-ffb627-ffc971".split("-").map(a=>"#"+a))
var colorsGreen =("f7fff6-bcebcb-87d68d-93b48b-8491a3".split("-").map(a=>"#"+a))
function planet(x,y,r=30){
push()
	translate(width/2,height/2)
//這裡可以設定粒子中心位置
	let lastX ,lastR,lastAng
//for 這邊可以調整數量
	for(var i=0;i<80;i++){
		let cc = color(colorsBlue[int(noise(frameCount/10,i)*colorsBlue.length*10)%colorsBlue.length])
		cc.setAlpha(150)
		fill(cc)
		noStroke()
//這邊的noStroke可以把粒子的邊框去除 會比較好看
		let shadowCC=color(cc)
		shadowCC.setAlpha(255)
		drawingContext.shadowColor = color(cc);
		drawingContext.shadowBlur =30;
		let xx = noise(i*2,frameCount/100+mouseX/1000)*r*noise(i)*2
	  let ang = noise(i,frameCount/800,500+mouseY/1000,500)*10*PI
		let rr = noise(i,500,frameCount/50+mouseY/1000)*50*(15/(sqrt(xx)+1))
		ellipse(xx*cos(ang),xx*sin(ang),rr)
		if (lastX && random()<0.1){
			//這邊是提供一個線條效果,軌跡的感覺
			push()
			stroke(255,50)
			line(xx*cos(ang),xx*sin(ang),lastX*cos(lastAng),lastX*sin(lastAng))
			pop()
		} 
		// if (random()<0.5){
		// 	//這邊是提供一個線條效果,軌跡的感覺
		// 	push()
		// 	stroke(255,50)
		// 	noFill()
		// 	// line(xx*cos(ang),xx*sin(ang),
		// 	// 		 xx*cos(ang-1),xx*sin(ang-1))
		// 	arc(0,0,xx,xx,ang,ang+PI+noise(i,frameCount/200))
		// 	pop()  
		// 	//用Line的效果很像星座,但用arc的效果就是一種扇形環繞的感覺
		// }
		let cc2 = colorsRed[int(noise(frameCount/100,i)*colorsRed.length*10)%colorsRed.length]
		fill(cc2)
		let cc3 = colorsGreen[int(noise(frameCount/100,i)*colorsGreen.length*5)%colorsGreen.length]
		fill(cc3)
		
		if (random()<0.5){
			//這邊是提供一個線條效果,軌跡的感覺
			push()
			stroke(cc2)
			noFill()
			// line(xx*cos(ang),xx*sin(ang),
			// 		 xx*cos(ang-1),xx*sin(ang-1))
			arc(0,0,xx*2,xx*2,ang*2,ang*2+PI/4+noise(i,frameCount/200))
			pop()  
		}
		//我把前面arc的部分剪到cc2後面 可以有不同顏色的扇形線 只要用noFill就可以只留下線,沒有的話就是一塊一塊的扇形
		drawingContext.shadowColor = color(cc2);
		drawingContext.shadowBlur = 30;
		push()
		rectMode(CENTER)
			translate(xx*cos(ang*2),xx*sin(ang*2))
			rotate(ang*3)
			rect(0,0,sqrt(rr)*sin(frameCount/2+i)*2)
//rect是長方形的意思
		pop()
		lastX=xx
		lastR=rr
		lastAng=ang
		
	
	}
	pop()
}
function setup() {
// 	overAllTexture=createGraphics(width,height)
// 	overAllTexture.loadPixels()

// 	for(var i=0;i<width+50;i++){
// 		for(var o=0;o<height+50;o++){
// 			overAllTexture.set(i,o,color(100<noise(i/3,o/3,i*o/50)*random([0,10,20])))
// 			overAllTexture.updatePixels();
// 		}
		
//搞不懂怎麼上材質	
		
	createCanvas(800,800);
	background(100);
	fill("0f1954")
	rect(0,0,width,height)
	blendMode(SCREEN)
	// planet(width/2,height/2,100)
	
}
function draw() {
	blendMode(BLEND)
	fill(4, 11, 60,60)
	rect(0,0,width,height)
	blendMode(SCREEN)
	planet(windowWidth/2,windowHeight/2,340)
	push()
	// blendMode(overAllTexture,0,0)
	pop()
stroke(255,45)
noStroke()
for(var i=0;i<width;i+=50){
	fill(200,map(i,width,width,0,10))
	ellipse(width/2,height/2,pow(i,0.9)*3)
//這邊提供一個漸層的底色
}

blendMode(BLEND)
for(var i=0;i<width;i+=10){
	stroke(colorsRed[3])
	line(i,20,i,10+(i/10%5==0?10:0))
	line(20,i,10+(i/10%5==0?10:0),i)
//乾這尺超難 怎麼想的到
	point(i,i)
}
noFill()
strokeWeight(3)
for(var i=0;i<5;i++){
let aa = noise(i,frameCount/10)*2
arc(width/2,height/2,width-100-i*10,height-100-i*20,aa,aa+noise(i,frameCount/20))
//這邊後面第五跟第六個參數代表前後端的隨機變化,沒有PI的話線會不見,沒除2的話會太長
//後面直接做一個aa變數 讓他短一點
	
	}
	strokeWeight(2)
}