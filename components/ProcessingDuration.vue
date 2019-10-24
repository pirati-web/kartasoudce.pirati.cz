<template>
  <div>
    <HorizontalBar
      :chart-data="chartData"
      :options="options"
      style="position: relative; height: 25rem; width: 40rem; max-height: 50vh; max-width: 100%;"
    />
    <p class="text-sm text-center mt-1">
      Zdroj: Výkaz CSLAV za období od 1. 1. do 31. 12. 2018,
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
        labels: [
          'Vyřízeno do 3 měsíců',
          'Vyřízeno od 3 do 6 měsíců',
          'Vyřízeno od 6 měsíců do 1 roku',
          'Vyřízeno od 1 do 2 let',
          'Vyřízeno od 2 do 5 let',
          'Nevyřízeno'
        ],
        datasets: [
          {
            data: [113, 11, 8, 6, 2, 18],
            backgroundColor: 'rgb(195, 227, 225)',
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Doba vyřízení dle výkazu CSLAV',
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
