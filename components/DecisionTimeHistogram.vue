<template>
  <div>
    <Bar
      :chart-data="chartData"
      :options="options1"
      style="position: relative; height: 15rem; max-height: 50vh"
    />
    <Bar
      :chart-data="chartData"
      :options="options2"
      style="position: relative; height: 15rem; max-height: 50vh"
    />
    <p class="text-center mt-4">
      Zatímco OS Praha 1 vyřeší do roka 95% případů, JUDr. Helena Králová jen
      90%, tedy o <strong>5 proc. bodů méně</strong>.<br />
      Přibližně <strong>33% z věcí</strong> trvajících na OS Praha 1 přes dva
      roky má na stole právě JUDr. Helena Králová.
    </p>
    <p class="text-sm text-center mt-1">
      Zdroj: data z
      <a
        href="http://infosoud.justice.cz"
        class="underline"
        target="_blank"
        rel="noopener"
        >justice.cz</a
      >, řízení 2013-2018, metodika použití dat
      <a
        href="https://docs.google.com/document/d/1hA6LwwUZa8KQZi0nIGuPFy41x_OPMN0k0l-1j9X4uLw/edit"
        class="underline"
        target="_blank"
        rel="noopener"
        >zde</a
      >.
    </p>
  </div>
</template>

<script>
import Bar from './charts/Bar'

const tooltipCalc = (tooltipItem, data) => {
  const dataset = data.datasets[tooltipItem.datasetIndex]
  return dataset.data[tooltipItem.index] + '%'
}

const titleRender = (tooltipItem, data) => {
  return `${tooltipItem[0].xLabel} dní`
}

export default {
  components: {
    Bar
  },
  data() {
    return {
      chartData: {
        labels: [
          0,
          60,
          120,
          180,
          240,
          300,
          360,
          420,
          480,
          540,
          600,
          660,
          720,
          780,
          840,
          900,
          960,
          1020,
          1080,
          1140,
          1200,
          1260,
          1320,
          1380,
          1440,
          1500,
          1560,
          1620
        ],
        datasets: [
          {
            label: 'OS Praha 1',
            data: [
              47.0,
              24.0,
              12.1,
              6.4,
              3.2,
              2.2,
              1.6,
              1.1,
              0.6,
              0.8,
              0.3,
              0.2,
              0,
              0,
              0.1,
              0,
              0.1,
              0,
              0.1,
              0.0,
              0.0,
              0.0,
              0.0,
              0.0,
              0.0,
              0.0,
              0.0,
              0.0
            ],
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderColor: 'rgba(0, 0, 0, 0.2)',
            borderWidth: 2
          },
          {
            label: 'JUDr. Helena Králová',
            data: [
              47.84,
              19.31,
              10.37,
              5.76,
              4.03,
              2.31,
              3.17,
              2.02,
              1.15,
              2.2,
              0,
              0.29,
              0,
              0,
              0.58,
              0,
              0.29,
              0,
              0.58,
              0.0,
              0.0,
              0.0,
              0.0,
              0.0,
              0.0,
              0.0,
              0.29,
              0.0
            ],
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 2
          }
        ]
      },
      options1: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text:
            'Kolik procent případů je vyřízení v každém šedesátidenním intervalu',
          fontSize: 18
        },
        legend: {
          display: true
        },
        tooltips: {
          callbacks: {
            label: tooltipCalc,
            title: titleRender
          }
        },
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 10
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Relativní četnost případů'
              },
              ticks: {
                fontStyle: '700',
                callback(value, index, values) {
                  return value + '%'
                }
              }
            }
          ]
        },
        plugins: {
          deferred: {
            yOffset: '60%',
            delay: 700
          }
        }
      },
      options2: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Detail pro dlouhé délky řízení',
          fontSize: 18
        },
        legend: {
          display: true
        },
        tooltips: {
          callbacks: {
            label: tooltipCalc,
            title: titleRender
          }
        },
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 10
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Relativní četnost případů'
              },
              ticks: {
                fontStyle: '700',
                max: 5,
                callback(value, index, values) {
                  return value + '%'
                }
              }
            }
          ]
        },
        plugins: {
          deferred: {
            yOffset: '60%',
            delay: 700
          }
        }
      }
    }
  }
}
</script>
