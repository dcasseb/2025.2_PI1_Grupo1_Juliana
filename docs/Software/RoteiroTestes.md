# Roteiro de Testes de Software - Carrinho Autônomo PI1

## 1. Introdução

Este documento apresenta o roteiro de testes de software para validação do sistema de controle e navegação do carrinho autônomo, conforme especificações do projeto PI1 2025/2.

### 1.1 Objetivo dos Testes
Validar todas as funcionalidades de software do sistema, garantindo que o carrinho execute as trajetórias programadas de forma autônoma, registre dados corretamente e atenda aos requisitos estabelecidos.

---

## 2. Ambiente de Testes

### 2.1 Configuração Necessária
- Carrinho autônomo montado e funcional
- Computador com interface gráfica de programação instalada
- Módulo de comunicação sem fio configurado
- Banco de dados configurado para persistência
- Área de teste com marcações conforme especificado (mínimo 3m x 3m)
- Cronômetro para medição de tempo
- Trena para medição de distâncias
- Objeto de teste (ovo ou similar)
- Caixa acolchoada para recepção

### 2.2 Pré-requisitos
- Hardware totalmente montado e testado
- Bateria carregada (mínimo 80%)
- Calibração dos sensores concluída
- Comunicação sem fio estabelecida

---

## 3. Categorias de Testes

## 3.1 TESTES DE INTERFACE GRÁFICA

### Teste 3.1.1: Abertura e Inicialização da Interface
**Objetivo:** Verificar se a interface gráfica inicia corretamente

**Procedimento:**
1. Executar o software da interface gráfica
2. Observar tempo de carregamento
3. Verificar todos os elementos visuais

**Critérios de Aceitação:**
- Interface carrega em menos de 5 segundos
- Todos os botões e campos estão visíveis
- Não há mensagens de erro

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.1.2: Programação de Trajetória Linear
**Objetivo:** Validar entrada de comandos de movimento linear

**Procedimento:**
1. Abrir interface de programação
2. Inserir comando "Andar 50 cm"
3. Inserir comando "Andar 100 cm"
4. Verificar visualização na interface

**Critérios de Aceitação:**
- Comandos são aceitos sem erro
- Valores são exibidos corretamente
- Interface permite edição/exclusão de comandos

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.1.3: Programação de Rotações
**Objetivo:** Validar entrada de comandos de rotação

**Procedimento:**
1. Inserir comando "Girar 90° direita"
2. Inserir comando "Girar 180° esquerda"
3. Inserir comando "Girar 45° direita"

**Critérios de Aceitação:**
- Comandos aceitos para ângulos: 45°, 90°, 135°, 180°
- Direção (horária/anti-horária) claramente identificada
- Visualização gráfica da rotação

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.1.4: Sequenciamento de Comandos
**Objetivo:** Verificar criação de sequência complexa de comandos

**Procedimento:**
1. Criar sequência:
   - Andar 50 cm
   - Girar 90° direita
   - Andar 30 cm
   - Girar 90° esquerda
   - Andar 40 cm
2. Salvar sequência

**Critérios de Aceitação:**
- Todos comandos são listados na ordem correta
- Interface permite reordenação
- Sequência pode ser salva e carregada

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.1.5: Validação de Entradas
**Objetivo:** Verificar tratamento de entradas inválidas

**Procedimento:**
1. Tentar inserir valores negativos
2. Tentar inserir valores muito grandes (>500 cm)
3. Tentar inserir caracteres não numéricos
4. Tentar ângulos inválidos (ex: 95°)

**Critérios de Aceitação:**
- Sistema rejeita entradas inválidas
- Mensagens de erro são claras
- Interface não trava ou apresenta comportamento inesperado

**Resultado:** [ ] Aprovado [ ] Reprovado

---

## 3.2 TESTES DE COMUNICAÇÃO SEM FIO

### Teste 3.2.1: Estabelecimento de Conexão
**Objetivo:** Verificar conexão inicial entre interface e carrinho

**Procedimento:**
1. Ligar o carrinho
2. Iniciar interface gráfica
3. Executar comando de conexão
4. Observar indicadores de status

**Critérios de Aceitação:**
- Conexão estabelecida em menos de 10 segundos
- Indicador visual mostra status conectado
- Distância mínima de conexão: 5 metros

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.2.2: Transmissão de Trajetória
**Objetivo:** Validar envio de comandos para o carrinho

