function gerarArquivoTxt() {
	
      // 1. Pegar os dados dos elementos HTML
	const nome = document.getElementById("nome");
	const email = document.getElementById("email").value;
   const sugestao = document.getElementById("sugestao").value;


      // 2. Organizar o texto que irá para o arquivo
    const conteudoTexto = `Dados do Formulário:\nNome: ${nome}\nEmail: ${email}\nSugestao: ${sugestao}`;
	if (email != "" || sugestao !="") {  
      // 3. Criar o arquivo virtual (Blob)
    const blob = new Blob([conteudoTexto], { type: 'text/plain;charset=utf-8' });

      // 4. Criar um link temporário para download
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "dados_formulario.txt"; // Nome do arquivo .txt
    alert('Obrigado pela sugestão')

      // 5. Simular o clique no link para baixar
   document.body.appendChild(link);
   link.click();

      // 6. Limpar o link da memória
    document.body.removeChild(link);
	URL.revokeObjectURL(url);
	
	} else {alert('O Formulário está incompleto');} 

  
    
}