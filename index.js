var temp = new Array();
var newtemp = new Array();
var a = [],
  i,
  j,
  k,
  lev = 0,
  n,
  c,
  s;
var l = [];
var p = [];
var b = [[], []],
  x,
  y;
var source = [];
var target = [];
var e;
var w;
var z;
var m;
var q;
var r;
var counting = 1;
var o;
var u;
var ab;
var aa = [];
var x2;
//---------------------------------------***
var arrs = [];
var arr;
var c;
var arr = [];
var rt = [];
var arr1;
var result = [];
var arr2;
var srce = [];
var tget = [];
var ret = [];
var pos = [0, 1, 1, 2];
var levels = [];
var sl = [];
var pq;

//--------------------------------------------------------***

function validation() {
  var x0 = document.getElementById("inp1").value;
  var x1 = 1;
  var count1 = 0;

  if (x0 == "" || x1 == "") {
    alert(" must be filled out");
    return false;
  }
  if (!/^\{[a-zA-Z0-9,{}.]*?\}$/g.test(document.myForm.inp1.value)) {
    alert("wrong");
    return false;
  }


  for (var i = 0; i < x0.length; i++) {
    if (x0[i] == "{") {
      count1++;
    } else if (x0[i] == "}") {
      count1--;
    }
  }

  if (count1 < 0) {
    alert("paranthesis are not matched");
    return false;
  }

  if (count1 > 0) {
    alert("paranthesis are not matched");
    return false;
  }


  return true;
}

function newsub() {
  if (validation()) {
    var str = document.getElementById("inp1").value;

    for (var j = 1; j < str.length - 1; j++) {
      newtemp = newtemp + str[j];
    }
    temp = newtemp.split(",");
    console.log(temp);
    x2 = 1;

        sf();
        load_home();

  }
}

function sf() {
  l[0] = 0;

  var n = temp.length;
  for (i = 0; i < n; i++) {
    a.push(temp[i]);
  }
  a.sort(function (a, b) {
    return a - b;
  });

  for (i = 1; i < n; i++) {
    if (a[i] % a[i - 1] == 0) {
      s = checklevel(i - 1);
      l[i] = s + 1;
      source[i - 1 + (counting - 1)] = a[i];
      target[i - 1 + (counting - 1)] = a[i - 1];
      o = i - 1;
      ab = a[i - 1];

      if (o != 0) {
        for (u = 0; u < o; u++) {
          if (ab % a[u] == 0) {
            aa.push(a[u]);
          }
        }

        for (u = 0; u < o; u++) {
          counting++;
          if (a[u] != aa[u])
            if (a[i] % a[u] == 0) {
              source[i - 1 + (counting - 1)] = a[i];
              target[i - 1 + (counting - 1)] = a[u];
            }
        }

        aa = [];
      }
    } else if (a[i] % a[i - 1] != 0) {
      c = a[i];
      for (k = i - 1; k >= 1; k--) {
        if (c % a[k - 1] == 0) {
          e = k - 1;
          q = a[k - 1];

          s = checklevel(k - 1);
          l[i] = s + 1;
          source[i - 1 + (counting - 1)] = c;
          target[i - 1 + (counting - 1)] = a[k - 1];

          break;
        }
      }

      if (k == 0) {
        l[i] = 0;
        if (c % a[0] == 0) {

          source[i - 1 + (counting - 1)] = c;
          target[i - 1 + (counting - 1)] = a[0];
        } else {
          source[i - 1 + (counting - 1)] = c;
          source[i - 1 + (counting - 1)] = a[0];
        }
      }
      if (e != 0) {
        for (r = 0; r < e; r++) {
          if (q % a[r] == 0) {
            p.push(a[r]);
          }
        }

        for (r = 0; r < e; r++) {
          counting++;
          if (a[r] != p[r])
            if (c % a[r] == 0) {
              //alert("three");
              source[i - 1 + (counting - 1)] = c;
              target[i - 1 + (counting - 1)] = a[r];
            }
        }

        p = [];
      }
    }
  }
}

function checklevel(num) {
  j = num;
  lev = l[j];
  return lev;
}

function re() {
  if ((document.getElementById("bigpic").style.display = "block"))
    document.getElementById("bigpic").style.display = "none";
}

