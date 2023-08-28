## Desafio
Dado um array de "jobs" para execução, no qual cada posição possui um objeto com os seguintes atributos:

1) ID: Identificação do Job;
2) Descrição: Descrição do Job;
3) Data Máxima de conclusão do Job: Data máxima em que o Job deve ser concluído;
4) Tempo estimado: Tempo estimado de execução do Job.

Criar algoritmo que retorne um conjunto de arrays com as seguintes características:

1) Cada array do conjunto representa uma lista de Jobs a serem executados em sequência;
2) Cada array deve conter jobs que sejam executados em, no máximo, 8h;
3) Deve ser respeitada a data máxima de conclusão do Job;
4) Todos os Jobs devem ser executados dentro da janela de execução (data início e fim).

Exemplo de Massa de dados:

Janela de execução: 2019-11-10 09:00:00 até 2019-11-11 12:00:00

```
[
    {
        "ID": 1,
        "Descrição": "Importação de arquivos de fundos",
        "Data Máxima de conclusão": 2019-11-10 12:00:00,
        "Tempo estimado": 2 horas,
    },
    {
        "ID": 2,
        "Descrição": "Importação de dados da Base Legada",
        "Data Máxima de conclusão": 2019-11-11 12:00:00,
        "Tempo estimado": 4 horas,
    },
    {
        "ID": 3,
        "Descrição": "Importação de dados de integração",
        "Data Máxima de conclusão": 2019-11-11 08:00:00,
        "Tempo estimado": 6 horas,
    },
]
```

Output esperado

```
[[1, 3], [2]]
```

## Observações

De acordo com uma interpretação pessoal, dado a regra 4 do desafio proposto **(Todos os Jobs devem ser executados dentro da janela de execução (data início e fim))**, caso exista algum job na lista de array de entrada que não se encaixe dentro da janela de execução fornecida, esse job será descartado.

## Configuração do projeto
Abra o terminal e rode os seguintes comandos:

1) git clone https://github.com/alexandrecorazza/scheduling-job.git
2) cd scheduling-job
3) npm install
4) `npm run start` para rodar o algoritmo. O output do array esperado será exebido no terminal por meio do `console.log`
5) `npm run test` para executar os testes