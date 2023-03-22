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

const svg = d3.select("body")
  .append("svg")
  .attr("width", col*size)
  .attr("height", row*size);


svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", d => d.x)
  .attr("y", d => d.y)
  .attr("width", size)
  .attr("height", size)
  .attr("stroke", "black")
  .attr("fill", d => (d.color === 2) ? "lightblue" : (d.color === 1) ? "white" : "gray")
  .filter(d => d.color !== 2)
  .on("click", function(d, i) {
    const rect = d3.select(this);
    if (d => d.color === 1) {
      rect.attr("fill", "gray");
      d.color = 0;
    } else {
      rect.attr("fill", "white");
      d.color = 1;
    }
  })

var attack_range = document.getElementById("attack_range");
attack_range.innerHTML += svg.node().outerHTML;