**Procedimento:**
1. Programar trajetória simples (3 comandos)
2. Enviar para o carrinho
3. Verificar confirmação de recebimento

**Critérios de Aceitação:**
- Comandos transmitidos sem erro
- Carrinho confirma recebimento
- Tempo de transmissão < 2 segundos

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.2.3: Recepção de Dados em Tempo Real
**Objetivo:** Verificar recebimento de telemetria do carrinho

**Procedimento:**
1. Iniciar execução de trajetória
2. Monitorar recepção de dados na interface
3. Verificar atualização em tempo real

**Critérios de Aceitação:**
- Dados atualizados a cada segundo (máximo)
- Posição, tempo e status são recebidos
- Não há perda significativa de pacotes (< 5%)

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.2.4: Reconexão Após Perda de Sinal
**Objetivo:** Validar recuperação de conexão

**Procedimento:**
1. Estabelecer conexão
2. Afastar carrinho além do alcance
3. Retornar para área de alcance
4. Verificar reconexão automática

**Critérios de Aceitação:**
- Sistema detecta perda de conexão
- Reconexão automática em < 15 segundos
- Dados não são perdidos

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.2.5: Teste de Alcance
**Objetivo:** Determinar alcance efetivo da comunicação

**Procedimento:**
1. Posicionar carrinho a distâncias crescentes (1m, 3m, 5m, 10m)
2. Enviar comandos em cada distância
3. Verificar qualidade da comunicação

**Critérios de Aceitação:**
- Alcance mínimo de 10 metros
- Comunicação estável até 5 metros
- Interface indica qualidade do sinal

**Resultado:** [ ] Aprovado [ ] Reprovado

---

## 3.3 TESTES DE EXECUÇÃO DE TRAJETÓRIA

### Teste 3.3.1: Trajetória Linear Simples
**Objetivo:** Validar execução de movimento em linha reta

**Procedimento:**
1. Programar: "Andar 100 cm"
2. Posicionar carrinho com objeto
3. Iniciar execução
4. Medir distância percorrida

**Critérios de Aceitação:**
- Carrinho percorre 100 cm ± 5 cm
- Trajetória é retilínea (desvio < 5 cm)
- Objeto permanece no carrinho

**Resultado:** [ ] Aprovado [ ] Reprovado

**Medições:**
- Distância real: _____ cm
- Desvio lateral: _____ cm

---

### Teste 3.3.2: Rotação de 90°
**Objetivo:** Validar precisão de rotação

**Procedimento:**
1. Programar: "Girar 90° direita"
2. Marcar orientação inicial
3. Executar comando
4. Medir ângulo final

**Critérios de Aceitação:**
- Ângulo final: 90° ± 5°
- Carrinho não se desloca lateralmente (< 2 cm)
- Objeto permanece estável

**Resultado:** [ ] Aprovado [ ] Reprovado

**Medições:**
- Ângulo real: _____ °

---

### Teste 3.3.3: Trajetória em "L"
**Objetivo:** Validar sequência de comandos

**Procedimento:**
1. Programar:
   - Andar 50 cm
   - Girar 90° direita
   - Andar 50 cm
2. Executar trajetória completa

**Critérios de Aceitação:**
- Ambos segmentos têm 50 cm ± 5 cm
- Ângulo de 90° ± 5°
- Objeto não cai

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.3.4: Trajetória Quadrada
**Objetivo:** Validar precisão em trajetória complexa

**Procedimento:**
1. Programar quadrado de 40 cm de lado:
   - Andar 40 cm
   - Girar 90° direita
   - (Repetir 4 vezes)
2. Executar trajetória

**Critérios de Aceitação:**
- Forma aproximadamente quadrada
- Ponto final próximo ao inicial (< 10 cm)
- Tempo total condizente

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.3.5: Trajetória Complexa Mista
**Objetivo:** Simular trajetória real de teste

**Procedimento:**
1. Programar sequência com 8-10 comandos variados
2. Incluir: retas de tamanhos diferentes e rotações variadas
3. Executar trajetória completa

**Critérios de Aceitação:**
- Todos comandos executados na ordem
- Precisão mantida ao longo da trajetória
- Objeto entregue no ponto final

