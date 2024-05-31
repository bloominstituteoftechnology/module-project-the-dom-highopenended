function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  let widgetSection = document.querySelectorAll('section div');
  widgetSection.forEach(el =>{
    el.classList.add('widget');
  });

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here

  (function updateQuoteOfTheDay(){
    let rndQuote=getRndArrVal(quotes);

    let divQuoteOfTheDay = document.querySelector('.quoteoftheday');
    let divQuote=document.createElement('div');
    let divAuthor=document.createElement('div');
    divQuote.textContent=rndQuote.quote;

    let myAuthorText = rndQuote.author;
    myAuthorText+= (rndQuote.date===null ? " in an unknown date" : " in " + rndQuote.date);

    divAuthor.textContent=rndQuote.author;

    divAuthor.textContent=myAuthorText;
    console.log(divAuthor.textContent);


    divQuoteOfTheDay.appendChild(divQuote);
    divQuoteOfTheDay.appendChild(divAuthor);
  }());
  

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  (function setCorporateSpeak(){
    let divCorporateSpeak = document.querySelector('.corporatespeak');
    let pMessage=document.createElement('p');

    pMessage.textContent=`We need to ${rndVerb()} our ${rndNoun()} ${rndAdverb()}
    in order to ${rndVerb()} our ${rndNoun()} ${rndAdverb()}.`
    divCorporateSpeak.appendChild(pMessage);

    function rndVerb(){return getRndArrVal(verbs);};
    function rndNoun(){return getRndArrVal(nouns);};
    function rndAdverb(){return getRndArrVal(adverbs);};
  }());

  // The best thing about a boolean is even if you are wrong, you are only off by a bit.
  // The best thing about a boolean is even if you are wrong, you are only off by a bit.



  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  (function setCountdown(){
    let intervalId;
    let countdownTime=5;
    let divCountdown = document.querySelector('.countdown');
    let pCountdown=document.createElement('p');
    divCountdown.appendChild(pCountdown);

    pCountdown.textContent=`T-minus ${countdownTime}...`;

    intervalId=setInterval(decrement,1000)

    // Decrement the countdown
    function decrement(){
      if(countdownTime>0){
        countdownTime--;
        pCountdown.textContent= `T-minus ${countdownTime}...`;
      }else{
        pCountdown.textContent= "Liftoff! 🚀";
        clearInterval(intervalId);
      }
    }
  }());

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  (function setFriends(){
    let divFriends = document.querySelector('.friends');
    let pInfo=document.createElement('p');
    divFriends.appendChild(pInfo);

    let rndPerson = getRndArrVal(people);
    let birthDay = getDateYear(rndPerson.dateOfBirth);

    pInfo.textContent=`${getFullName(rndPerson)} was born in ${birthDay} and ${getFriendListStr(rndPerson)}.`


    // Get full name of person
    function getFullName(person){
      return `${person.fname} ${person.lname}`
    }

    // Get year of birthdate (ex. "1992-06-16" will return "1992")
    function getDateYear(date){
      return date.slice(0,4);
    }

    // Get the string ending for any number of friends (ex. might return "Alex, Sarah, and Samantha");
    function getFriendListStr(person){
      let returnStr='';
      let arrFriendIds=person.friends;
      let arrFriendNames=[];

      arrFriendIds.forEach(personID=>{
        let result = people.filter((person) => {return person.id === personID;})
        arrFriendNames.push(result[0].fname);
      })

      if(arrFriendNames.length<=0){
        returnStr="has no friends"
      }else{
        returnStr="is friends with "
        for(let i=0; i<arrFriendNames.length; i++){
          let friendName=arrFriendNames[i];  
          if(i===arrFriendNames.length-1){
            arrFriendNames.length!==1 ? returnStr+="and " : returnStr+=" ";
            returnStr+=friendName;
          }else{
            returnStr+=friendName;
            arrFriendNames.length!==2 ? returnStr+=", " : returnStr+=" ";
          }
        }
      }
      return returnStr;
    }
  }());


  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  (function makeTabbabablbabalbalblbalblblblblbbbblbble(){    
    let allWidgets=document.querySelectorAll('.widget');
    for (let i = 0; i < allWidgets.length; i++) {
      allWidgets[i].setAttribute('tabindex',i+1);
    }
  }());



  function getRndArrVal(arr){
    const rnd=Math.round(Math.random()*((arr.length-1)-0)+0);
    return arr[rnd];
  }
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
