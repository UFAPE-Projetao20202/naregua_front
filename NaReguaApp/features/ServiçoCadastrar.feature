Feature: Cadastro Serviço

Scenario: Cadastrar um serviço sem o nome
Given Eu estou na tela de login
And eu preencho o campo "email" com "exemplo@email.com"
And eu preencho o campo "senha" com "123456"
And eu pressiono o botão "Login"
And eu vejo a tela inicial de prestador
And eu pressiono o botão "Criar Serviço"
And eu vejo a tela inicial de novo serviço
And eu preencho o campo "valor" com "50,00"
And eu preencho o campo "Duração Média" com "15,00"
And eu preencho o campo "Descrição" com "Adicione uma descrição"
And eu pressiono o botão "Concluir"
Then eu vejo uma mensagem de erro

Scenario: Cadastrar um serviço com todos os dados corretos
Given Eu estou na tela de login
And eu preencho o campo "email" com "exemplo@email.com"
And eu preencho o campo "senha" com "123456"
And eu pressiono o botão "Login"
And eu vejo a tela inicial de prestador
And eu pressiono o botão "Criar Serviço"
And eu vejo a tela inicial de novo serviço
And eu preencho o campo "nome" com "Corte de cabelo"
And eu preencho o campo "valor" com "50,00"
And eu preencho o campo "Duração Média" com "15,00"
And eu preencho o campo "Descrição" com "Adicione uma descrição"
And eu pressiono o botão "Concluir"
Then eu vejo uma mensagem de confirmação de cadastro do serviço
