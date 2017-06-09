function Snake() {
/* Declaration of Variables */
this.x = 0;
this.y = 0;
this.xSpeed = 1;
this.ySpeed = 0;
this.grid = 15;
this.total = 0;
this.tail = [];
//   rgb(231, 76, 60)



this.show = function() {

fill(255);
/* Appearing the Tails */

for(var i = 0; i < this.tail.length;i++) {
    rect(this.tail[i].x , this.tail[i].y , gridScale ,gridScale);
}
rect(this.x , this.y , this.grid , this.grid);

}

this.update = function() {

/* For Making Tails */

if(this.total === this.tail.length) {
    for(var i = 0 ; i < this.tail.length -1 ; i++) {
        this.tail[i] = this.tail[i +1];
    }

}

this.tail[this.total-1] = createVector(this.x , this.y);





this.x = this.x + this.xSpeed*gridScale;
this.y = this.y + this.ySpeed*gridScale;
// To Make Snake only in the Canvas
// this.x = constrain(this.x , 0 , width - gridScale);
// this.y = constrain(this.y , 0 , height - gridScale);

}

this.direction = function(x , y) {
this.xSpeed = x;
this.ySpeed = y;


}

this.edges = function() {
    if(this.x > width + gridScale) {
        this.x = -gridScale;

    } else if(this.x < -gridScale) {
        this.x = width + gridScale;

    } if(this.y > height + gridScale) {
        this.y = -gridScale;

    } else if(this.y < -gridScale) {
        this.y = height + gridScale;


    }


}



this.eat = function(food) {
    var diff = dist(this.x , this.y , food.x , food.y);

    if(diff == 0) {
        this.total++;
        console.log(diff);
        return true;

    } else {
        console.log(diff);
        return false;

    }

}


this.death = function() {
    for(var i = 0 ;i < this.tail.length ;i++) {
        var position = this.tail[i];
        var d = dist(this.x , this.y , position.x , position.y);
        if(d < 1) {
            this.total = 0;
            this.tail = [];
        }
    }

}




}