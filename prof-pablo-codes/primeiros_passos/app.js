const { createApp, ref, reactive, computed, watch } = Vue;
// testando
const app = createApp({
  setup() {
    const contador = ref(0);
    const somaContador = ref(0);
    const data = reactive({
      titulo: "Robertopaolo asdasd",
    });
    const idade = 16;

    function adicionar() {
      contador.value++;
    }
    function resetarContador() {
      contador.value = 0;
    }
    function somarContador() {
      somaContador.value = contador.value * 10;
    }

    const eMaior = computed(() => idade > 18);
    const nomeCompleto = computed(() => "Pedro" + "de Oliveira");

    watch(contador, (novoValor) => {
      if (novoValor > 10) {
        contador.value = 0;
      }
    });
    return {
      contador,
      adicionar,
      data,
      resetarContador,
      somarContador,
      somaContador,
      eMaior,
      nomeCompleto,
    };
  },
});

app.mount("#app");

