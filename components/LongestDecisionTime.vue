<template>
  <div>
    <HorizontalBar
      :chart-data="chartData"
      :options="options"
      style="position: relative; height: 15rem; max-height: 50vh"
    />
    <p class="text-center mt-4">
      JUDr. Helena Králová vyřeší 90 % případů v době 368 dní, což je o
      <strong>42% pomalejší</strong> než průměr OS Praha 1.
    </p>
    <p class="text-sm text-center mt-1">
      Zdroj: data z
      <a
        href="http://infosoud.justice.cz"
        class="underline"
        target="_blank"
        rel="noopener"
        >justice.cz</a
      >, řízení 2013-2018,
      <a
        v-smooth-scroll="{ offset: 0, duration: 1000 }"
        class="underline"
        href="#data-methodology"
        >zobrazit metodiku použití dat</a
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
            data: [260, 368],
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
          text: 'Doba trvání 10% nejdelších případů (ve dnech)',
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
