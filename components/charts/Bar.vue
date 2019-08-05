<script>
import { Bar, mixins } from 'vue-chartjs'
import deferred from 'chartjs-plugin-deferred'

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: {
    options: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  mounted() {
    this.addPlugin(deferred)
    this.renderChart(this.chartData, this.options)
  }
}
</script>
