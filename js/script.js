var quotes =[
  "A safe space for lactose intollerant folk",
  "Keep your lactose outside",
  "Dairy products, even lactose free must be taken with a lifted eyebrow",
  "Fuck lactose!",
  "Gluten free sympathizers welcome",
  "Dairy products, even lactose free must be taken with a lifted eyebrow2",
  "Fuck lactose!2",
  "Gluten free sympathizers welcome2",
  "Dairy products, even lactose free must be taken with a lifted eyebrow3",
  "Fuck lactose!3",
  "Gluten free sympathizers welcome3",
    "placeholder3", "placeholder4", "placeholder5", "placeholder6", "placeholder7", "placeholder8", "placeholder9", "placeholder10", "placeholder11"
];



function choseQuote(){
  var number = Math.floor(Math.random() * (quotes.length-1));
  $("#quote").text(quotes[number]);
}