**Resultado:** [ ] Aprovado [ ] Reprovado

---

## 3.4 TESTES DE REGISTRO DE DADOS

### Teste 3.4.1: Registro de Tempo
**Objetivo:** Validar medição de tempo de execução

**Procedimento:**
1. Programar trajetória de 2 minutos estimados
2. Executar e cronometrar manualmente
3. Comparar com tempo registrado no sistema

**Critérios de Aceitação:**
- Diferença < 2 segundos
- Tempo iniciado ao começar movimento
- Tempo finalizado ao parar

**Resultado:** [ ] Aprovado [ ] Reprovado

**Medições:**
- Tempo sistema: _____ s
- Tempo cronômetro: _____ s

---

### Teste 3.4.2: Registro de Trajetória (Odometria)
**Objetivo:** Verificar gravação de posição ao longo do tempo

**Procedimento:**
1. Executar trajetória em "L"
2. Verificar pontos registrados no banco de dados
3. Comparar com trajetória real

**Critérios de Aceitação:**
- Mínimo 10 pontos registrados por segundo
- Coordenadas coerentes com comandos
- Sem lacunas nos dados

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.4.3: Persistência no Banco de Dados
**Objetivo:** Validar armazenamento correto de dados

**Procedimento:**
1. Executar 3 trajetórias diferentes
2. Verificar banco de dados após cada execução
3. Consultar dados históricos

**Critérios de Aceitação:**
- Cada execução gera registro único
- Dados incluem: ID, timestamp, trajetória, tempo
- Dados podem ser consultados posteriormente

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.4.4: Estrutura de Dados
**Objetivo:** Verificar organização dos dados

**Procedimento:**
1. Executar trajetória
2. Exportar dados do banco
3. Analisar estrutura

**Critérios de Aceitação:**
- Dados organizados em tabelas/coleções adequadas
- Relacionamentos entre entidades corretos
- Tipos de dados apropriados

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.4.5: Estimativas e Análise
**Objetivo:** Validar cálculos de distância e tempo

**Procedimento:**
1. Programar trajetória de 200 cm total
2. Verificar estimativa antes da execução
3. Comparar com valores reais após execução

**Critérios de Aceitação:**
- Estimativa de distância: ± 10%
- Estimativa de tempo: ± 15%
- Valores reais registrados corretamente

**Resultado:** [ ] Aprovado [ ] Reprovado

---

## 3.5 TESTES DE ENTREGA AUTOMÁTICA

### Teste 3.5.1: Detecção de Fim de Trajetória
**Objetivo:** Verificar identificação do ponto final

**Procedimento:**
1. Programar trajetória com ponto final definido
2. Executar trajetória
3. Observar comportamento ao chegar ao fim

**Critérios de Aceitação:**
- Carrinho para no ponto final
- Sistema reconhece conclusão da trajetória
- Nenhum movimento adicional após parada

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.5.2: Acionamento do Mecanismo de Entrega
**Objetivo:** Validar liberação automática do objeto

**Procedimento:**
1. Posicionar objeto no carrinho
2. Executar trajetória até caixa
3. Observar mecanismo de entrega

**Critérios de Aceitação:**
- Mecanismo acionado automaticamente
- Objeto liberado na caixa
- Objeto não danificado

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.5.3: Precisão do Posicionamento
**Objetivo:** Verificar se carrinho para na posição correta

**Procedimento:**
1. Marcar posição da caixa acolchoada
2. Executar 5 trajetórias idênticas
3. Medir distância final em cada execução

**Critérios de Aceitação:**
- Distância até caixa: < 10 cm
- Consistência entre execuções
- Objeto cai dentro da caixa

**Resultado:** [ ] Aprovado [ ] Reprovado

---

## 3.6 TESTES DE TRATAMENTO DE ERROS

### Teste 3.6.1: Bateria Baixa
**Objetivo:** Verificar comportamento com bateria insuficiente

**Procedimento:**
1. Descarregar bateria até nível crítico
2. Tentar executar trajetória
3. Observar avisos e comportamento

**Critérios de Aceitação:**
- Sistema detecta bateria baixa
- Aviso claro na interface
- Execução bloqueada se bateria < 20%

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.6.2: Perda de Comunicação Durante Execução
**Objetivo:** Validar comportamento em caso de perda de sinal

