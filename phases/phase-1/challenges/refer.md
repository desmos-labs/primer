# Refer a friend
:::tip Note  
This challenges allows you to refer one or more friend(s). A referral is deemed correctly if below conditions have **all** been met: 
   
1. your referred friend has not joined Desmos Primer before your referral and 
2. (s)he has completed the [Post challenge](create-post.md) after your referral.  

Please note that you can refer multiple friends and get 200 Desmos Tokens per friend referred.

You will get **200 Desmos Tokens per successful referral**. There is no ceiling for the number of successful referral you can make but there is a cap of 100,000 Desmos Tokens to be rewarded for Phase 1 as a whole. Once this cap has been reached, Phase 1 will end immediately. So, make sure you grab the chances to make as many referrals as possible!
:::

Referral program is a great way for us to go viral with more co-builders like you! To create a censorship-resistant social network, we need your help to let more people know about Desmos and increase its user base. In order to complete this challenge, please follow this procedure:

1. Create a fork of this repo inside your private GitHub profile.  
   If you do not know how to do it, follow the [GitHub fork guide](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

2. Pull the fork locally:  
   ```shell
   git clone https://github.com/<your-github-name>/primer.git ~/desmos-primer
   cd ~/desmos-primer
   ```

3. Append to a file named as your GitHub username, the GitHub name of the referred person:    
   ```shell
   echo "<GitHub name>" >> ./phases/phase-1/challenges/referral/<your-github-name>
   
   # Example
   # echo "kwunyeung" >> ./phases/phase-1/challenges/referral/RiccardoM
   ```

4. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, please refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


:::tip  
Please note that you will only get the 200 Desmos Tokens reward for a successful referral. So you need to make sure the person you have referred would see your invitation and complete the [Post challenge](create-post.md) accordingly.

Beside calling them, you may notify them by tagging them inside the pull request message when creating it. This can be done by including `@<your-friend-github-name>` inside the description, e.g. `@kwunyeung`.
:::