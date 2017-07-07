console.log('sanity check');

function checkPalindrome(word){
  word = word.toLowerCase();
  return (word === word.split('').reverse().join(''))
};

$(document).ready(function(){
  $('.palindrome-form').on('submit', function(event){
    event.preventDefault();
    let wordInput = $('.word').val();
    let isPalindrome = checkPalindrome(wordInput);
    console.log(`${wordInput} ${isPalindrome ? 'is':'is not'} a palindrome`);
    $('.messages').append(`
      <div class="pal-message">
        <h2>${wordInput}</h2>
        <span>${isPalindrome ? 'is':'is <strong>not</strong>'} a palindrome</span>
      </div>`
    );
    $('.word').val('');
  });
})
