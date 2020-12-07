function threePlots(id){

    d3.json("Data/samples.json").then((data)=>{
        console.log(data)

        individualData = data.samples[0]

        let ids = individualData.otu_ids.slice(0,10).reverse()
        console.log(`Top 10 ids: ${ids}`)

        let values = individualData.sample_values.reverse()
        
        let values10 = values.reverse().slice(0,10)
        console.log(`Top 10 values: ${values10}`)


    })
}

console.log(threePlots())