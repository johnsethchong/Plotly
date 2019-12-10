// function buildPlot() {
//     d3.jason("Starter_Code/samples.json").then(function(data) {
//         var selector = d3.select("#sample.metadata");
//         selector.html("");
//         Object.entries(data).forEach(([key,value]) => {
//             selector.append().text(`${key}: ${value}`);
//         });
//         console.log(data);
//     })

// }


d3.json("samples.json").then(function(data) {
    console.log(data);
});