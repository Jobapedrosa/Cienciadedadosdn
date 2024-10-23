const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que no mundo há um total de ${dados.total_pessoas_mundo} pessoas,onde desse total a grande maioria sendo ${dados.total_pessoas_com-acesso_educacao} tem acesso a educação ,o tempo médio para estudo  é de ${dados.tempo_medio_dias_estudando} horas por dia. Porém desse total de pessoas com educação superior é de ${dados.total_pessoas_com_educacao_superior} ?
                A educação é o caminho para atingir o sucesso que você almeja.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}
vizualizarInformacoesGlobais()