**Procedimento:**
1. Iniciar execução de trajetória
2. Interromper comunicação deliberadamente
3. Observar comportamento do carrinho

**Critérios de Aceitação:**
- Carrinho para após perda de sinal
- Não há danos ao objeto ou equipamento
- Possível retomar após restabelecer conexão

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.6.3: Objeto Deslocado/Queda
**Objetivo:** Verificar se sistema detecta perda de objeto (se aplicável)

**Procedimento:**
1. Executar trajetória
2. Remover objeto manualmente durante execução
3. Observar resposta do sistema

**Critérios de Aceitação:**
- Sistema detecta anomalia (se sensor implementado)
- Mensagem de alerta exibida
- Comportamento documentado

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.6.4: Comandos Inválidos em Execução
**Objetivo:** Validar robustez contra comandos malformados

**Procedimento:**
1. Tentar enviar comandos durante execução
2. Tentar modificar trajetória em andamento
3. Observar tratamento

**Critérios de Aceitação:**
- Comandos inválidos são rejeitados
- Execução atual não é afetada
- Mensagens de erro apropriadas

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.6.5: Reinicialização de Emergência
**Objetivo:** Verificar capacidade de parada de emergência

**Procedimento:**
1. Iniciar execução de trajetória
2. Acionar comando de parada emergencial
3. Verificar resposta

**Critérios de Aceitação:**
- Carrinho para imediatamente (< 1 segundo)
- Motores desligados
- Sistema pode ser reiniciado

**Resultado:** [ ] Aprovado [ ] Reprovado

---

## 3.7 TESTES ESPECÍFICOS PARA AS TRÊS TRAJETÓRIAS

### Teste 3.7.1: Trajetória 1 - Fita Contínua
**Objetivo:** Validar execução seguindo marcação contínua

**Procedimento:**
1. Preparar percurso com fita isolante contínua
2. Programar trajetória correspondente na interface
3. Executar de forma autônoma (sem seguir a fita visualmente)
4. Usar fita apenas para ilustração

**Critérios de Aceitação:**
- Carrinho segue trajetória programada
- Marcação serve apenas como referência visual
- Precisão de ± 10 cm em relação à fita
- Objeto entregue com sucesso

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.7.2: Trajetória 2 - Fita Intermitente
**Objetivo:** Validar execução com marcação descontínua

**Procedimento:**
1. Preparar percurso com fita isolante intermitente
2. Programar trajetória correspondente
3. Executar autonomamente
4. Fita serve apenas para ilustração

**Critérios de Aceitação:**
- Execução não depende das marcações
- Trajetória programada é seguida corretamente
- Espaços sem fita não afetam execução
- Entrega bem-sucedida

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 3.7.3: Trajetória 3 - Sem Marcação Visual
**Objetivo:** Validar execução apenas por comandos programados

**Procedimento:**
1. Receber instruções verbais dos professores
2. Programar trajetória na interface gráfica
3. Executar sem qualquer marcação no piso
4. Comparar resultado com especificações

**Critérios de Aceitação:**
- Trajetória programada corretamente conforme instruções
- Execução totalmente autônoma
- Precisão adequada sem referências visuais
- Objeto entregue no ponto especificado

**Resultado:** [ ] Aprovado [ ] Reprovado

---

## 4. TESTES DE INTEGRAÇÃO

### Teste 4.1: Ciclo Completo - Simulação de Demonstração
**Objetivo:** Validar sistema completo em condições reais

**Procedimento:**
1. Iniciar interface gráfica
2. Conectar com carrinho via wireless
3. Programar trajetória complexa (min. 8 comandos)
4. Posicionar objeto (ovo)
5. Transmitir comandos
6. Executar trajetória
7. Entregar objeto automaticamente
8. Verificar dados registrados

**Critérios de Aceitação:**
- Todos os passos executados sem intervenção
- Tempo total < 5 minutos
- Objeto entregue intacto
- Dados persistidos corretamente no banco

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 4.2: Testes Sucessivos
**Objetivo:** Verificar estabilidade em múltiplas execuções

**Procedimento:**
1. Executar 5 trajetórias consecutivas
2. Recarregar objeto entre execuções
3. Sem reiniciar o sistema

**Critérios de Aceitação:**
- Todas execuções bem-sucedidas
- Performance consistente
- Sem degradação de bateria crítica
- Todos dados registrados

