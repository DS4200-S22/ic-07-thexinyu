// /*
//
// In-class activity 08 starter code
// Prof. Mosca
// Modified: 12/08/21
//
// */
//
// // Build your scatterplot in this file
//
// // Set dimensions and margins for plots
// const width = 900;
// const height = 450;
// const margin = {left:50, right:50, bottom:50, top:50};
// const yTooltipOffset = 15;
//
//
// // CSV SCATTERPLOT
//
// const svg3 = d3
//   .select("#csv-scatter")
//   .append("svg")
//   .attr("width", width-margin.left-margin.right)
//   .attr("height", height - margin.top - margin.bottom)
//   .attr("viewBox", [0, 0, width, height]);
//
//
// d3.csv("/data/scatter.csv").then((data) => {
//
//  // set the max possible y/height value based on highest data score
//  let maxY3 = d3.max(data, function(d) { return d.score; });
//
//  // scale the chart based off of previously defined maxmimum y value
//  let yScale3 = d3.scaleLinear()
//              .domain([0,maxY3])
//              .range([height-margin.bottom,margin.top]);
//
//  // set the max possible y/height value based on highest data score
//  let maxX3 = d3.max(data, function(d) { return d.day; });
//
//
//  // scale the chart's x-value based off of size of data
//  let xScale3 = d3.scaleLinear()
//              .domain([0, maxX3])
//              .range([margin.left, width - margin.right]);
//
//  // define csv bar chart
//  svg3.selectAll("circle")
//     .data(data)
//     .enter()
//     .append("circle")
//       .attr("cx", (d) => xScale3(d.day))
//       .attr("cy", (d) => yScale3(d.score))
//       .attr("r", 10)
//       .attr("fill", "orange")
//       .attr("class", "SimpleScatter")
//       .on("mouseover", mouseover3)
//       .on("mousemove", mousemove3)
//       .on("mouseleave", mouseleave3);
//
//  // scale previously created svg object to y-value based off of data, format y-axis
//  svg3.append("g")
//     .attr("transform", `translate(0,${height - margin.bottom})`)
//     .call(d3.axisBottom(xScale3))
//     .attr("font-size", '20px');
//
//  // svale previously defined svg object width-wise based off of data, format x-axis
//  svg3.append("g")
//      .attr("transform", `translate(${margin.left}, 0)`)
//      .call(d3.axisLeft(yScale3))
//      .attr("font-size", '20px');
//
// });
//
// // defines a tooltip that starts as invisible until moused over
// const tooltip3 = d3.select("#csv-scatter")
//                 .append("div")
//                 .attr('id', "tooltip3")
//                 .style("opacity", 0)
//                 .attr("class", "tooltip");
//
// // if tooltip is moused over, chagne opacity to 1 (show the data)
// const mouseover3 = function(event, d) {
//   tooltip3.html("Day: " + d.day + "<br> Score: " + d.score + "<br>")
//           .style("opacity", 1);
// }
//
// // if mouse moves across tooltip, the tooltip will shift positions
// const mousemove3 = function(event, d) {
//   tooltip3.style("left", (event.pageX)+"px")
//           .style("top", (event.pageY + yTooltipOffset) +"px");
// }
//
// // return to opacity 0 when mouse no longer hovering over tooltip
// const mouseleave3 = function(event, d) {
//   tooltip3.style("opacity", 0);
// }
