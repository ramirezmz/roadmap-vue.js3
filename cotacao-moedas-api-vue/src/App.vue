<template>
  <div class="container grid-lg">
    <div class="card">
      <div class="card-header">
        <h4>Todas as moedas</h4>
      </div>
      <div class="card-body">
        <ListQuotes :quotes="quotes"/>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import api from '@/services/api'
import ListQuotes from './components/ListQuotes.vue'
export default {
  name: 'App',
  components: { ListQuotes },
  setup() {
    const data = reactive({
      quotes: {},
    })

    onMounted(async () => {
      const response = await api.all()
      data.quotes = response.data
    })
    return { ...toRefs(data) }
  }
 }
</script>