**Resultado:** [ ] Aprovado [ ] Reprovado

---

### Teste 4.3: Teste com Observadores
**Objetivo:** Simular ambiente de apresentação final

**Procedimento:**
1. Realizar demonstração com equipe completa
2. Programar trajetória desconhecida previamente
3. Executar com público observando
4. Apresentar dados em tempo real

**Critérios de Aceitação:**
- Sistema funciona sob pressão
- Interface é intuitiva para apresentação
- Dados são visualizados claramente
- Sucesso na entrega

**Resultado:** [ ] Aprovado [ ] Reprovado

---

## 5. TESTES DE PERFORMANCE

### Teste 5.1: Velocidade de Execução
**Objetivo:** Medir tempo de resposta do sistema

**Medições:**
- Tempo para conectar: _____ s
- Tempo para transmitir trajetória: _____ s
- Tempo de resposta aos comandos: _____ ms
- Taxa de atualização de dados: _____ Hz

**Critérios de Aceitação:**
- Conexão < 10 s
- Transmissão < 3 s
- Resposta < 500 ms
- Atualização > 1 Hz

---

### Teste 5.2: Consumo de Recursos
**Objetivo:** Verificar uso eficiente de recursos

**Medições:**
- Uso de memória da interface: _____ MB
- Uso de CPU: _____ %
- Tamanho do banco de dados após 10 exec.: _____ MB
- Duração da bateria em uso contínuo: _____ min

---

### Teste 5.3: Precisão ao Longo do Tempo
**Objetivo:** Avaliar degradação de precisão

**Procedimento:**
1. Executar mesma trajetória 10 vezes
2. Medir erro acumulado em cada execução

**Critérios de Aceitação:**
- Erro não aumenta significativamente (< 20%)
- Calibração se mantém estável

---

## 6. DOCUMENTAÇÃO DE RESULTADOS

### 6.1 Para Cada Teste Documentar:
- [ ] Data e hora da execução
- [ ] Versão do software testada
- [ ] Responsável pelo teste
- [ ] Resultado (Aprovado/Reprovado)
- [ ] Observações e anomalias
- [ ] Evidências (fotos, vídeos, logs)

### 6.2 Critérios de Aprovação Geral:
- Mínimo 90% dos testes aprovados
- Todos testes críticos aprovados (trajetórias, entrega, persistência)
- Bugs encontrados documentados e classificados por severidade

### 6.3 Relatório Final Deve Incluir:
1. Sumário executivo dos testes
2. Taxa de aprovação por categoria
3. Análise de bugs e limitações
4. Recomendações de melhorias
5. Conclusão sobre prontidão do sistema

---

## 7. CRONOGRAMA SUGERIDO DE TESTES

| Semana | Atividade |
|--------|-----------|
| 1 | Testes de Interface Gráfica (3.1) |
| 2 | Testes de Comunicação (3.2) e início Execução (3.3) |
| 3 | Conclusão Execução de Trajetória (3.3) |
| 4 | Testes de Registro de Dados (3.4) e Entrega (3.5) |
| 5 | Testes de Erros (3.6) e Trajetórias Específicas (3.7) |
| 6 | Testes de Integração (4) e Performance (5) |
| 7 | Retestes de itens reprovados e documentação |
| 8 | Testes finais e preparação para apresentação |

---

## 8. ANEXOS

### 8.1 Formulário de Registro de Teste

```
TESTE ID: _____________
DATA: ___/___/_____ HORA: _____:_____
VERSÃO SOFTWARE: _____________
TESTADOR: _________________________

RESULTADO: [ ] APROVADO [ ] REPROVADO

MÉTRICAS COLETADAS:
_________________________________
_________________________________
_________________________________

OBSERVAÇÕES:
_________________________________
_________________________________
_________________________________

EVIDÊNCIAS ANEXADAS: [ ] Sim [ ] Não
```

### 8.2 Classificação de Severidade de Bugs

- **CRÍTICO**: Impede funcionamento básico do sistema
- **ALTO**: Funcionalidade importante comprometida
- **MÉDIO**: Problema perceptível mas contornável
- **BAIXO**: Problema estético ou de usabilidade menor

---

**Documento preparado para PI1 - 2025/2**
**Versão 1.0**
