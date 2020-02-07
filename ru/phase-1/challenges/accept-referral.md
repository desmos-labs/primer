# Подтвердить реферера
:::tip примечание 
Вы получите награду в виде токенов только в том случае если вами будут соблюдены **все** условия:

1. вы не разместили еще ни одного поста, и
2. вы были приглашены другим пользователем с помощью [реферального задания](ru/phase-1/challenges/refer.md) чей PR был одобрен.

После выполнения этого задания вы получите **50 токенов Desmos**. Каждый пользователь (подтвержденный с помощью учетной записи на GitHub) может быть вознагражден только один раз за эту задачу.
:::

Как только все вышеуказанные условия были соблюдены, вы готовы получить 50 токенов Desmos. Приступим к выполнению:

1. Сделайте fork этого репозитория внутри вашего GitHub профиля. 
   Если вы не знаете как это сделать, следуйте [GitHub форк инструкции](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

2. Сделайте pull этого форкнутого репозитория на свой компьютер:  
   ```bash
   git clone https://github.com/<your-github-name>/primer.git ~/desmos-primer
   cd ~/desmos-primer
   ```
   
3. Создайте файл с названием вашего GitHub имени, который будет содержать GitHub имя вашего друга, который вас привел в Desmos в папку `phases/phase-1/referred`:

   ```bash
   echo "<имя GitHub реферера>" >> ./phases/phase-1/challenges/referred/<your-github-name>
      
   # Пример
   # echo "kwunyeung" >> ./phases/phase-1/challenges/referred/RiccardoM
   ```
   
4. Сделайте commit ваших изменений, далее сделайте push ваших изменений и создайте pull request в репозиторий Desmos Primer. Если у вас возникли трудности с синтаксисом команд, пожалуйста ознакомьтесь с [GitHub Pull Requests инструкцией](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
