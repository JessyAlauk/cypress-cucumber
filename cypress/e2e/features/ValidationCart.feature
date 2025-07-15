Feature: Validar carrinho 

Scenario Outline: Validar carrinho com sucesso
Given uma busca do "<product>" no site da amazon
When seleciona e inclui este produto no carrinho
And acessa o carrinho
And aumenta a quantidade para 2
Then o valor total deve ser a soma dos produtos

Examples:
    |product|
    |Huggies Fralda Premium Natural Care M 32 Un|
    |mouse hyperx |

Scenario Outline: Excluir produto do carrinho
Given uma busca do "<product>" no site da amazon
When seleciona e inclui este produto no carrinho
And acessa o carrinho
And exclui o produto
Then deve retornar um erro informando que nao ha produtos no carrinho

Examples:
    |product|
    |Huggies Fralda Premium Natural Care M 32 Un|
    |mouse hyperx|