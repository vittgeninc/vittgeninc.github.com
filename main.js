(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"main_atlas_", frames: [[2961,1158,235,436],[767,1565,79,116],[3628,0,395,677],[0,0,2305,1330],[3636,1474,429,91],[3602,1363,426,109],[0,1565,430,79],[3198,1474,436,106],[2356,1013,603,726],[2961,1013,1059,143],[3628,679,304,295],[3427,1158,173,274],[3999,1158,97,149],[681,1565,84,137],[583,1565,96,146],[3833,1158,164,154],[3934,848,153,157],[3934,679,159,167],[432,1565,149,155],[2307,0,1319,1011],[0,1332,2354,231],[3198,1158,227,276],[4025,0,20,21],[3602,1158,229,203]]}
];


// symbols:



(lib.sprite1_0000_오른쪽클라이머 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0001_화산스키선수 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0003_입다문아저씨 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0005_무대 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0006_조선룡불꽃4 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0007_조선룡불꽃3 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0008_조선룡불꽃2 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0009_조선룡불꽃1 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0010_조선룡 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0011_구름 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0012_비트겐 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0013_왼쪽고양이 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0014_취한꽃 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0015_웃는꽃 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0016_짜증나는꽃 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0018_화산폭발효과4 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0019_화산폭발효과3 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0020_화산폭발효과2 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0021_화산폭발효과1 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0022_화산 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0023_바닥 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0025_고라니 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.독침 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.독침맨png복사본 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.트윈6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.독침();
	this.instance.parent = this;
	this.instance.setTransform(-10,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10.5,20,21);


(lib.트윈5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.독침맨png복사본();
	this.instance.parent = this;
	this.instance.setTransform(-98.2,-87,0.858,0.858);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.2,-87,196.5,174.1);


(lib.트윈2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.sprite1_0000_오른쪽클라이머();
	this.instance.parent = this;
	this.instance.setTransform(-53.3,-98.8,0.454,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.3,-98.8,106.6,197.8);


(lib.트윈1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.sprite1_0001_화산스키선수();
	this.instance.parent = this;
	this.instance.setTransform(-16.3,-24,0.414,0.414);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-24,32.7,48.1);


(lib.심볼3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.sprite1_0015_웃는꽃();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.423,0.423);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.6,58);


(lib.심볼2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.sprite1_0016_짜증나는꽃();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.423,0.423);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.심볼2, new cjs.Rectangle(0,0,40.6,61.8), null);


(lib.심볼1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.sprite1_0014_취한꽃();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.423,0.423);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.1,63.1);


(lib.volcano = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 불꽃
	this.instance = new lib.sprite1_0021_화산폭발효과1();
	this.instance.parent = this;
	this.instance.setTransform(311,132,0.418,0.418);

	this.instance_1 = new lib.sprite1_0018_화산폭발효과4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(308,133,0.418,0.418);

	this.instance_2 = new lib.sprite1_0020_화산폭발효과2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(308,127,0.418,0.418);

	this.instance_3 = new lib.sprite1_0019_화산폭발효과3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(309,131,0.418,0.418);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// 산
	this.instance_4 = new lib.sprite1_0022_화산();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,596.2,457);


