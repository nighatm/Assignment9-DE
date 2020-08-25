var twitterUser=[
    {
        tweet:"A winners mindset will change everything.",
        userName:"Adam",
        dateOfCreation:"07-09-2016",
        userAge:4
    },
    {
        tweet:"Life doesn't give you what you want. It gives you what you earn!",
        userName:"Sie",
        dateOfCreation:"01-08-2020",
        userAge:16
    },
    {
        tweet:"You can do anything with the right mindset.",
        userName:"Jumana",
        dateOfCreation:"31-08-2019",
        userAge:01
    },
    {
        tweet:"No one likes waiting for the squat rack",
        userName:"Jayp",
        dateOfCreation:"02-08-2020",
        userAge:27
    },
    {
        tweet:"Never let the negativity of other people bring you down.",
        userName:"Jose",
        dateOfCreation:"03-08-2020",
        userAge:38
    },
    {
        tweet:"Keep calm and move on!",
        userName:"Reiner",
        dateOfCreation:"04-08-2020",
        userAge:17
    },
    {
        tweet:"Sometimes you have to make a leap of faith.",
        userName:"Khalid",
        dateOfCreation:"05-08-2020",
        userAge:26
    },
    {
        tweet:"Eat clean, Train hard, and the world is yours!",
        userName:"James",
        dateOfCreation:"06-08-2020",
        userAge:38
    },
    {
        tweet:"Your mindset is what determines your success!",
        userName:"Alex",
        dateOfCreation:"07-08-2020",
        userAge:37
    },
    {
        tweet:"Dedication is what keeps yo doing!",
        userName:"Nurrudin",
        dateOfCreation:"08-08-2020",
        userAge:24
    },

]




function filterUserAge(user)
{
    if(user.userAge >= 18)
    {
        return true
    }
    else
    return false
}

var eligibleUser = twitterUser.filter(filterUserAge);
console.log(eligibleUser);


