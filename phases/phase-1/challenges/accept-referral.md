# Accept a referral
:::tip Note  
You will only be eligible for reward in this challenge if you met **all** the below conditions:

1. you have not yet made your first post, and
2. you have been referred by another user via the [Referral challenge](refer.md) of which the PR has been accepted.

Upon completion of this challenge, you will get **50 Desmos Tokens**. Each user (verified with an account on GitHub) can only be rewarded once for this challenge.
:::

Once you have met the above conditions and completed the challenge, you are now ready to get 50 Desmos Tokens. To do so, you need to:

1. Create a fork of this repo inside your private GitHub profile.  
   If you do not know how to do it, follow the [GitHub fork guide](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

2. Pull the fork locally:  
   ```bash
   git clone https://github.com/<your-github-name>/primer.git ~/desmos-primer
   cd ~/desmos-primer
   ```
   
3. Create a file named as your GitHub username and containing the GitHub username of the referring friend under the `phases/phase-1/referred` folder: 

   ```bash
   echo "<Referee GitHub name>" >> ./phases/phase-1/challenges/referred/<your-github-name>
      
   # Example
   # echo "kwunyeung" >> ./phases/phase-1/challenges/referred/RiccardoM
   ```
   
4. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, please refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).