(lib.team = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var g = this;
		var v = 0.005;
		g.scaleY = 1
		function always(){
			g.scaleX = 1 / g.scaleY;
			v -= (g.scaleY - 1)*0.1;
			v *= 0.98;
			g.scaleY += v;
			if( Math.abs(1-g.scaleY) + Math.abs(v) < 0.0002 ){
				v += 0.07;
			}	
		}
		setInterval(always,25);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 레이어_1
	this.instance = new lib.sprite1_0012_비트겐();
	this.instance.parent = this;
	this.instance.setTransform(-106,-156,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.team, new cjs.Rectangle(-106,-156,205.2,199.1), null);


(lib.Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.sprite1_0003_입다문아저씨();
	this.instance.parent = this;
	this.instance.setTransform(-134.3,-230.2,0.68,0.68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.71,scaleY:0.71,x:-140,y:-240},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.3,-230.2,268.7,460.5);


(lib.Gorany = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var g = this;
		var ground = 860;
		var vy = 0
		function jump(e){
			if(g.y < ground){
			    g.scaleY = 1.1;
				g.y += vy*2.5;
				vy += 0.12;
				g.x -= 3;
				if(g.x<0) g.x+=1500;
			}else{
				g.scaleY -= vy * 0.01;
				if(g.scaleY < 0.7){g.scaleY = 0.7; vy *= -0.3;}
				if(g.scaleY > 1.1) g.y += vy;
				vy -= 0.12;
			}
			g.scaleX = 1 / g.scaleY;
		}
		setInterval(jump,25);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 레이어_1
	this.instance = new lib.sprite1_0025_고라니();
	this.instance.parent = this;
	this.instance.setTransform(-84,-170,0.634,0.634);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Gorany, new cjs.Rectangle(-84,-170,144,175), null);


(lib.dinosaur = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_46 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(46).call(this.frame_46).wait(1));

	// 레이어_1
	this.instance = new lib.sprite1_0010_조선룡();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-7},0).wait(1).to({y:-13},0).wait(1).to({y:-18},0).wait(1).to({y:-22},0).wait(1).to({y:-25},0).wait(1).to({y:-27},0).wait(1).to({y:-28},0).wait(2).to({y:-27},0).wait(1).to({y:-25},0).wait(1).to({y:-22},0).wait(1).to({y:-18},0).wait(1).to({y:-13},0).wait(1).to({y:-7},0).wait(1).to({y:0},0).wait(3).to({y:-7},0).wait(1).to({y:-13},0).wait(1).to({y:-18},0).wait(1).to({y:-22},0).wait(1).to({y:-25},0).wait(1).to({y:-27},0).wait(1).to({y:-28},0).wait(2).to({y:-27},0).wait(1).to({y:-25},0).wait(1).to({y:-22},0).wait(1).to({y:-18},0).wait(1).to({y:-13},0).wait(1).to({y:-7},0).wait(1).to({y:0},0).wait(15));

	// 레이어_2
	this.instance_1 = new lib.sprite1_0009_조선룡불꽃1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(232,71,0.455,0.455);

	this.instance_2 = new lib.sprite1_0007_조선룡불꽃3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(234,63,0.455,0.455);

	this.instance_3 = new lib.sprite1_0008_조선룡불꽃2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(232,75,0.455,0.455);

	this.instance_4 = new lib.sprite1_0006_조선룡불꽃4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(233,71,0.455,0.455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},34).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286.2,344.6);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var g = this;
		function always(){
			g.x -= 1.5;
			g.y += Math.sin(g.x / 20)* 0.8;
			if(g.x<-300) g.x += 1900;
		}
		setInterval(always, 50);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 레이어_1
	this.instance = new lib.sprite1_0011_구름();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.495,0.495);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud, new cjs.Rectangle(0,0,523.8,70.8), null);


(lib.ski = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.트윈1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-11.6,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-39.5,y:75},3).to({rotation:30,x:-165.2,y:196},4).to({rotation:75,x:-302.8,y:264.2},3).to({x:-523.2},3).to({x:346.8,y:274.3},1).to({startPosition:0},30).to({x:225.5,y:156.1},1).to({rotation:105,x:160.9,y:99.3},3).to({regX:0.1,regY:-0.1,rotation:120,x:132,y:53.9},3).to({x:121.6,y:26.3},2).to({x:112.3,y:0},2).to({x:94.7,y:-169.8},5).to({x:41.6,y:-215.3},1).to({x:35.3},29).to({regX:0,regY:0,rotation:15,x:29.6,y:-119.8},1).to({x:29.5,y:-10.6},3).to({regY:-0.1,rotation:60,x:29.6,y:-10.7},1).to({x:1.1,y:-1.7},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-22,32.7,48.1);


