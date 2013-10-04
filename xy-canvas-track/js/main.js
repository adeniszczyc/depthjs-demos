 
$(document).ready(function() {

// Set the DeptJS object which communicates with the extension
DepthJS = {

  // Detect hand movement from the sensor
  onMove: function(x, y, z) {  

    // On move call the track.updatePosition(x,y) adn pass the x and y coordinates
    track.updatePosition(x,y);
  }
};
 

var track = {

  el: {

    // Set variables for page elements
    body: $("body"),
    track: $("#track")

  },

  pos: {

    // Set varibales for x and y coordinates of hand
    x: 0,
    y: 0

  },
  updatePosition: function(x, y) {

    // Update the x and y variables with new coordiantes
    // x and y are between 0 and 100
    this.pos.x = x;
    this.pos.y = y;

    this.updateCanvas();
  },


  updateCanvas: function() {

    // Set canvas variable
    var ctx = this.el.track[0].getContext("2d");

    // Get width and height of the canvas
    var width = this.el.track[0].width;
    var height = this.el.track[0].height;

    // Calculate new x and y depeneding on size of the canvas
    var x = (this.pos.x / 100) * width;
    var y = (this.pos.y / 100) * height;
   
    // Clear the canvas
    this.el.track[0].width = this.el.track[0].width;

    // Draw the circle onto the canvas
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI, true);
    ctx.closePath();
    ctx.fill();

  },

};

});


















