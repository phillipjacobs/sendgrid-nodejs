# sendEmailViaSendGrid
### A small nodejs block that enables you to send emails via sendgrid (sendgrid account needed but its FREE)



#### STEPS (assuming you signed up for your free sendgrid account)

##### MAKE SURE YOU HAVE NODE INSTALLED

1. **clone the project**

        🔥and there you go. You're done. 🤣 just joking! What do you think i am ??? GOOGLE ?
there's still a bit of stuff to be done lol

2. **cd into the project**

3. **rename you sendgrid.env.example to sendgrid.env**
        
        (this is just so that when you push to your github,
        the gitignore file i provided will not push the sendgrid.env file)

4. then go **get your access token on sendgrid**

        (usually `SETTINGS > API KEYS` > you can handle the rest 💪🏼 I know you can 😏)

5. when you have your api access token, **open the  sendgrid.env file and paste it into the section where it says**

        "YOUR SENDGRID API KEY SHOULD COME HERE BETWEEN THESE TWO SINGLE QUOTES" 🤣🤣 lol

6. once you have that sorted out, then type into your terminal: `source ./sendgrid.env`
        
        this will make the variable SENDGRID_API_KEY global, so your little script can access it.

7. after that run: `npm install --save @sendgrid/mail`

8. you will now need to go into the email.js file and go set some variables like `TO` and `FROM`

        Those variables are obviously the email addresses you want to send TO and FROM

9. After that you're all good to go. 🔥 For real this time. just **go into your terminal and run:** `node email.js`

10. **TADAAAA** 🤪 ** warning... THIS 10th step is not a step lol... ENJOY!!! 🔥💦
