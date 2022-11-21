//enabling responsiveness
var responsiveOptions = [
  [
    "screen and (min-width: 641px) and (max-width: 1024px)",
    {
      seriesBarDistance: 10,
      axisX: {
        //displaying labels
        //enabling a function that allows us to modify values
        labelInterpolationFnc: function (value) {
          return value;
        },
      },
    },
  ],
  [
    "screen and (max-width: 640px)",
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        },
      },
    },
  ],
];

new Chartist.Bar(
  "#chart1",
  {
    labels: [
      "Citation Added in the past month",
      "Citation Added in the past year",
      "Avg. Approved Citation Added in the past year",
    ],
    series: [[35, 1021, 885]],
  },

  responsiveOptions
);
