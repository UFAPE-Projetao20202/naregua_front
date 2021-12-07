const wd = require('wd');
const assert = require('assert');
const { Before, Given, When, Then, After } = require('@cucumber/cucumber');

const Port = 4723;

const config = {
  platformName: 'Android',
  deviceName: 'Pixel_5_API_29', //nome do celular
  udid: 'emulator-5554', //adb devices no terminal
  platformVersion: '10', //versão do android
  appPackage: 'com.nareguaapp',
  appActivity: 'com.nareguaapp.MainActivity',
  automationName: "UiAutomator2"
}

const driver = wd.promiseChainRemote('localhost', Port);

Before({timeout: 50000}, async () => {
  await driver.init(config);
  await driver.sleep(6000); // wait for app to load
});


After(async() => {
  await driver.quit();
});


Given('Eu estou na tela de login', {timeout: 30000}, async() => {
  let ehTelaLogin = await driver.hasElementByAccessibilityId("botao-login");
  assert.equal(ehTelaLogin, true);
});

When('Eu clico na opção de cadastro', {timeout: 20000}, async() => {
  await driver.setImplicitWaitTimeout(15000);
  let botaoCadastro = await driver.elementByAccessibilityId("botao-cadastro");
  botaoCadastro.click();
});

When('Eu estou na tela de cadastro', {timeout: 30000}, async() => {
  await driver.setImplicitWaitTimeout(15000);
  let ehTelaCadastro = await driver.hasElementByAccessibilityId("botao-cadastrar");
  assert.equal(ehTelaCadastro, true);
});

When('eu preencho o campo "nome" com "João Silva"', async() => {
  let preencherNome = await driver.elementByAccessibilityId('campo-nome');
  preencherNome.sendKeys("João Silva");
});

When('eu preencho o campo "email" com "exemplo2@email.com"', async() => {
  let preencherEmail = await driver.elementByAccessibilityId('campo-email');
  preencherEmail.sendKeys("exemplo2@email.com");
});

///
When('eu preencho o campo "email" com "exemplo@email.com"', async() => {
  let preencherEmail = await driver.elementByAccessibilityId('campo-email');
  preencherEmail.sendKeys("exemplo@email.com");
});
///

When('eu preencho o campo "senha" e o campo "confirmar senha" com a senha invalida "a"', async() => {
  let preencherSenha = await driver.elementByAccessibilityId('campo-senha');
  preencherSenha.sendKeys("a");
  let preencherConfirmarSenha = await driver.elementByAccessibilityId('campo-confirmarSenha');
  preencherConfirmarSenha.sendKeys("a");
});

When('eu preencho o campo "senha" e o campo "confirmar senha" com "123456"', async() => {
  let preencherSenha = await driver.elementByAccessibilityId('campo-senha');
  preencherSenha.sendKeys("123456");
  let preencherConfirmarSenha = await driver.elementByAccessibilityId('campo-confirmarSenha');
  preencherConfirmarSenha.sendKeys("123456");
});

When('eu preencho o campo "Nª de celular" com "8822445566"', async() => {
  let preencherCelular = await driver.elementByAccessibilityId('campo-celular');
  preencherCelular.sendKeys("8822445566");
});

///
When('eu preencho o campo "Nª de celular" com "8833445566"', async() => {
  let preencherCelular = await driver.elementByAccessibilityId('campo-celular');
  preencherCelular.sendKeys("8833445566");
});
///

When('eu seleciono a opção "Prestador"', async() => {
  let campoPrestador = await driver.elementByAccessibilityId("campo-prestador");
  campoPrestador.click();
});

When('eu seleciono a opção "Tipo de Serviço" e seleciono "Manicure"', async() => {
  let campoServico = await driver.elementByAccessibilityId("campo-servico");
  //campoServico.click();
  let campoTipoServico = await driver.elementByAccessibilityId("campo-tiposervico")
  campoTipoServico.click()
  campoTipoServico.select("Manicure");
});

When('eu pressiono o botão "Cadastrar"', async() => {
  let botaoCadastrar = await driver.elementByAccessibilityId("botao-cadastrar");
  botaoCadastrar.click();
});

