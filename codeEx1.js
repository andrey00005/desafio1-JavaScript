let n1 = Number(prompt("insira o número 1"))
    let n2 = Number(prompt("insira o número 2"))

    const soma = n1 + n2
    const subtracao = n1 - n2
    const multiplicacao = n1 * n2
    let divisao = (n1 / n2)
    const resto = n1 % n2
    const sePar = (n1 + n2) % 2 === 0 ? "PAR" : "ÍMPAR"
    const seIgual = n1 === n2 ? "IGUAIS" : "DIFERENTES"

    if (divisao !== Math.floor(divisao)) {
      divisao = (n1 / n2).toFixed(2)
    }

    alert(`A soma de ${n1} + ${n2} é: ${soma}`)
    alert(`A subtração de ${n1} - ${n2} é: ${subtracao}`)
    alert(`A multiplicação de ${n1} x ${n2} é: ${multiplicacao}`)
    alert(`A divisão de ${n1} por ${n2} é: ${divisao}`)
    alert(`O resto de ${n1} e ${n2} é: ${resto}`)
    alert(`A soma dos numeros escolhidos foi um número ${sePar}`)
    alert(`Os números adicionados são ${seIgual}`)