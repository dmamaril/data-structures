var Graph = function(){


};

// var graph = new Graph ();

Graph.prototype.addNode = function(newNode, toNode){

  if (this.nodeCount() === 0){
    this[newNode] = {};
  } else if (this.nodeCount()===1){
    var solo = this.soloNode();
    var temp = {};
    temp[newNode] = true;
    $.extend(this[solo], temp);
    this[newNode] = {};
    this[newNode][solo] = true;
  } else {
    var to = {};
    to[toNode] = true;
    var temp = {};
    temp[newNode] = true;
    this[newNode] = to;
    $.extend(this[toNode], temp);
  }

};

Graph.prototype.contains = function(node){
  return this.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  delete this[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  console.log(this);
  return this[fromNode].hasOwnProperty(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var from = {};
  from[fromNode] = true;
  $.extend(this[toNode], from);

  var to = {};
  to[toNode] = true;
  $.extend(this[fromNode], to);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this[fromNode][toNode];
  delete this[toNode][fromNode];

  var fromCount = Graph.prototype.nodeCount.apply(this[fromNode]);
  var toCount = Graph.prototype.nodeCount.apply(this[toNode]);
  if (fromCount === 0) {
    delete this[fromNode];
  }
  if (toCount === 0) {
    delete this[toNode];
  }

};

Graph.prototype.nodeCount = function(){
  var results = 0;
  for (var key in this){
    if (this.hasOwnProperty(key))
    {
      results++;
    }
  }
  return results;
};

Graph.prototype.soloNode = function () {
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      return key;
    }
  }
};
