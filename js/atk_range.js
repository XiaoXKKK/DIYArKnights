const data = [];
const size = 20
const col = 8
const row = 5
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    let color = (j === 2 && i === 2) ? 2 : 1;
    data.push({ x: j * size, y: i * size, color: color });
  }
}

const svg = d3.select("#attack_range")
  .append("svg")
  .attr("width", col*size)
  .attr("height", row*size);
  const rect = svg.selectAll("rect");
  const rectUpdate = rect.data(data);

rectUpdate.enter()
  .append("rect")
  .attr("width", size)
  .attr("height", size)
  .attr("x", function(d) { return d.x; })
  .attr("y", function(d) { return d.y; })
  .attr("fill", function(d) { return d.color === 2 ? "lightblue": (d.color === 0 ? "gray" : "white"); })
  .attr("stroke", "black")
  .attr("stroke-width", "1px")
  .datum(function(d) { return d; })  // 将每个方格元素与相应的数据点绑定
  .filter(function(d) { return d.color !== 2; })
  .on("click", function() {
    const d = d3.select(this).datum();  // 使用 'this' 获取当前元素，然后使用 '.datum()' 方法获取绑定的数据
    console.log(d)
    d.color = d.color === 1 ? 0 : 1;
    d3.select(this).attr("fill", d.color === 0 ? "gray" : "white");
  });

svg.selectAll("rect")
  .attr("stroke", "black")
  .attr("stroke-width", "1px");

function getGridColors() {
  const gridColors = svg.selectAll("rect")
                        .nodes()
                        .map(function(node) { return +d3.select(node).datum().color; });

  return gridColors;
}

function setGridColors(colors) {
  svg.selectAll("rect")
    .each(function(d, i) {
      d.color = colors[i];
      d3.select(this).attr("fill", d.color === 2 ? "lightblue": (d.color === 0 ? "gray" : "white"));
    });
}