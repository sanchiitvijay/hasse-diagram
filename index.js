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
  var x1 = document.getElementById("mySelect").value;
  var count1 = 0;

  if (x0 == "" || x1 == "") {
    alert(" must be filled out");
    return false;
  }
  if (!/^\{[a-zA-Z0-9,{}.]*?\}$/g.test(document.myForm.inp1.value)) {
    alert("wrong");
    return false;
  }

  //alert(x0.length);

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

  //alert(x1);

  //alert("success");
  return true;
}

function newsub() {
  if (validation()) {
    var str = document.getElementById("inp1").value;

    for (var j = 1; j < str.length - 1; j++) {
      newtemp = newtemp + str[j];
    }
    temp = newtemp.split(",");
    //for(var i=0;i<temp.length;i++)
    //alert(temp[i]);

    //sf();
    x2 = document.getElementById("mySelect").value;
    //alert(x2)
    switch (x2) {
      case "1":
        sf();
        load_home();

        break;
      case "2":
        //alert("hi2")
        sf2();
        load_home2();

        break;
      case "3":
        //alert("hi3")
        sf1();
        load_home();

        break;
    }
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
  //alert(a)

  for (i = 1; i < n; i++) {
    if (a[i] % a[i - 1] == 0) {
      s = checklevel(i - 1);
      l[i] = s + 1;
      source[i - 1 + (counting - 1)] = a[i];
      target[i - 1 + (counting - 1)] = a[i - 1];
      //alert("b4");
      o = i - 1;
      //alert("after"+o);
      ab = a[i - 1];
      //alert("ab:"+ab);

      if (o != 0) {
        //alert("before o");
        for (u = 0; u < o; u++) {
          //alert("after o");
          //alert("twoooo");
          if (ab % a[u] == 0) {
            aa.push(a[u]);
            //alert("aa="+aa);
          }
        }

        for (u = 0; u < o; u++) {
          counting++;
          if (a[u] != aa[u])
            if (a[i] % a[u] == 0) {
              //alert("three");
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
          //alert("b4");
          e = k - 1;
          //alert("after"+e);
          q = a[k - 1];
          //alert("q:"+q);

          s = checklevel(k - 1);
          l[i] = s + 1;
          source[i - 1 + (counting - 1)] = c;
          target[i - 1 + (counting - 1)] = a[k - 1];

          break;
        }
      }

      if (k == 0) {
        //alert("worked");
        l[i] = 0;
        if (c % a[0] == 0) {
          //alert("abcd");

          source[i - 1 + (counting - 1)] = c;
          target[i - 1 + (counting - 1)] = a[0];
        } else {
          source[i - 1 + (counting - 1)] = c;
          source[i - 1 + (counting - 1)] = a[0];
        }
      }
      if (e != 0) {
        for (r = 0; r < e; r++) {
          //alert("twoooo");
          if (q % a[r] == 0) {
            p.push(a[r]);
            //alert("p="+p);
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

//--------------------------------------------------
function sf1() {
  l[0] = 0;

  var n = temp.length;
  //alert(temp)
  //alert("n==="+n)
  for (i = 0; i < n; i++) {
    a.push(temp[i]);
  }
  //alert(a)
  a.sort(function (a, b) {
    return a - b;
  });
  //alert(a)
  for (i = 1; i < n; i++) {
    //alert("found"+i)
    s = checklevel(i - 1);
    l[i] = s + 1;
    source[i - 1] = a[i];
    //alert(source[i-1])
    target[i - 1] = a[i - 1];
    //alert(target[i-1])
  }

  // for(i=0;i<n-1;i++)
  //{
  //alert("source:"+source[i]);
  //}
  //alert(" targets:");
  //for(i=0;i<n-1;i++)
  //{
  //alert("  " +target[i]);
  //}
  //alert("end");
}

//-------------------------------------------------------------
function sf2() {
  l[0] = 0;

  var n = temp.length;
  //alert(temp)
  //alert("n==="+n)
  for (i = 0; i < n; i++) {
    a.push(temp[i]);
  }
  a.sort(function (a, b) {
    return a - b;
  });
  //alert(a)

  generatePowerSet(a);

  function generatePowerSet(array) {
    result = [];
    result.push("{}");

    for (var i = 1; i < 1 << array.length; i++) {
      subset = [];
      for (var j = 0; j < array.length; j++)
        if (i & (1 << j)) subset.push(array[j]);

      result.push(subset);
    }

    for (m = 0; m < result.length - 1; m++) {
      if (result[m + 1].length == 1) {
        srce.push(result[0]);
        tget.push("{" + result[m + 1] + "}");
      }
    }

    for (k = 0; k < result.length - 1; k++) {
      arr1 = result[k];
      console.log("==", arr1);

      for (l = k + 1; l < result.length; l++) {
        arr2 = result[l];

        for (var i = 0; i < arr1.length; i++) {
          for (var j = 0; j < arr2.length; j++) {
            if (arr2.length == arr1.length + 1) {
              if (arr1[i] == arr2[j]) {
                srce.push("{" + arr1 + "}");
                tget.push("{" + arr2 + "}");
              }
            }
          }
          break;
        }
      }
    }

    console.log("source=", srce);
    console.log("target=", tget);

    //alert(result);
    console.log(result);
    return result;
  }

  for (i = 1; i <= srce.length; i++) {
    //alert("found"+i)
    s = checklevel(i - 1);
    l[i] = s + 1;
    source[i - 1] = srce[i - 1];
    //alert(source[i-1])
    target[i - 1] = tget[i - 1];
    //alert(target[i-1])
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
  //alert("loadhome");
  var links = [];
  var nodes = [];
  //alert(source);
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

  var width = 1500,
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
      } //alert("reversed="+reversed)
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

//--------------------------------$$
function load_home2() {
  //alert("loadhome2");
  var links = [];
  var nodes = [];

  //alert(source);
  console.log(source);
  console.log(target);
  //alert(result)
  ret.push(result[0]);
  for (var p = 1; p < result.length; p++) {
    ret.push("{" + result[p] + "}");
  }
  console.log(ret);

  sl[0] = 0;
  for (var i = 1; i < result.length; i++) {
    pq = result[i].length;
    //alert("pq="+pq)
    sl.push(pq);
  }
  sl = sl.sort();
  console.log(sl);

  for (var i = 0; i < ret.length; i++) {
    var obj = {};
    obj["name"] = ret[i];

    obj["level"] = sl[i];

    nodes.push(obj);
  }

  console.log(target.length);

  for (var i = 0; i < target.length; i++) {
    z = source[i];
    //alert("sss"+z)
    index2(z);
    var obj2 = {};
    //alert("www"+w)
    obj2["source"] = w;

    m = target[i];
    //alert("ttt"+m)
    index2(m);
    //alert("www"+w)
    obj2["target"] = w;

    links.push(obj2);
  }
  console.log(links);
  levels.push(0);
  levels.push(1);
  console.log("levelsarray=", levels);
  var graph = { nodes: nodes, links: links, levels: levels };

  var myJSON = JSON.stringify(graph, null, 4);
  console.log("myJSON = ", myJSON);

  console.log("graph=", graph);

  graph.links.forEach(function (link, index, list) {
    if (typeof graph.nodes[link.source] === "undefined") {
      console.log("undefined source", link.source);
    }
    if (typeof graph.nodes[link.target] === "undefined") {
      console.log("undefined target", link.target);
    }
  });

  var width = 1500,
    height = 800,
    nodeWidth = 20,
    nodeHeight = 20;
  var str = "";
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
    
    .attr("color", "#ffffff")
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

function index2(z) {
  for (var i = 0; i < ret.length; i++) {
    if (ret[i] == z) {
      w = i;
      break;
    }
  }
}
