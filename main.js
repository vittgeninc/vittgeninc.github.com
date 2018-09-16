(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"main_atlas_", frames: [[3628,0,395,677],[0,0,2305,1330],[3628,898,429,91],[3628,679,426,109],[3628,991,430,79],[3628,790,436,106],[2356,1013,603,726],[2961,1182,97,149],[3541,1013,84,137],[3443,1013,96,146],[3122,1013,164,154],[3288,1013,153,157],[2961,1013,159,167],[3122,1169,149,155],[2307,0,1319,1011],[0,1332,2354,231]]}
];


// symbols:



(lib.sprite1_0003_입다문아저씨 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0005_무대 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0006_조선룡불꽃4 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0007_조선룡불꽃3 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0008_조선룡불꽃2 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0009_조선룡불꽃1 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0010_조선룡 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0014_취한꽃 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0015_웃는꽃 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0016_짜증나는꽃 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0018_화산폭발효과4 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0019_화산폭발효과3 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0020_화산폭발효과2 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0021_화산폭발효과1 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0022_화산 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.sprite1_0023_바닥 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(15);
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


(lib.movingFlower2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.심볼3();
	this.instance.parent = this;
	this.instance.setTransform(20.4,61.8,1,1.008,0,-7.3,0,19.9,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:17.8,regY:29,skewX:-6.3,x:14.8,y:29.5},0).wait(1).to({scaleY:1.01,skewX:-5.2,x:15.4},0).wait(1).to({skewX:-4,x:16},0).wait(1).to({skewX:-2.9,x:16.7,y:29.4},0).wait(1).to({skewX:-1.8,x:17.3},0).wait(1).to({skewX:-0.6,x:18,y:29.3},0).wait(1).to({skewX:0.5,x:18.6},0).wait(1).to({skewX:1.6,x:19.2},0).wait(1).to({skewX:2.8,x:19.9,y:29.4},0).wait(1).to({scaleY:1.01,skewX:3.9,x:20.5},0).wait(1).to({skewX:5,x:21.1},0).wait(1).to({skewX:6.2,x:21.8,y:29.5},0).wait(1).to({skewX:7.3,x:22.4,y:29.6},0).wait(1).to({skewX:8.4,x:23,y:29.7},0).wait(1).to({skewX:7.3,x:22.4,y:29.6},0).wait(1).to({skewX:6.2,x:21.8,y:29.5},0).wait(1).to({skewX:5.1,x:21.2,y:29.4},0).wait(1).to({skewX:4,x:20.5},0).wait(1).to({skewX:2.9,x:19.9},0).wait(1).to({skewX:1.8,x:19.3,y:29.3},0).wait(1).to({skewX:0.7,x:18.7},0).wait(1).to({scaleY:1.01,skewX:-0.4,x:18},0).wait(1).to({skewX:-1.5,x:17.5},0).wait(1).to({skewX:-2.6,x:16.8,y:29.4},0).wait(1).to({skewX:-3.8,x:16.2},0).wait(1).to({skewX:-4.9,x:15.6},0).wait(1).to({skewX:-6,x:15,y:29.5},0).wait(1).to({skewX:-7.1,x:14.3,y:29.6},0).wait(1).to({skewX:-8.2,x:13.7,y:29.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,0.7,43,58);


(lib.movingFlower1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.심볼1();
	this.instance.parent = this;
	this.instance.setTransform(20.3,61.7,1,1.008,0,-7.3,0,19.9,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:20.5,regY:31.5,skewX:-6.3,x:17.7,y:32},0).wait(1).to({scaleY:1.01,skewX:-5.2,x:18.3},0).wait(1).to({skewX:-4,x:18.9,y:31.9},0).wait(1).to({skewX:-2.9,x:19.5},0).wait(1).to({skewX:-1.8,x:20,y:31.8},0).wait(1).to({skewX:-0.6,x:20.7},0).wait(1).to({skewX:0.5,x:21.2},0).wait(1).to({skewX:1.6,x:21.8},0).wait(1).to({skewX:2.8,x:22.4},0).wait(1).to({scaleY:1.01,skewX:3.9,x:23,y:31.9},0).wait(1).to({skewX:5,x:23.6},0).wait(1).to({skewX:6.2,x:24.2,y:32},0).wait(1).to({skewX:7.3,x:24.7},0).wait(1).to({skewX:8.4,x:25.3,y:32.1},0).wait(1).to({skewX:7.3,x:24.8,y:32},0).wait(1).to({skewX:6.2,x:24.2},0).wait(1).to({skewX:5.1,x:23.6,y:31.9},0).wait(1).to({skewX:4,x:23},0).wait(1).to({skewX:2.9,x:22.4,y:31.8},0).wait(1).to({skewX:1.8,x:21.9},0).wait(1).to({skewX:0.7,x:21.3},0).wait(1).to({scaleY:1.01,skewX:-0.4,x:20.8},0).wait(1).to({skewX:-1.5,x:20.2},0).wait(1).to({skewX:-2.6,x:19.6},0).wait(1).to({skewX:-3.8,x:19,y:31.9},0).wait(1).to({skewX:-4.9,x:18.4},0).wait(1).to({skewX:-6,x:17.9,y:32},0).wait(1).to({skewX:-7.1,x:17.3,y:32.1},0).wait(1).to({skewX:-8.2,x:16.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,0.6,49.1,63.1);


(lib.movingFlower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어_1
	this.instance = new lib.심볼2();
	this.instance.parent = this;
	this.instance.setTransform(20.3,61.8,1,1.008,0,-7.3,0,19.9,61.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:20.3,regY:30.9,skewX:-6.3,x:17.4,y:31.3},0).wait(1).to({scaleY:1.01,skewX:-5.2,x:18},0).wait(1).to({skewX:-4,x:18.6},0).wait(1).to({skewX:-2.9,x:19.2,y:31.2},0).wait(1).to({skewX:-1.8,x:19.8},0).wait(1).to({skewX:-0.6,x:20.4},0).wait(1).to({skewX:0.5,x:20.9},0).wait(1).to({skewX:1.6,x:21.6},0).wait(1).to({skewX:2.8,x:22.2},0).wait(1).to({scaleY:1.01,skewX:3.9,x:22.7},0).wait(1).to({skewX:5,x:23.4,y:31.3},0).wait(1).to({skewX:6.2,x:24},0).wait(1).to({skewX:7.3,x:24.6,y:31.4},0).wait(1).to({skewX:8.4,x:25.2},0).wait(1).to({skewX:7.3,x:24.6},0).wait(1).to({skewX:6.2,x:24,y:31.3},0).wait(1).to({skewX:5.1,x:23.4},0).wait(1).to({skewX:4,x:22.8,y:31.2},0).wait(1).to({skewX:2.9,x:22.2},0).wait(1).to({skewX:1.8,x:21.7},0).wait(1).to({skewX:0.7,x:21.1},0).wait(1).to({scaleY:1.01,skewX:-0.4,x:20.5},0).wait(1).to({skewX:-1.5,x:19.9},0).wait(1).to({skewX:-2.6,x:19.3},0).wait(1).to({skewX:-3.8,x:18.7},0).wait(1).to({skewX:-4.9,x:18.1},0).wait(1).to({skewX:-6,x:17.6,y:31.3},0).wait(1).to({skewX:-7.1,x:17,y:31.4},0).wait(1).to({skewX:-8.2,x:16.4,y:31.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,0.6,48.5,61.8);


// stage content:
(lib.main = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function goranyFunction(){
			print(asdfasdf);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 아저씨
	this.instance = new lib.sprite1_0003_입다문아저씨();
	this.instance.parent = this;
	this.instance.setTransform(415,305,0.428,0.428);

	this.instance_1 = new lib.sprite1_0005_무대();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-37,-47,0.465,0.483);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// flower
	this.instance_2 = new lib.movingFlower2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(245.9,538.9,1.073,1.073,0,0,0,14.1,31.2);

	this.instance_3 = new lib.movingFlower1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(659.5,531.3,1.073,1.073,0,0,0,17.2,32.1);

	this.instance_4 = new lib.movingFlower();
	this.instance_4.parent = this;
	this.instance_4.setTransform(387.5,491.7,1.073,1.073,0,0,0,20.3,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// 공룡
	this.instance_5 = new lib.dinosaur();
	this.instance_5.parent = this;
	this.instance_5.setTransform(277.3,360.7,1.002,1.002,0,0,0,143.2,172.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// 화산
	this.instance_6 = new lib.volcano();
	this.instance_6.parent = this;
	this.instance_6.setTransform(681.5,269.2,1.073,1.073,0,0,0,298.1,228.5);

	this.instance_7 = new lib.sprite1_0023_바닥();
	this.instance_7.parent = this;
	this.instance_7.setTransform(15,502,0.405,0.405);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(463,253,1072.7,642.5);
// library properties:
lib.properties = {
	id: '49B61085D53CCC44B86B0C1022297DD9',
	width: 1000,
	height: 600,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/main_atlas_.png?1537092241314", id:"main_atlas_"}
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