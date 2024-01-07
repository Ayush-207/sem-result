import * as d3 from 'd3';
import { useEffect, useState } from 'react';

const Histogram = ({ width, height, data }) => {

    // console.log(data);
    let datanew = [];
    for (let i = 0; i <= 10; i++) {
        if (data[i]) {
            datanew.push({ 'index': i, 'val': data[i] });
        }
        else datanew.push({ 'index': i, 'val': 0 });
    }

    // console.log(datanew);
    data = datanew;

    useEffect(() => {
        drawChart();
    }, [])

    const drawChart = () => {

        // declare margins
        const margin = { top: 70, right: 50, bottom: 30, left: 50 };

        // create the svg that holds the chart
        const svg = d3.select("#histogram")
            .append('svg')
            .style("background-color", "white")
            .attr("width", width)
            .attr("height", height)
            .append('g')
            .attr("transform", `translate(0,-${margin.bottom - 10})`);

        // create the x axis scale, scaled to the states
        const xScale = d3.scaleBand()
            .domain(data.map(d => d.index))
            .rangeRound([margin.left, width - margin.right])
            .padding(0.1)

        // create the y axis scale, scaled from 0 to the max
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.val)])
            .range([height - margin.bottom, margin.top])

        // create a scale between colors that varies by the frequency
        const barColors = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.val)])
            .range(["blue", "red"])

        // set the x axis on the bottom.
        // tilts the axis text so it's readable and not smushed.
        svg.append("g")
            .attr('transform', `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(xScale))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")

        // set the y axis on the left
        svg.append("g")
            .attr('transform', `translate(${margin.left},0)`)
            .call(d3.axisLeft(yScale));

        // create the actual bars on the graph, appends a 'rect' for every data element
        // sets the x and y positions relative to the scales already established
        // sets the height according to the yscale
        // static bar width, color is scaled on the y axis
        // finally the bars have an outline
        const bars = svg
            .selectAll("rect")
            .data(data)
            .enter().append("rect")
            .attr('x', d => xScale(d.index))
            .attr('y', d => yScale(d.val))
            .attr('width', xScale.bandwidth())
            .attr('height', d => yScale(0) - yScale(d.val))
            .style("padding", "3px")
            .style("margin", "1px")
            .style("width", d => `${d * 10}px`)
            .attr("fill", function (d) { return barColors(d.val) })
            .attr("stroke", "black")
            .attr("stroke-width", 1)

    }

    return (
        <div className='flex justify-center items-center'>
            <div id='histogram' />
        </div>
    )
}

export default Histogram;