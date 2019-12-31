# Level 1 - 20 points
- [Refer a friend](#refer-a-friend)

## Refer a friend
The first challenge is to refer a friend. For safety purposes and to avoid scams or spams, it is divided into two steps: 

1. Referring a friend, that you need to complete if you want to refer another user.
2. Accepting a referral, that you need to complete if another user has referred you and you want to accept the referral. 

Please note that you will receive **20 points** per each user that accepts your referral, and the referred person will receive **20 points** too upon accepting your referral.

If you do not get referred, or a friend does not accept your referral, neither of you will get any points.   

### Step 1. Referring a friend
In order to complete this challenge you will have to refer a friend that will later join the Desmos Chain and complete the [Level 2 Challenge](level-2.md#create-a-post). 

To do so, you will have to follow this procedure: 

1. Create a fork of this repo inside your private GitHub profile.  
   If you do not know how to do it, follow the [GitHub fork guide](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

2. Pull the fork locally:  
   ```shell
   git clone https://github.com/<your-github-name>/primer.git ~/desmos-primer
   cd ~/desmos-primer
   ```

3. Append to a file named as your GitHub username, the GitHub name of the referred person:    
   ```shell
   echo "<referral-github name>" >> ./phases/phase-1/challenges/referral/<your-github-name>
   
   # Example
   # echo "kwunyeung" >> ./phases/phase-1/challenges/referral/RiccardoM
   ```

4. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, please refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
   
### Step 2 - Accepting a referral
In order to avoid scams, we require each referred user to accept their referring friend explicitly. Upon being referred (and thus, having your name written inside one of the files under the `phases/phase-1/referral` files), you will need to complete the following procedure to make sure that you and your referring friend get the **20 points**: 

1. Create a fork of this repo inside your private GitHub profile.  
   If you do not know how to do it, follow the [GitHub fork guide](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

2. Pull the fork locally:  
   ```shell
   git clone https://github.com/<your-github-name>/primer.git ~/desmos-primer
   cd ~/desmos-primer
   ```
   
3. Create a file named as your GitHub username and containing the GitHub username of the referring friend under the `phases/phase-1/referred` folder: 

   ```shell
   echo "<referred-github-name>" >> ./phases/phase-1/challenges/referred/<your-github-name>
      
   # Example
   # echo "RiccardoM" >> ./phases/phase-1/challenges/referred/kwunyeung
   ```
   
4. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, please refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