function index(z) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] == z) {
      w = i;
      break;
    }
  }
}

function load_home() {
  var links = [];
  var nodes = [];
  console.log(source);
  console.log(target);

  for (var i = 0; i < a.length; i++) {
    var obj = {};
    obj["name"] = a[i];
    obj["level"] = l[i];

    nodes.push(obj);
  }

  console.log(target.length);

  for (var i = 0; i < target.length; i++) {
    z = source[i];
    index(z);
    var obj2 = {};

    obj2["source"] = w;

    m = target[i];
    index(m);

    obj2["target"] = w;

    links.push(obj2);
  }
  console.log(links);
  levels.push(0);
  levels.push(1);
  console.log("levelsarray=", levels);

  var graph = { nodes: nodes, links: links, levels: levels };

  var myJSON = JSON.stringify(graph, null, 4);

  console.log("graph=", graph);

  graph.links.forEach(function (link, index, list) {
    if (typeof graph.nodes[link.source] === "undefined") {
      console.log("undefined source", link.source);
    }
    if (typeof graph.nodes[link.target] === "undefined") {
      console.log("undefined target", link.target);
    }
  });

  var width = window.innerWidth,
    height = 500,
    nodeWidth = 30,
    nodeHeight = 30;
  var str = " ";
  var fill = d3.scale.category10();

  var nodes = d3.range(100).map(function (i) {
    return { index: i };
  });

  var force = d3.layout
    .force()
    .charge(-1000)
    .gravity(0.2)
    .linkDistance(100)
    .size([width, height]);

  var first = 1;

  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  svg.attr("transform", "rotate(-180)");

  var link = svg
    .selectAll(".link")
    .data(graph.links)
    .enter()
    .append("line")
    .attr("class", "link")
    .style("  stroke-width", 2);

  var node = svg
    .selectAll(".node")
    .data(graph.nodes)
    .enter()
    .append("rect")
    .attr("class", "node")
    .attr("x", function (d) {
      return d.x;
    })
    .attr("y", function (d) {
      return d.y;
    })
    .attr("width", nodeWidth)
    .attr("height", nodeHeight)
    .style("fill", function (d, i) {
      return fill(i & 3);
    })
    .style("stroke", function (d, i) {
      return d3.rgb(fill(i & 3)).darker(2);
    })
    .call(force.drag)
    .on("mousedown", function () {
      d3.event.stopPropagation();
    });
  var label = svg
    .selectAll(".mytext")
    .data(graph.nodes)
    .enter()
    .append("text")
    .attr("rotate", -540)
    .text(function (d) {
      str = d.name;
      let reversed = "";
      for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
      }
      d.name = reversed;

      return d.name;
    });

  force.nodes(graph.nodes).links(graph.links).on("tick", tick).start();

  setTimeout(function () {
    first = 0;
    force.start();
  }, 6000);

  function tick(e) {
    if (first) {
      var k = e.alpha;
    } else {
      var k = 10 * e.alpha;
    }
    graph.nodes.forEach(function (o, i) {
      o.y += (y(o.level) - o.y) * k;
    });

    link
      .attr("x1", function (d) {
        return d.source.x + nodeWidth / 2;
      })
      .attr("y1", function (d) {
        return d.source.y + nodeHeight / 2;
      })
      .attr("x2", function (d) {
        return d.target.x + nodeWidth / 2;
      })
      .attr("y2", function (d) {
        return d.target.y + nodeHeight / 2;
      });

    node
      .attr("x", function (d) {
        return d.x;
      })
      .attr("y", function (d) {
        return d.y;
      });

    label
      .attr("x", function (d) {
        return d.x + 12;
      })
      .attr("y", function (d) {
        return d.y - 12;
      });
  }
  // });
  svg.style("opacity", 1e-6).transition().duration(1000).style("opacity", 1);

  d3.select("body").on("mousedown", mousedown);

  var y = d3.scale
    .ordinal()
    .domain(d3.range(5))
    .rangePoints([0, 100 * 5], 1);

  function mousedown() {
    nodes.forEach(function (o, i) {
      o.x += (Math.random() - 0.5) * 40;
      o.y += (Math.random() - 0.5) * 40;
    });
    force.resume();
  }
}