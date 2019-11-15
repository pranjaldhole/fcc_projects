$(document).ready(function() {
	var quoteList=[
	{
		quote: "To understand all is to forgive all.",
		name:"Evelyn Waugh"
  },
  {
  	quote:"If a man never contradicts himself, the reason must be that he virtually never says anything at all.",
  	name:"Miguel de Unamuno"
  },
  {
  	quote:"You must understand the whole of life, not just one little part of it. That is why you must read, that is why you must look at the skies, that is why you must sing and dance, and write poems and suffer and understand, for all that is life.",
  	name:"Jiddu Krishnamurti"
  },
  {
  	quote:"In obedience there is always fear, and fear darkens the mind.",
  	name:"Jiddu Krishnamurti"
  },
  {
  	quote:"We are never afraid of the unknown. We are afraid of the known coming to an end.",
  	name:"Jiddu Krishnamurti"
  },
  {
  	quote:"We are more often frightened than hurt; and we suffer more from imagination than from reality.",
  	name:"Seneca"
  },
  {
  	quote:"Don't be an idiot who thinks you already know it all, or you will be destined to remain an idiot who thinks you already know it all.",
  	name:"Existential comics"
  },
  {
  	quote:"Forgiveness requires a sense that bad behavior is a sign of suffering rather than malice.",
  	name:"Alain de Botton"
  },
  {
  	quote:"To the mind that is still, the whole universe surrenders.",
  	name:"Lao Tzu"
  },
  {
  	quote:"In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.",
  	name:"Gautama Buddha "
  },
  {
  	quote:"Thus let me live, unseen, unknown, thus unlamented let me die; Steal from the world, and not a stone	tell where I lie.",
  	name:"Alexander Pope"
  },
  {
  	quote:"First, know you are already free. This is the unique recognition, insight and fruit born of self-inquiry; to reveal our inherent freedom as eternal being. Thereafter, practice is only to fend off the tendency to doubt this freedom.",
  	name:"Paramahansa Yogananda"
  },
  {
  	quote:"Look and you will find it. What is unsought will go undetected.",
  	name:"Sophocles"
  },
  {
  	quote:"I freed a thousand slaves. I could have freed a thousand more if only they knew they were slaves.",
  	name:"Harriet Tubman"
  },
  {
  	quote:"If you want to build a ship, don't drum up people together to collect wood and don't assign them tasks and work, but rather teach them to long for the endless immensity of the sea.",
  	name:"Antoine de Saint-Exupery"
  },
  {
  	quote:"I was never insane except upon occasions my heart was touched.",
  	name:"Edgar Allan Poe"
  },
  {
  	quote:"Falsity cannot keep an idea from being beautiful; there are certain errors of that ingenuity that one could regret their not ranking among the highest achievements of the human mind.",
  	name:"Jean Rostand"
  },
  {
  	quote:"One often meets his destiny on a road he takes to avoid it.",
  	name:"Master Oogway"
  },
  {
  	quote:"Only put off until tomorrow what you are willing to die having left undone.",
  	name:"Pablo Picasso"
  },
  {
  	quote:"If you can't feed a hundred people then feed just one.",
  	name:"Agnes Bojaxhiu"
  },
  {
  	quote:"One doesn't see one's own tragedy.",
  	name:"Jiddu Krishnamurti"
  },
  {
  	quote:"Grown-ups never understand anything by themselves and it is tiresome for children to be always and forever explaining things to them. ",
  	name:"Antoine de Saint Exupery (Le Petit Prince)"
  },
  {
  	quote:"The biggest mistake of all is to avoid situations in which you might make a mistake.",
  	name:"Peter McWilliams"
  },
  {
  	quote:"Deserves it! I daresay he does. Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgement. For even the very wise cannot see all ends.",
  	name:"J.R.R. Tolkien"
  },
  {
  	quote:"Think like a man of action, act like a man of thought.",
  	name:"Henri Bergson"
  },
  {
  	quote:"What we can or cannot do, what we consider possible or impossible, is rarely a function of our true capability. It is more likely a function of our beliefs about who we are.",
  	name:"Tony Robbins"
  },
  {
  	quote:"Almost anything you do will be insignificant; but it is very important that you do it.",
  	name:"M. K. Gandhi"
  },
  {
  	quote:"In a day, when you don't come across any problems; you can be sure that you are traveling in a wrong path.",
  	name:"Swami Vivekananda"
  },
  {
  	quote:"A true seeker has no patience with armchair academic discussions about what is right and wrong, appropriate or inappropriate.",
  	name:"Dr. B. Ramachandra"
  },
  {
  	quote:"It is no measure of health to be well adjusted to a profoundly sick society.",
  	name:"Jiddu Krishnamutri"
  },
  {
  	quote:"I am very wisdomous.",
  	name:"Joey (Friends)"
  },
  {
  	quote:"Be to her virtues very kind. Be to her faults a little blind.",
  	name:"Matthew Prior"
  },
  {
  	quote:"If you truly love yourself you would never hurt another.",
  	name:"Gautama Buddha"
  },
  {
  	quote:"Be happy, and a reason will come along.",
  	name:"Robert Breault"
  }
	];
	$('#quoteButton').click(function(evt){
		//define the containers of the info we target
		var quote = $('#quoteContainer p').text();
		var quoteGenius = $('#quoteGenius').text();
		//prevent browser's default action
		evt.preventDefault();
		//getting a new random number to attach to a quote and setting a limit
		var sourceLength = quoteList.length;
		var randomNumber= Math.floor(Math.random()*sourceLength);
		//set a new quote
		for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
	    var timeAnimation = 5000;
	    var quoteContainer = $('#quoteContainer');
	    //fade out animation with callback
	    quoteContainer.fadeOut(timeAnimation, function(){
	      quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');

	      //fadein animation.
	      quoteContainer.fadeIn(timeAnimation);
	    });
			break;
		};//end for loop
	});//end quoteButton function
});//end document ready
