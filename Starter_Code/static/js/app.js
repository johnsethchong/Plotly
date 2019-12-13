function buildPlot() {
    d3.jason("samples.json").then(function(data) {
        var selector = d3.select("#sample.metadata");
        selector.html("");
        Object.entries(data).forEach(([key,value]) => {
            selector.append("p").text(`${key}: ${value}`);
        });
        console.log(data);
    });
}

function buildCharts() {
    d3.json("samples.json").then(function(data){
        var values = data.sample_values.slice(0,10);
        var labels = data.otu_ids.slice(0,10);
        var hoverText = data.otu_labels.slice(0,10);
        
        var data = [{
            type: "bar",
            x: values,
            y: labels,
            hovertext: hoverText,
            orientation: "h"
        }];
        Plotly.newPlot("bar", data);
    };

    d3.json("samples.json").then(function(data){
        var x_values = data.otu_ids;
        var y_values = data.sample_values;
        var markerSize = data.sample_values;
        var markerColor = data.otu_ids;
        var textValues = data.otu_labels;

        var trace1 = {
            x: x_values,
            y: y_values,
            mode: "markers",
            marker: {
                color: markerColor,
                size: markerSize
            },
            text: textValues
        };

        var data = [trace1];
        var layout = {title: "OTU ID"};

        Plotly.newPlot("bubble", data, layout);
    });
}

function init() {
    var selector = d3.select("#selDataset");
}
