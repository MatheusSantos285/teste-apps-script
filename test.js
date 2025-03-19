// Simulação do comportamento da planilha no ambiente local
class MockSheet {
    constructor() {
      this.data = {
        A1: "",
        B1: "",
        C1: 0
      };
    }
  
    getRange(cell) {
      return {
        getValue: () => this.data[cell],
        setValue: (value) => {
          this.data[cell] = value;
          console.log(`${cell} atualizado para:`, value);
        }
      };
    }
  }
  
  // Criamos uma simulação da planilha
  function escreverMensagemSimulado() {
    var aba = new MockSheet(); // Simulamos a aba da planilha
  
    aba.getRange("A1").setValue("Olá, GitHub!");
    aba.getRange("B1").setValue("Última execução: " + new Date());
  
    // Contador de execuções na célula C1
    var contadorRange = aba.getRange("C1");
    var contadorAtual = contadorRange.getValue();
  
    if (!contadorAtual) {
      contadorAtual = 1;
    } else {
      contadorAtual++;
    }
  
    contadorRange.setValue(contadorAtual);
  
    return aba.data; // Retorna os valores atualizados
  }
  
  // Testamos a função
  console.log("Resultado da simulação:", escreverMensagemSimulado());
  