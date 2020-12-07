function threePlots(id){

    d3.json("Data/samples.json").then((data)=>{
        //console.log(data)

        //individualData = data.samples[0]

        let individualData = data.samples.filter(d => d.id.toString() === id)[0];

        let allIds= individualData.otu_ids

        let ids10 = individualData.otu_ids.slice(0,10).reverse()
        //console.log(`Top 10 ids: ${ids}`)

        let allLables = individualData.otu_labels

        let labels10 = individualData.otu_labels.slice(0,10).reverse()
        //console.log(`Top 10 labels:${labels}`)

        let allValues = individualData.sample_values

        let values10 = individualData.sample_values.slice(0,10).reverse()
        //console.log(`Top 10 values: ${values10}`)

        let otuIds10 = ids10.map(names => "OTU " + names )
        //console.log(otuIds)

        let trace1={
            x: values10,
            y: otuIds10,
            text: labels10,
            marker : {
                color:"blue"
            },
            type: "bar",
            orientation: "h"
        }

        let barData =[trace1]

        let layout1 ={
            title: "Top Ten OTU",
            yaxis:{tickmode: "linear"},
            margin:{
                l:100,
                r:100,
                t:100,
                b:100
            }
        }

        Plotly.newPlot("bar", barData, layout1)

        let trace2={
            x:allIds,
            y:allValues,
            mode: "markers",
            marker:{
                size: allValues,
                color: allIds
            },
            text:allLables
        }

        let layout2={
            xaxis:{title:"OTU ID"},
            height: 600,
            width: 1000
        }

        let bubbleData = [trace2]

        Plotly.newPlot("bubble", bubbleData, trace2)
    })
}

function demoInfo(id){
    d3.json("Data/samples.json").then((data)=>{
        let metadata = data.metadata;
        // console.log(metadata)
        let individualData = metadata.filter(name => name.id.toString()===id)[0]
        //console.log(individualData)

        let demInfo = d3.select("#sample-metadata");

        demInfo.html("")

        Object.entries(individualData).forEach((key)=>{
            demInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n")
        })


    })
}

function changeId(id){
    threePlots(id)
    demoInfo(id)
}



function init() {
    let dropdown = d3.select("#selDataset")
    d3.json("Data/samples.json").then((data)=>{
        data.names.forEach(function(name){
            dropdown.append("option").text(name).property("value")
        })

        threePlots(data.names[0])
        demoInfo(data.names[0])
    })
}

init();
// console.log(threePlots())
// console.log(demoInfo())