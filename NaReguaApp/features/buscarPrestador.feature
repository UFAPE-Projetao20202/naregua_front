Feature: Busca Prestador Especifico

  As a cliente do sistema NaRegua
  I want buscar por um prestador especifico
  so that eu tenha acesso mais rapido aos servicos cadastrados

  Scenario: Buscar prestador por parte exata do nome de entrada
    Given O usuario de email "evandro@email" e senha "123456" existe
    Given Eu estou logado com email "evandro@email" e senha "123456"
    Given Eu estou na tela inicial de cliente
    Given Eu clico em buscar prestadores
    Given Preencho campo do nome com "Isidoro Beto"
    When Clico em buscar este prestador
    Then Vejo o prestador "Isidoro Beto"
    When Clico em listar os serviços do prestador "Isidoro Beto"
    Then Vejo a lista de serviços

  Scenario: Buscar prestador com nome acentuado e sem inicial maiuscula
    Given Eu estou logado com email "evandro@email" e senha "123456"
    Given Eu estou na tela inicial de cliente
    Given Eu clico em buscar prestadores
    Given Preencho campo do nome com "isídorô"
    When Clico em buscar este prestador
    Then Vejo o prestador "Isidoro Beto"
    When Clico em listar os serviços do prestador "Isidoro Beto"
    Then Vejo a lista de serviços

  Scenario: Buscar prestador e selecionar um serviço
    Given Eu estou logado com email "evandro@email" e senha "123456"
    Given Eu estou na tela inicial de cliente
    Given Eu clico em buscar prestadores
    Given Preencho campo do nome com "Isidoro Beto"
    When Clico em buscar este prestador
    Then Vejo o prestador "Isidoro Beto"
    When Clico em listar os serviços do prestador "Isidoro Beto"
    Then Vejo a lista de serviços
    When Seleciono o serviço de nome "Degradê"
    Then Vejo as informações do serviço

