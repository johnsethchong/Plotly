function buildPlot() {
    d3.jason("samples.json").then(function(data) {
        var selector = d3.select("#sample.metadata");
        selector.html("");
        Object.entries(data).forEach(([key,value]) => {
            selector.append("p").text(`${key}: ${value}`);
        });
        console.log(data);
    })

}


d3.json("samples.json").then(function(data) {
    console.log(data);
});