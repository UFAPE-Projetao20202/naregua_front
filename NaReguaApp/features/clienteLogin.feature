Feature: Login Cliente

Scenario: Cliente faz login com sucesso
Given Eu estou na tela de login
And eu preencho o campo "email" com "exemplo2@email.com"
And eu preencho o campo "senha" com 123456
And eu pressiono o botão "Login"
Then eu vejo a tela inicial de cliente