function threePlots(id){

    d3.json("Data/samples.json").then((data)=>{
        //console.log(data)

        individualData = data.samples[0]

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

        let layout ={
            title: "Top Ten OTU",
            yaxis:{tickmode: "linear"},
            margin:{
                l:100,
                r:100,
                t:100,
                b:100
            }
        }

        Plotly.newPlot("bar", barData, layout)

        let trace2={
            x:allIds,
            y:allValues,
            mode: "markers"
        }

    })
}

console.log(threePlots())