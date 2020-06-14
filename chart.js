function makeTable(table) {
  let labels = [];
  let series = [];

  let rows = Array.from(table.querySelectorAll(":scope tbody tr"));
  let minY = 90;
  let maxY = 100;
  rows = rows.reverse();

  for(let row of rows) {
    labels.push(row.children[0].innerText);
    let childCount = row.children.length - 1;
    let seriesIndex = 0;
    for(let j = 0, k = childCount; j<k; j++) {
      let data = row.children[j + 1].dataset;
      if(data && data.numericValue) {
        minY = Math.min(data.numericValue, minY);
        maxY = Math.max(data.numericValue, maxY);
        if(!series[seriesIndex]) {
          series[seriesIndex] = [];
        }
        series[seriesIndex].push(data.numericValue);
        seriesIndex++;
      }
    }
  }
  console.log( series );

  let options = {
    high: Math.max(maxY, 100),
    low: Math.max(0, minY - 5),
    onlyInteger: true,
    showPoint: false,
    lineSmooth: true,
    axisX: {
      showGrid: true,
      showLabel: true
    },
  };

  new Chartist.Line(table.nextElementSibling, {
    labels: labels,
    series: series
  }, options);
}

let tables = document.querySelectorAll("[data-make-chart]");
for(let table of tables) {
  makeTable(table);
}