Then('eu vejo a tela de login', {timeout: 20000}, async() => {
  await driver.setImplicitWaitTimeout(15000);
  let ehTelaLogin = await driver.hasElementByAccessibilityId("botao-login");
  assert.equal(ehTelaLogin, true);
});

Then('eu vejo uma mensagem de erro', {timeout: 20000}, async() => {
  await driver.setImplicitWaitTimeout(15000);
  let msgErro = await driver.hasElementByXPath("//*[@text='Preencha todos os campos corretamente']");
  assert.equal(msgErro, true);
});

Then('eu vejo uma mensagem de erro indicando email já cadastrado', {timeout: 20000}, async() => {
  await driver.setImplicitWaitTimeout(15000);
  let msgErro = await driver.hasElementByXPath("//*[@text='Já existe um usuário com esse email.']");
  assert.equal(msgErro, true);
});

When('eu preencho o campo "senha" com "123456"', async() => {
  let preencherSenha = await driver.elementByAccessibilityId('campo-senha');
  preencherSenha.sendKeys("123456");
});

When('eu pressiono o botão "Login"', async() => {
  let botaoLogin = await driver.elementByAccessibilityId("botao-login");
  botaoLogin.click();
});

Then('eu vejo a tela inicial de cliente', {timeout: 20000}, async() => {
  await driver.setImplicitWaitTimeout(15000);
  let ehTelaInicial = await driver.hasElementByXPath("//*[@text='InicioCliente']");
  assert.equal(ehTelaInicial, true);
});

When('eu preencho o campo "email" com o email incorreto "abc@email.com"', async() => {
  let preencherEmail = await driver.elementByAccessibilityId('campo-email');
  preencherEmail.sendKeys("abc@email.com");
});

When('eu preencho o campo "senha" com a senha incorreta "654321"', async() => {
  let preencherSenha = await driver.elementByAccessibilityId('campo-senha');
  preencherSenha.sendKeys("654321");
});

Then('eu vejo uma mensagem de erro no login', {timeout: 20000}, async() => {
  await driver.setImplicitWaitTimeout(15000);
  let msgErro = await driver.hasElementByXPath("//*[@text='Email ou senha incorretos!']");
  assert.equal(msgErro, true);
});

When('eu vejo a tela inicial de prestador', {timeout: 20000}, async() => {
  await driver.setImplicitWaitTimeout(15000);
  let ehTelaInicial = await driver.hasElementByXPath("//*[@text='InicioPrestador']");
  assert.equal(ehTelaInicial, true);
});

When('eu pressiono o botão "Criar Serviço"', async() => {
  let botaoCriarServico = await driver.elementByAccessibilityId("botao-criarservico");
  botaoCriarServico.click();
});

When('eu vejo a tela inicial de novo serviço', {timeout: 20000}, async() => {
  await driver.setImplicitWaitTimeout(15000);
  let ehTelaNovoServico = await driver.hasElementByXPath("//*[@text='Novo Serviço']");
  assert.equal(ehTelaNovoServico, true);
});

When('eu preencho o campo "nome" com "Corte de cabelo"', async() => {
  let preencherNome = await driver.elementByAccessibilityId('campo-nome');
  preencherNome.sendKeys("Corte de cabelo");
});

When('eu preencho o campo "valor" com "50,00"', async() => {
  let preencherValor = await driver.elementByAccessibilityId('campo-valor');
  preencherValor.sendKeys("50");
});

When('eu preencho o campo "Duração Média" com "15,00"', async() => {
  let preencherDuracao = await driver.elementByAccessibilityId('campo-duracao');
  preencherDuracao.sendKeys("15");
});

When('eu preencho o campo "Descrição" com "Adicione uma descrição"', async() => {
  let preencherDescricao = await driver.elementByAccessibilityId('campo-descricao');
  preencherDescricao.sendKeys("Adicione uma descrição");
});

When('eu pressiono o botão "Concluir"', async() => {
  let botaoConcluir = await driver.elementByAccessibilityId("botao-concluir");
  botaoConcluir.click();
});

