new Chart(document.getElementById("regions"), {
  type: "bar",
  options: {
    indexAxis: "y",
    scales: {
      x: {
        min: 0,
        max: 100,
        stacked: true,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  },
  data: {
    labels: [
      "São Paulo",
      "Rio de Janeiro",
      "Goiás",
      "Paraíba",
      "Piauí",
      "Amazonas",
    ],
    datasets: [
      {
        label: "Segurança alimentar",
        data: [44.1, 42.8, 45.2, 36.1, 20, 29.5],
        backgroundColor: "#4E79A7",
        hoverBackgroundColor: "rgba(78,121,167,0.8)",
      },
      {
        label: "Leve",
        data: [28.5, 23.5, 30.4, 42.3, 25.8, 27.5],
        backgroundColor: "#59A14F",
        hoverBackgroundColor: "rgba(89,161,79,0.8)",
      },
      {
        label: "Moderada",
        data: [12.9, 17.7, 12.5, 11, 20, 17],
        backgroundColor: "#EC7D00",
        hoverBackgroundColor: "rgba(236,125,0,0.8)",
      },
      {
        label: "Grave",
        data: [14.6, 15.9, 11.9, 10.6, 34.3, 26],
        backgroundColor: "#E15759",
        hoverBackgroundColor: "rgba(225,87,89,0.8)",
      },
    ],
  },
});