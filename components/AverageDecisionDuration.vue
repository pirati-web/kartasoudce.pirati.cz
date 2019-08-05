<template>
  <div>
    <HorizontalBar
      :chart-data="chartData"
      :options="options"
      style="position: relative; height: 15rem; max-height: 50vh; max-width: 100%;"
    />
    <p class="text-center mt-4">
      JUDr. Helena Králová je průměrně o <strong>21% pomalejší</strong> než
      průměrný trestní soudce OS Praha 1.
    </p>
    <p class="text-sm text-center mt-1">
      Zdroj: data z
      <a
        href="http://infosoud.justice.cz"
        class="underline"
        target="_blank"
        rel="noopener"
        >justice.cz</a
      >, metodika použití dat
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
import HorizontalBar from './charts/HorizontalBar'

export default {
  components: {
    HorizontalBar
  },
  data() {
    return {
      chartData: {
        labels: ['OS Praha 1', 'JUDr. Králová Hana'],
        datasets: [
          {
            data: [113, 137],
            backgroundColor: ['rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0.6)'],
            borderColor: ['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 1)'],
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Průměrná doba řízení (ve dnech)',
          fontSize: 18
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontStyle: '700'
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