Given('O usuario de email {string} e senha {string} existe', {timeout: 30000}, async (email, senha) => {

    // tela de login
    let ehTelaLogin = await driver.hasElementByAccessibilityId("botao-login");
    assert.equal(ehTelaLogin, true);

    // cadastro
    let irCadastrar = await driver.elementByAccessibilityId('botao-cadastro');
    irCadastrar.click();

    await driver.setImplicitWaitTimeout(5000);

    // nome
    let preencherNome = await driver.elementByAccessibilityId('campo-nome');
    preencherNome.sendKeys("Evandro");
    // email
    let preencherEmail = await driver.elementByAccessibilityId('campo-email');
    preencherEmail.sendKeys(email);
    // senha
    let preencherSenha = await driver.elementByAccessibilityId('campo-senha');
    preencherSenha.sendKeys(senha);
    // confirmarSenha
    let preencherConfirmarSenha = await driver.elementByAccessibilityId('campo-confirmarSenha');
    preencherConfirmarSenha.sendKeys(senha);
    // celular
    let preencherCelular = await driver.elementByAccessibilityId('campo-celular');
    preencherCelular.sendKeys('88922445566');

    // cadastrar
    let cadastrarBtn = await driver.elementByAccessibilityId('botao-cadastrar');
    cadastrarBtn.click();

    await driver.setImplicitWaitTimeout(5000);

    let alert = await driver.elementByXPath("//*[@text='OK']");
    alert.click();
});

Given('Eu estou logado com email {string} e senha {string}',{timeout: 30000} , async (email, senha
) => {
   let preencherEmail = await driver.elementByAccessibilityId('campo-email');
   preencherEmail.sendKeys(email);
   // senha
   let preencherSenha = await driver.elementByAccessibilityId('campo-senha');
   preencherSenha.sendKeys(senha);

   loginBtn = await driver.elementByAccessibilityId('botao-login');
   loginBtn.click();
});

Given('Eu estou na tela inicial de cliente', {timeout: 30000}, async() => {
    await driver.setImplicitWaitTimeout(5000);
    let ehTelaInicio = await driver.hasElementByAccessibilityId("inicio-cliente");
    assert.equal(ehTelaInicio, true);
});

Given('Eu clico em buscar prestadores', {timeout: 30000}, async() => {
    await driver.setImplicitWaitTimeout(15000);
    let buscarBtn = await driver.elementByAccessibilityId("buscar-prestador-btn");
    buscarBtn.click();

    let telaBusca = await driver.hasElementByAccessibilityId("buscar-prestador-tela");
    assert.equal(telaBusca, true);
});

Given('Preencho campo do nome com {string}', {timeout: 30000}, async(nome) => {
    await driver.setImplicitWaitTimeout(15000);
    let campoNome = await driver.elementByAccessibilityId('nome-prestador');
    campoNome.sendKeys(nome);
});

When('Clico em buscar este prestador', {timeout: 30000}, async() => {
    await driver.setImplicitWaitTimeout(15000);
    let buscarBtn = await driver.elementByAccessibilityId('buscar-prestador-btn');
    buscarBtn.click();
});

Then('Vejo o prestador {string}', {timeout: 30000}, async(nome) => {
    await driver.setImplicitWaitTimeout(15000);
    let hasNome = await driver.hasElementByXPath("//*[@text='"+nome+"']");
    assert.equal(hasNome, true);
});

When('Clico em listar os serviços do prestador {string}', {timeout: 30000}, async(nome) => {
    await driver.setImplicitWaitTimeout(15000);
    let buscarBtnNome = await driver.elementByAccessibilityId(nome);
    buscarBtnNome.click();
});

Then('Vejo a lista de serviços', {timeout: 30000}, async() => {
    await driver.setImplicitWaitTimeout(15000);
    let listaTela = await driver.hasElementByAccessibilityId('lista-servicos-tela');
    assert.equal(listaTela, true);
});

When('Seleciono o serviço de nome {string}', {timeout: 30000}, async(nomeServico) => {
    await driver.setImplicitWaitTimeout(15000);
    let servico = await driver.elementByAccessibilityId(nomeServico);
    servico.click();
});

Then('Vejo as informações do serviço', {timeout: 30000}, async() => {
    await driver.setImplicitWaitTimeout(15000);
    let servico = await driver.hasElementByAccessibilityId('servico-tela');
    assert.equal(servico, true)
});