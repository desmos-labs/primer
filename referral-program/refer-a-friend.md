# Refer a friend
:::tip Valid referrals  
The referral program allows you to refer one or more friend(s). A referral is deemed correctly if the below conditions have **all** been met: 
   
1. your referred friend has not joined Desmos Primer before your referral and 
2. (s)he has successfully created a post after your referral (a post creation guide can be found [here](phase-1/create-post.md)).

:::

:::warning Referral rewards  
Please note that you can refer multiple friends and get the current Desmos Tokens amount per friend referred.

In order to keep the referral program running longer, we are awarding less tokens as time passes, so make sure you refer every friend as soon as possible to get the most out of your referrals.

Currently you will get **100 Desmos Tokens per successful referral**.  
:::

The referral program is a great way for us to go viral with more co-builders like you! To create a censorship-resistant social network, we need your help to let more people know about Desmos and increase its user base. In order to refer a friend please follow this procedure:

1. Create a fork of this repo inside your private GitHub profile.  
   If you do not know how to do it, follow the [GitHub fork guide](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

2. Pull the fork locally:  
   ```bash
   git clone https://github.com/<your-github-name>/primer.git ~/desmos-primer
   cd ~/desmos-primer
   ```

3. Append to a file named as your GitHub username, the GitHub name of the referred person:    
   ```bash
   echo "<GitHub name>" >> ./phases/phase-1/challenges/referral/<your-github-name>
   
   # Example
   # echo "kwunyeung" >> ./phases/phase-1/challenges/referral/RiccardoM
   ```

4. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, please refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


:::tip  
Please note that you will only get the Desmos Tokens reward for a successful referral. This means you need to make sure the person you have referred sees your invitation and [creates a post](phase-1/create-post.md) accordingly.

Beside calling them, you may notify them by tagging them inside the pull request message when creating it. This can be done by including `@<your-friend-github-name>` inside the description, e.g. `@kwunyeung`.
:::