(lib.movingFlower2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.심볼3();
	this.instance.parent = this;
	this.instance.setTransform(20.4,61.8,1,1.008,0,-7.3,0,19.8,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:17.8,regY:29,skewX:-6.3,x:14.9,y:29.6},0).wait(1).to({scaleY:1.01,skewX:-5.2,x:15.5},0).wait(1).to({skewX:-4,x:16.1},0).wait(1).to({skewX:-2.9,x:16.8,y:29.5},0).wait(1).to({skewX:-1.8,x:17.4},0).wait(1).to({skewX:-0.6,x:18,y:29.4},0).wait(1).to({skewX:0.5,x:18.7},0).wait(1).to({skewX:1.6,x:19.3},0).wait(1).to({skewX:2.8,x:19.9,y:29.5},0).wait(1).to({scaleY:1.01,skewX:3.9,x:20.6},0).wait(1).to({skewX:5,x:21.2},0).wait(1).to({skewX:6.2,x:21.8,y:29.6},0).wait(1).to({skewX:7.3,x:22.4,y:29.7},0).wait(1).to({skewX:8.4,x:23.1,y:29.8},0).wait(1).to({skewX:7.3,x:22.5,y:29.7},0).wait(1).to({skewX:6.2,x:21.8,y:29.6},0).wait(1).to({skewX:5.1,x:21.3,y:29.5},0).wait(1).to({skewX:4,x:20.6},0).wait(1).to({skewX:2.9,x:20},0).wait(1).to({skewX:1.8,x:19.4,y:29.4},0).wait(1).to({skewX:0.7,x:18.7},0).wait(1).to({scaleY:1.01,skewX:-0.4,x:18.1},0).wait(1).to({skewX:-1.5,x:17.6},0).wait(1).to({skewX:-2.6,x:16.9,y:29.5},0).wait(1).to({skewX:-3.8,x:16.3},0).wait(1).to({skewX:-4.9,x:15.7},0).wait(1).to({skewX:-6,x:15.1,y:29.6},0).wait(1).to({skewX:-7.1,x:14.4,y:29.7},0).wait(1).to({skewX:-8.2,x:13.8,y:29.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,0.8,43,58);


(lib.movingFlower1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.심볼1();
	this.instance.parent = this;
	this.instance.setTransform(20.3,61.8,1,1.008,0,-7.3,0,19.8,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:20.5,regY:31.5,skewX:-6.3,x:17.8,y:32.1},0).wait(1).to({scaleY:1.01,skewX:-5.2,x:18.4},0).wait(1).to({skewX:-4,x:19,y:32},0).wait(1).to({skewX:-2.9,x:19.6},0).wait(1).to({skewX:-1.8,x:20.1,y:31.9},0).wait(1).to({skewX:-0.6,x:20.7},0).wait(1).to({skewX:0.5,x:21.3},0).wait(1).to({skewX:1.6,x:21.9},0).wait(1).to({skewX:2.8,x:22.5},0).wait(1).to({scaleY:1.01,skewX:3.9,x:23.1,y:32},0).wait(1).to({skewX:5,x:23.6},0).wait(1).to({skewX:6.2,x:24.2,y:32.1},0).wait(1).to({skewX:7.3,x:24.8},0).wait(1).to({skewX:8.4,x:25.4,y:32.2},0).wait(1).to({skewX:7.3,x:24.8,y:32.1},0).wait(1).to({skewX:6.2,x:24.3},0).wait(1).to({skewX:5.1,x:23.7,y:32},0).wait(1).to({skewX:4,x:23.1},0).wait(1).to({skewX:2.9,x:22.5,y:31.9},0).wait(1).to({skewX:1.8,x:21.9},0).wait(1).to({skewX:0.7,x:21.3},0).wait(1).to({scaleY:1.01,skewX:-0.4,x:20.8},0).wait(1).to({skewX:-1.5,x:20.3},0).wait(1).to({skewX:-2.6,x:19.7},0).wait(1).to({skewX:-3.8,x:19.1,y:32},0).wait(1).to({skewX:-4.9,x:18.5},0).wait(1).to({skewX:-6,x:18,y:32.1},0).wait(1).to({skewX:-7.1,x:17.4,y:32.2},0).wait(1).to({skewX:-8.2,x:16.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,0.7,49.1,63.1);


(lib.movingFlower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.심볼2();
	this.instance.parent = this;
	this.instance.setTransform(20.4,61.8,1,1.008,0,-7.3,0,19.9,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:20.3,regY:30.9,skewX:-6.3,x:17.5,y:31.4},0).wait(1).to({scaleY:1.01,skewX:-5.2,x:18.1},0).wait(1).to({skewX:-4,x:18.7},0).wait(1).to({skewX:-2.9,x:19.3,y:31.3},0).wait(1).to({skewX:-1.8,x:19.9},0).wait(1).to({skewX:-0.6,x:20.5},0).wait(1).to({skewX:0.5,x:21},0).wait(1).to({skewX:1.6,x:21.6},0).wait(1).to({skewX:2.8,x:22.3},0).wait(1).to({scaleY:1.01,skewX:3.9,x:22.8},0).wait(1).to({skewX:5,x:23.4,y:31.4},0).wait(1).to({skewX:6.2,x:24.1},0).wait(1).to({skewX:7.3,x:24.7,y:31.5},0).wait(1).to({skewX:8.4,x:25.2},0).wait(1).to({skewX:7.3,x:24.6},0).wait(1).to({skewX:6.2,x:24.1,y:31.4},0).wait(1).to({skewX:5.1,x:23.5},0).wait(1).to({skewX:4,x:22.9,y:31.3},0).wait(1).to({skewX:2.9,x:22.3},0).wait(1).to({skewX:1.8,x:21.7},0).wait(1).to({skewX:0.7,x:21.2},0).wait(1).to({scaleY:1.01,skewX:-0.4,x:20.6},0).wait(1).to({skewX:-1.5,x:20},0).wait(1).to({skewX:-2.6,x:19.4},0).wait(1).to({skewX:-3.8,x:18.8},0).wait(1).to({skewX:-4.9,x:18.2},0).wait(1).to({skewX:-6,x:17.7,y:31.4},0).wait(1).to({skewX:-7.1,x:17.1,y:31.5},0).wait(1).to({skewX:-8.2,x:16.5,y:31.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,0.7,48.5,61.8);


(lib.climer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_4
	this.instance = new lib.트윈5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1421.7,689.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},35).to({y:530},8).to({scaleY:1.01,skewX:-8.8},1).to({regX:-0.1,scaleY:1.04,skewX:16.1,x:-1421.8},1).to({scaleY:1,skewX:5.6},1).to({scaleY:1,skewX:-1.3},1).to({skewX:-1.3},1).to({y:684.9},14).wait(52));

	// 레이어_5
	this.instance_1 = new lib.트윈6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1069,210.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1283,y:642.6},2).to({startPosition:0},33).to({startPosition:0},7).to({startPosition:0},1).to({startPosition:0},1).to({x:-1295.4,y:449.2},1).to({regX:0.2,regY:-0.5,scaleX:2.35,scaleY:0.7,rotation:160.7,x:-1246.7,y:425.6},1).to({x:-23.3,y:-56.6},7).to({x:-523.4,y:689.4},1).to({_off:true},26).wait(34));

	// 레이어_1
	this.instance_2 = new lib.트윈2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-22.5,667.9,1.26,1.26);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-69},54).to({rotation:30,x:-22.4},2).to({regX:-0.1,rotation:75,x:-46.5,y:16},3).to({regX:0,rotation:156.7,x:-46.6,y:197.5},3).to({regX:-0.1,rotation:261.7,y:446.4},3).to({rotation:358.2,x:-46.5,y:746.5},3).to({_off:true},1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1520,200,1564.7,592.4);


