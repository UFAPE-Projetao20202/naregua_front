Feature: Login Cliente

Scenario: Cliente faz login com sucesso
Given Eu estou na tela de login
And eu preencho o campo "email" com "exemplo2@email.com"
And eu preencho o campo "senha" com "123456"
And eu pressiono o botão "Login"
Then eu vejo a tela inicial de cliente

Scenario: login com e-mail incorreto e senha correta
Given Eu estou na tela de login
And eu preencho o campo "email" com o email incorreto "abc@email.com"
And eu preencho o campo "senha" com "123456"
And eu pressiono o botão "Login"
Then eu vejo uma mensagem de erro no login

Scenario: login com e-mail correto e senha incorreta
Given Eu estou na tela de login
And eu preencho o campo "email" com "exemplo2@email.com"
And eu preencho o campo "senha" com a senha incorreta "654321"
And eu pressiono o botão "Login"
Then eu vejo uma mensagem de erro no login