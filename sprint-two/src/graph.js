var Graph = function(){


};

Graph.prototype.addNode = function(newNode, toNode){

  //Check if a node exits, if not create a node
  if (this.nodeCount() === 0){
    this[newNode] = {};

  //If 1 node exists create new node and add edges to both
  } else if (this.nodeCount()===1){
    var solo = this.soloNode();

    this[newNode] = {};
    this.addEdge(solo,newNode);

  //If more than 2 or nodes, create new Node and connect newNode to toNode
  } else if (toNode){
    this[newNode] = {};
    this.addEdge(newNode,toNode);

  // If toNode is not provided, create empty node;
  } else {
    this[newNode] = {};
  }
};

Graph.prototype.contains = function(node){
  return this.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  delete this[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this[fromNode].hasOwnProperty(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){

  //creates an object with the edge for use with extend
  var from = {};
  from[fromNode] = true;
  $.extend(this[toNode], from);

  //creates an object with the edge for use with extend
  var to = {};
  to[toNode] = true;
  $.extend(this[fromNode], to);
};

Graph.prototype.removeEdge = function(fromNode, toNode){

  // delete node edges from both nodes
  delete this[fromNode][toNode];
  delete this[toNode][fromNode];

  //use nodeCount to count the number of edges on the nodes provided
  var fromCount = Graph.prototype.nodeCount.apply(this[fromNode]);
  var toCount = Graph.prototype.nodeCount.apply(this[toNode]);

  //if there are no edges, delete
  if (fromCount === 0) {
    delete this[fromNode];
  }

  //if there are no edges, delete
  if (toCount === 0) {
    delete this[toNode];
  }

};

Graph.prototype.nodeCount = function(){

  //Count the number of nodes in the graph
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
  //if there are is only 1 node in the Graph, find the node
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      return key;
    }
  }
};

Graph.prototype.forEachNode = function (iterator) {

  //run iterator on every node in the graph
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      iterator(this[key]);
    }
  }
};

