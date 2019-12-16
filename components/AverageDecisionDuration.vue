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
      >,
      <a
        v-smooth-scroll="{ offset: 0, duration: 1000 }"
        class="underline"
        href="#data-methodology"
        >zobrazit metodiku použití dat</a
      >.
    </p>
    <p class="text-sm text-center mt-1">
      Počet řízení, ze kterých grafy vychází: Celkem řízení: 2878, z toho H.
      Králová 370;<br />směrodatná odchylka soudu - 202,8, směrodatná odchylka
      H. Králové - 266,52.
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
        labels: ['OS Praha 1', 'JUDr. Helena Králová'],
        datasets: [
          {
            data: [113, 137],
            backgroundColor: ['rgb(195, 227, 225)', 'rgb(136, 205, 206)'],
            borderWidth: 0
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
                fontColor: '#2B3D52',
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
