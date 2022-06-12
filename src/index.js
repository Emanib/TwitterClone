let form = document.getElementById("form");
let tweet = document.getElementById("tweet");
let username = document.getElementById("username");
let newsfeed = document.querySelector(".news");
let message = document.getElementById("message-validation");
let counter = document.getElementById("counter");
tweet.addEventListener("keyup", () => {
  countChars(tweet.value);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidetion();
});

let data = [];
const getData = () => {
  const obj = { username: username.value, tweet: tweet.value, id: Date.now() };
  data.push(obj);
  createTweet(data, obj.id);
};
//  valideate inputs fields
const formValidetion = () => {
  if (username.value !== "" && tweet.value !== "") {
    message.textContent = "success";
    getData();
  } else {
    message.textContent = "the fields should not be empty";
  }
};
//  put data to html
const createTweet = (data, id) => {
  let content = document.createElement("div");
  content.className = "content-tweets";
  let userName = document.createElement("p");
  let tweeta = document.createElement("p");
  let buttons = document.createElement("span");
  buttons.className = "btns-tweet";
  let likeButton = document.createElement("button");
  likeButton.className = "like-btn";
  let retweetButton = document.createElement("button");
  retweetButton.className = "retweet-btn";
  newsfeed.appendChild(content);
  content.appendChild(userName);
  content.appendChild(tweeta);
  content.appendChild(buttons);
  buttons.appendChild(likeButton);
  buttons.appendChild(retweetButton);
  retweetButton.innerHTML += `<svg width ="20px" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
  `;
  likeButton.innerHTML += `<svg  width ="20px" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>`;

  for (let item of data) {
    userName.textContent = item.username;
    tweeta.textContent = item.tweet;
  }
  retweetButton.addEventListener("click", () => {
    let newest = data.filter((item) => item.id === id);
    console.log(newsfeed.children)
    var items = newsfeed.childNodes;
    var itemsArr = [];
    for (var i in items)
    {
      if (items[i].nodeType >= 1)
      { // get rid of the whitespace text nodes
        itemsArr.push(items[i]);
      }
    }

    itemsArr.sort(function (a, b)
    {
      return a.innerHTML == b.innerHTML
        ? 0
        : (a.innerHTML < b.innerHTML ? 1 : -1);
    });

    for (i = 0; i < itemsArr.length; ++i)
    {
      newsfeed.appendChild(itemsArr[i]);
    }
    createTweet(newest, id);
    // sortTweets()
  });
  likeButton.addEventListener("click", () => {
    tweeta.style.color = "rgb(29, 155, 240)";
  });
  username.value = "";
  tweet.value = "";
};
//  count characters of tweets
const countChars = (value) => {
  let maxLngth = 100;
  let currentLength = parseInt(value.length, 10);
  if (maxLngth - currentLength > 0) {
    counter.innerText = `${maxLngth - currentLength}/ ${maxLngth}`;
  }
};

// const repeatTweet = (newest) =>
// {
//   let newestTweets = document.getElementById('repeat-tweets')

//   let repeat = document.createElement('p')
//   newestTweets.appendChild(repeat);
//   // console.log(sortNewest)
//   for (let item of newest)
//   {
//     repeat.textContent = item.tweet
//   }


// }
// sort elements nodes


//
// put repeated retweet in array
// display array retweet to newest div contain the all divs of retweets
// sort divs of repeated retweets