// stage content:
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 아저씨
	this.instance = new lib.Main();
	this.instance.parent = this;
	this.instance.setTransform(781.3,745.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.climer();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1534.3,415.9);

	this.instance_2 = new lib.sprite1_0005_무대();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-71,-44,0.739,0.767);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// flower
	this.instance_3 = new lib.movingFlower2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(378.4,886.8,1.704,1.704,0,0,0,14.1,31.3);

	this.instance_4 = new lib.movingFlower1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1035.2,874.6,1.704,1.704,0,0,0,17.2,32.1);

	this.instance_5 = new lib.movingFlower();
	this.instance_5.parent = this;
	this.instance_5.setTransform(603.5,811.8,1.704,1.704,0,0,0,20.4,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// 공룡
	this.instance_6 = new lib.dinosaur();
	this.instance_6.parent = this;
	this.instance_6.setTransform(428.3,603.9,1.592,1.592,0,0,0,143.2,172.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// gorany
	this.instance_7 = new lib.team();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1274.5,948.3,1.588,1.588);

	this.clip_mc = new lib.Gorany();
	this.clip_mc.name = "clip_mc";
	this.clip_mc.parent = this;
	this.clip_mc.setTransform(1610.9,697.1,1.588,1.588);

	this.instance_8 = new lib.ski();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1089.8,432.2,1.588,1.588,0,0,0,16.4,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.clip_mc},{t:this.instance_7}]}).wait(1));

	// 화산
	this.instance_9 = new lib.sprite1_0013_왼쪽고양이();
	this.instance_9.parent = this;
	this.instance_9.setTransform(526,1043,0.747,0.747);

	this.instance_10 = new lib.volcano();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1070.3,458.4,1.704,1.704,0,0,0,298.2,228.5);

	this.instance_11 = new lib.sprite1_0023_바닥();
	this.instance_11.parent = this;
	this.instance_11.setTransform(12,828,0.643,0.643);

	this.instance_12 = new lib.cloud();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1706.1,423.9,1.588,1.588,0,0,0,261.9,35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(723,456,2193,1291.7);
// library properties:
lib.properties = {
	id: '49B61085D53CCC44B86B0C1022297DD9',
	width: 1588,
	height: 1000,
	fps: 14,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/main_atlas_.png?1537114745301", id:"main_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['49B61085D53CCC44B86B0C1022297DD9'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;