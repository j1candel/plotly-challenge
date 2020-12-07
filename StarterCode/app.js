//function threePlots(plotid){

    d3.json("Data/samples.json").then((data)=>{
        console.log(data)
        
        let sampleNames = data.samples.filter(name => name.otu_ids.toString() === otu_ids)[0]
        console.log(sampleNames)

    })



//}