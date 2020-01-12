# Создайте пост
:::tip примечание
После выполнения этого задания, вы получите **20 токенов Desmos**.   

Обратите внимание, что для предотвращения спама вы получите вознаграждение только за **первый пост**. Токены **не** будут присуждаться за последующие посты.    
:::

В Desmos, посты - это способ пользователей делиться любой информацией публично.

Посты в Desmos похожи на твиты в Twitter, поскольку они имеют схожую функциональность: они позволяют вам писать то, что вы хотите (без каких-либо ограничений по длине), и они публично видны всем пользователям Desmos.  

Единственная разница с твитами в том, что после того, как вы создали пост в Desmos, вы **не сможете** удалить его! Это связано с тем, что блокчейн обладает неизменной характеристикой: каждую выполняемую транзакцию нельзя отменить.    

## Создание вашего первого поста
После того как вы следовали [Настройке](../setup/README.md) и вы создали свой Desmos аккаунт используя команду `desmoscli keys`, вы готовы к созданию вашего первого поста. Чтобы это сделать, выполните следующие команды: 

```bash
desmoscli tx posts create "<Сообщение>" true --from <имя-вашего-ключа> --yes 

# Пример
# desmoscli tx posts create "Hello world!" true --from jack --yes
```

Вам будет предложено ввести пароль, который вы задали во время установки, и после правильного ввода пароля вы увидите что-то вроде этого: 

```yml
height: 0
txhash: 89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231
code: 0
data: ""
rawlog: '[{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"action","value":"create_post"}]}]}]'
logs:
- msgindex: 0
  success: true
  log: ""
  events:
  - type: message
    attributes:
    - key: action
      value: create_post
info: ""
gaswanted: 0
gasused: 0
codespace: ""
tx: null
timestamp: ""
events: []
```

Чтобы убедиться, что транзакция была успешно обработана, вы можете запросить ее, используя следующую команду:

```bash
desmoscli query tx <txhash> --output json

# Пример
# desmoscli query tx 89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231 --output json
``` 

Это вернет вам JSON представление самой транзакции.

:::примечание Hello world!  
Поздравляем! Вы только что создали свой первый пост в Desmos!  
::: 

## Получение награды
После того как вы создали пост, чтобы убедиться в получении награды пожалуйста выполните следующие шаги:

1. Создайте fork этого репозитория в ваш Github профиль.
   Если вы не знаете как это сделать, то следуйте [GitHub форк инструкции](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

2. Сделайте pull этого форка на ваш компьютер:  
   ```bash
   git clone https://github.com/<your-name>/primer.git ~/desmos-primer
   cd ~/desmos-primer
   ```

3. Создайте файл с именем вашего GitHub имени содержащий хеш транзации вашего первого поста.  
   ```bash
   echo "<tx-hash>" >> ./phases/phase-1/challenges/posts/<ваше-github-имя>
   
   # Пример
   # echo "89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231" >> ./phases/phase-1/challenges/posts/RiccardoM
   ```

4. Сделайте commit ваших изменений, сделайте push этих изменений в ваш форкнутый репозиторий и затем создайте pull request в репозитории Desmos Primer. Если вы не знаете как это сделать, то обратитесь в [GitHub Pull Requests инструкцию](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).