# Refer a friend
:::tip Note  
This challenges allows you to refer one or more friend(s) and get **200 Desmos Tokens per invited user that has completed the [Post challenge](create-post.md) and [accepted your referral](accept-referral.md)**.  

Please note that you can refer multiple friends and get 200 Desmos Tokens per friend referred.

If one of the users who have referred does **not** create a post or accept your referral, you will **not** be granted any Desmos Token. 
:::

Referring a friend is the way that you have to let people know about Desmos, helping us increase the user base. In order to complete this challenge follow this procedure: 

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
To make sure the referred user sees your invitation to join Desmos and later completes the Post challenge allowing you to receive 200 Desmos Tokens, make sure to tag him inside the pull request message when creating it. 

You can do so by including `@<your-friend-github-name>` inside the description. 

E.g. `@kwunyeung`  
:::