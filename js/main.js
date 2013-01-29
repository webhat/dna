// Creates canvas 320 × 200 at 10, 50
var paper = Raphael(10, 50, 1000, 1000);

// Creates circle at x = 50, y = 40, with radius 10
var st = paper.set(),
    cr = paper.set(),
    ln = paper.set();

var rect = paper.rect(10, 10, 600, 300, 0),
    innerrect = paper.rect(12, 12, 596, 296, 0),
    circle1  = paper.circle(162,285,11),
    circle2  = paper.circle(262,285,11),
    circle3  = paper.circle(362,285,11),
    circle4  = paper.circle(462,285,11),
    line1 = paper.rect(112, 260, 2, 47),
    line2 = paper.rect(212, 260, 2, 47),
    line3 = paper.rect(312, 260, 2, 47),
    line4 = paper.rect(412, 260, 2, 47),
    line5 = paper.rect(512, 260, 2, 47),
    line6 = paper.rect(13, 260, 594, 2)
    //speech = paper.oval(62,30)
    ;

st.push( rect, innerrect);
cr.push(circle1,circle2,circle3,circle4);

cr.click(function() {
    this.animate({r: 13}, 100, "bounce");
});



ln.push(line1,line2,line3,line4,line5,line6);


rect.attr("fill", "#c2c2c2");
innerrect.attr({fill: "#fff", stroke: "#000"});

cr.attr({fill: "#c2c2c2", stroke: "#fff"});
ln.attr({fill: "#c2c2c2", stroke: "#fff"});

//st.animate({x: "+200", y: "+200"});

