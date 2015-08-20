var quotes =[
"The gluten intolerant have it easy.",
"No vegans allowed!",
"We demand lactose free liberation!",
"Check your dietary priviledges!",
"A lactose free safe-space for all those who get the shits the moment they have any",
"No, Patrick, mayonnaise is not a dairy product. Horseradish is not a dairy product either!",
"Every time you give cat milk, you give it intestinal discomfort.",
"Given your cat milk = animal abuse",
"Every time you put milk in something that doesn't need it, a puppy dies.",
"Every time you masturbate, God makes a child lactose intolerant",
"This ain't no hippie-dippy circlejerk",
"No mom, I'm not vegan!",
"No mom, I don't have celiac",
"In upcoming elections, always ask your local candidates what they think of lactose priviledge",
"No one likes to have to take shit at a public washroom",
"Drinking milk & other dairy related products is a social construct",
"Why would drink the white liquid that comes out of the cow's tits?",
"You wouldn't drink your mom's milk, so why a cow's or any other animal's?",
"Che Guevara, that homophobic, racist, mass murderer that you probably worship might have been lactose intolerant.",
"Did you know Jesus was lactose intolerant?",
"65% of the human population is lactose intolerant!",
"Soccer isn't the only passtime in Brazil. Having painful shits caused by milk is another."

];



function choseQuote(){
  var number = Math.floor(Math.random() * (quotes.length-1));
  $("#quote").text(quotes[number]);
}