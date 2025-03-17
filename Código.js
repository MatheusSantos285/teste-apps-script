function escreverMensagem() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var aba = planilha.getActiveSheet();
  
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
}
