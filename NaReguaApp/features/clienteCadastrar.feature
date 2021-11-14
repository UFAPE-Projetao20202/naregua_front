Feature: Cadastro Cliente

Scenario: Cliente faz cadastro com sucesso
Given Eu estou na tela de login
And Eu clico na opção de cadastro
And Eu estou na tela de cadastro
And eu preencho o campo "nome" com João Silva
And eu preencho o campo "email" com "exemplo2@email.com"
And eu preencho o campo "senha" e o campo "confirmar senha" com 123456
And eu preencho o campo "Nª de celular" com 8822445566
And eu pressiono o botão "Cadastrar"
Then eu vejo a tela de login