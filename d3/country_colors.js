// Check if d3 version 5 is available
if (d3.version.startsWith("5.")) {
  // Use d3 version 5 syntax
  d3.csv("https://raw.githubusercontent.com/idaflik/data/master/frontex_grants_countries_sectors.csv").then(function(data) {
    // Extract unique country names from the data
    var countryNames = d3.set(data.map(function(d) {
        return d.country;
    })).values();

    // Define a color scale for countries using the extracted country names
    var countryColorScale = d3.scaleOrdinal()
        .domain(countryNames)
        //.range(d3.schemeCategory10); // Use a D3 color scheme or define your own range of colors
        .range(['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f']);

    // Now you can use the color scale as needed
    //console.log(countryColorScale("Albania")); // Returns the color for "Albania"
  });
} else {
  // Use d3 version 3 syntax
  d3.csv("https://raw.githubusercontent.com/idaflik/data/master/frontex_grants_countries_sectors.csv", function(data) {
    // Extract unique country names from the data
    var countryNames = d3.set(data.map(function(d) {
        return d.country;
    })).values();

    // Define a color scale for countries using the extracted country names
    var countryColorScale = d3.scale.ordinal()
        .domain(countryNames)
        //.range(d3.scale.category10().range()); // Use a D3 color scheme or define your own range of colors
        .range(['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f']);

    // Now you can use the color scale as needed
    //console.log(countryColorScale("Albania")); // Returns the color for "Albania"
  });
}