function escreverMensagem() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var aba = planilha.getActiveSheet();
  aba.getRange("A1").setValue("Olá, GitHub!");
}
