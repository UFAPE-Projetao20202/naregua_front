Feature: Cadastro Cliente

Scenario: Tentativa de cadastro com senha inválida
Given Eu estou na tela de login
And Eu clico na opção de cadastro
And Eu estou na tela de cadastro
And eu preencho o campo "nome" com "João Silva"
And eu preencho o campo "email" com "exemplo2@email.com"
And eu preencho o campo "senha" e o campo "confirmar senha" com a senha invalida "a"
And eu preencho o campo "Nª de celular" com "8822445566"
And eu pressiono o botão "Cadastrar"
Then eu vejo uma mensagem de erro

Scenario: Tentativa de cadastro com todos os campos preenchidos corretamente
Given Eu estou na tela de login
And Eu clico na opção de cadastro
And Eu estou na tela de cadastro
And eu preencho o campo "nome" com "João Silva"
And eu preencho o campo "email" com "exemplo2@email.com"
And eu preencho o campo "senha" e o campo "confirmar senha" com "123456"
And eu preencho o campo "Nª de celular" com "8822445566"
And eu pressiono o botão "Cadastrar"
Then eu vejo uma mensagem de confirmação de cadastro

Scenario: Tentativa de cadastro com E-mail já cadastrado
Given Eu estou na tela de login
And Eu clico na opção de cadastro
And Eu estou na tela de cadastro
And eu preencho o campo "nome" com "João Silva"
And eu preencho o campo "email" com "exemplo2@email.com"
And eu preencho o campo "senha" e o campo "confirmar senha" com "123456"
And eu preencho o campo "Nª de celular" com "8822445566"
And eu pressiono o botão "Cadastrar"
Then eu vejo uma mensagem de erro indicando email já cadastrado