"use strict";

const csv = `1975,24.1297113164
1976,24.1999955458
1977,24.2715652624
1978,24.344992556
1979,24.4215597835
1980,24.5009015401
1981,24.581846809
1982,24.6654356868
1983,24.751542689
1984,24.840441387
1985,24.9323171403
1986,25.0270582626
1987,25.1241995379
1988,25.2239314316
1989,25.3265942256
1990,25.4328426021
1991,25.5418588849
1992,25.6529226135
1993,25.7657018892
1994,25.8795123519
1995,25.9938267168
1996,26.1084190204
1997,26.2222068785
1998,26.3350196516
1999,26.4465901244
2000,26.5560165318
2001,26.6634124132
2002,26.7654259279
2003,26.8615675033
2004,26.9508057431
2005,27.0322719036
2006,27.1062255031
2007,27.1721456806
2008,27.2301243391
2009,27.280230772
2010,27.3219983205
2011,27.355768505
2012,27.3834774784
2013,27.4076247165
2014,27.4298953971
2015,27.4525029996
2016,27.4750575645`;

function addData(data, s) {
	let year = s.slice(0, s.indexOf(","));
	let bmi = s.slice(s.indexOf(",")+1);
	data.push({
		year: parseInt(year, 10),
		bmi: parseFloat(bmi)
	});
}

(() => {
	let data = [];

	csv.split("\n").forEach( (elem, index, arr) => {
		addData(data, elem);
	});
	
	d3.select("#boi")
		//This line is necessary cuz otherwise the
		//data will be attached to the svg frame.
		//We want to attach data to the "imaginary"
		//circles
		.selectAll("circle")
		.data(data).enter()
		.append("circle")
		.attr("r", 5)
		//stretch out the data points so they're more
		//distinct
		.attr("cx", d => {
			let x = (d.year*10) - 19700;
			console.log(x);
			return x;
		})
		.attr("cy", d => {
			let y = 500 - ((d.bmi*120) - 2850);
			console.log(y);
			return y;
		})
		
		.attr("stroke", "black")
		.attr("fill", "BlanchedAlmond");
})();

