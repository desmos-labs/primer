# Настройка этапа 1
Чтобы выполнить Primar задания, необходимо создать аккаунт Desmos. Для этого вы должны установить CLI(консоль) Desmos и подключить ее к фулл ноде. Если вы уже это сделали, вы можете пропустить этот шаг. В противном случае вы найдете подробное описание процесса ниже.

## Требования
Чтобы выполнить задачи первого этапа, вы должны соответствовать следующим требованиям:

1. Должен быть установлен Go.
   Если у вас он не установлен, вы можете найти Go по ссылке: [Установить Go](https://golang.org/doc/install). 

2. Должен быть установлен Git.
   Если у вас он не установлен, вы можете найти Git по ссылке: [Скачать Git](https://git-scm.com/downloads).
   
3. Git должен быть настроен на работу с GitHub.
   Если вы еще не настроили Git на работу с Github, вам поможет следующая инструкция [Настройть Git](https://help.github.com/en/github/getting-started-with-github/set-up-git).
   
## Настройка 
Когда все условия были соблюдены, можете приступать к настройке вашего компьютера для выполнения заданий.

### 1. Убедитесь что установлен Go
Выполните команду: 

```shell
go version
```

Вывод должен выглядить так:

```
go version go1.12.10 linux/amd64
```

Убедитесь что версия либо `1.12.10` либо свежее. 

### 2. Установка Desmos CLI(консоли) 
Интерфейс CLI(консоли) Desmos - это инструмент, который позволяет вам выполнять операции, связанные с Desmos, используя терминал на вашем компьютере. Она подключается к фулл ноде сети Desmos, что позволяет вам легко создавать, подписывать и отправлять транзакции в сети.

Чтобы установить CLI(консоль) выполните следующие действия: 

```shell
git clone https://github.com/desmos-labs/desmos.git $GOPATH/src/github.com/desmos-labs/desmos
cd $GOPATH/src/github.com/desmos-labs/desmos
git checkout -b phase-1 tags/v0.1.0
make install
```

После успешного выполнения предыдущих команд, вы сможете выполнить команды ниже: 

```shell
desmoscli version
```

Результат должен выглядить так

```
0.1.0
```

### 3. Подключение CLI(консоли) к фулл ноде
После того, как CLI(консоль) правильно установлена, чтобы разрешить чтение и запись в сеть Desmos, вам нужно подключить ее к вашей публичной фулл ноде. Для этого, пожалуйста, запустите:

```shell
desmoscli config node http://34.74.131.47:26657
desmoscli config chain-id morpheus-1000
```

Результат должен выглядить так

```
configuration saved to .desmoscli/config/config.toml
```

Чтобы удостовериться что все установилось как надо, попробуйте запустить: 

```shell
desmoscli query block 1
```

Результат должен выглядить так 

```json
{"block_meta":{"block_id":{"hash":"CC24512EEE121FA27FA44A2CC9EE3CD27A41E5FD0F018DD7E1DCC83E6C2E52F0","parts":{"total":"1","hash":"F009ABF3312DEF71052DC7348368329D131C1BC26EA566ED969E01321DB5D773"}},"header":{"version":{"block":"10","app":"0"},"chain_id":"morpheus-1000","height":"1","time":"2019-12-11T04:42:14.03384Z","num_txs":"0","total_txs":"0","last_block_id":{"hash":"","parts":{"total":"0","hash":""}},"last_commit_hash":"","data_hash":"","validators_hash":"148CC373C318FC8825CA753A1228289175CC98667E1283DC949EB52B2490B34A","next_validators_hash":"148CC373C318FC8825CA753A1228289175CC98667E1283DC949EB52B2490B34A","consensus_hash":"048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F","app_hash":"","last_results_hash":"","evidence_hash":"","proposer_address":"6435B4DF8C20D126978E030E946096066ED46050"}},"block":{"header":{"version":{"block":"10","app":"0"},"chain_id":"morpheus-1000","height":"1","time":"2019-12-11T04:42:14.03384Z","num_txs":"0","total_txs":"0","last_block_id":{"hash":"","parts":{"total":"0","hash":""}},"last_commit_hash":"","data_hash":"","validators_hash":"148CC373C318FC8825CA753A1228289175CC98667E1283DC949EB52B2490B34A","next_validators_hash":"148CC373C318FC8825CA753A1228289175CC98667E1283DC949EB52B2490B34A","consensus_hash":"048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F","app_hash":"","last_results_hash":"","evidence_hash":"","proposer_address":"6435B4DF8C20D126978E030E946096066ED46050"},"data":{"txs":null},"evidence":{"evidence":null},"last_commit":{"block_id":{"hash":"","parts":{"total":"0","hash":""}},"precommits":null}}}
```

### 4. Создание адреса
Для выполнения операций в сети Desmos вам потребуется адрес Desmos. Это уникальные случайно сгенерированные аккаунты, основанные на мнемонических словосочетаниях длиной в 24 слова. 

Чтобы сгенерировать новый адрес, запустите следующую команду: 

```shell
desmoscli keys add <ваше-имя>

# Например, desmosli keys add jack  
``` 

После ввода пароля и подтверждения, результат должен выглядить так: 

```yml
- name: jack
  type: local
  address: desmos1uht7hsl88wr002ses4qf5k24nshdyxukv3r2p8
  pubkey: desmospub1addwnpepqvwf7qcdv97prfwv6cp20c5pgre4j8ln9y0tqygj4ut36xndd9srkrxhk3e
  mnemonic: ""
  threshold: 0
  pubkeys: []


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

conduct never unit tobacco song hurt pepper silk hundred merit cheese bulb electric wink swarm auto rule afford taxi lounge local bundle trouble kitten
```

:::внимание  
Убедитесь, что вы записали где-нибудь в безопасном месте мнемоническую фразу, так как это будет единственным способом восстановить учетную запись. Потеря этой фразы означает потерю доступа ко всем вашим средствам.  
:::

### 5. Получение `upotin`
В наших тестнетах будут следующие токены: 

* Daric (то есть `udaric`) стэйкинг токен
* Potin (то есть `upotin`) токен комиссии

Ваш нужен будет какой-то минимальный баланс в токенах чтобы активировать аккаунт, посетите наш [кран](https://faucet.desmos.network) и запросите некоторое кол-во `upotin`. Если вы забыли адрес который только что сгенерировали, вы можете его увидеть следующим образом 

```shell
desmoscli keys show <ваше имя> --address

# Пример 
# desmoscli keys show jack --address 
```

Вывод будет похож на адрес ниже 

```
desmos1gmu4uevcvwfcuu43yp27gcv4ngxuh9sxfpv3er
```

Вы получите токены сразу после того как запросите токены через наш кран

:::Добро пожаловать! 
Поздравляем, вы успешно создали ваш аккаунт Desmos! Вы можете приступить к выполнению [заданий Этапа 1](../challenges/README_RU.md) и заработать некоторое кол-во токенов Desmos!  
::: 
