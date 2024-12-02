// Inspired by Natural Language Processing
const Subject = [
    "the Cat", "a cat", "The Dog", "A Dog", "You", "I", "Jake", "John", "Mary", "Blake", 
    "Nick", "Bob", "The Bird", "A Bird", "The Lion", "A Lion", "The Teacher", "A Teacher", 
    "The Student", "A Student", "The Man", "A Man", "The Woman", "A Woman", "The Child", 
    "A Child", "The Robot", "A Robot", "The Car", "A Car", "The Elephant", "A Elephant", 
    "The Fish", "A Fish", "The Monster", "A Monster", "The Chef", "A Chef", "The Doctor", 
    "A Doctor", "The Chef", "The Nurse", "The Policeman", "A Policeman", "The President", 
    "The Teacher", "The Dog", "The Girl", "The Boy"
].map(item => item.toLowerCase());

const Verb = {
    action: ["runs", "eats", "sleeps", "jumps", "swims", "drinks", "plays", "works", "helps", "waits"],
    creation: ["builds", "paints", "draws", "writes", "fixes"],
    perception: ["sees", "hears", "looks", "feels", "touches"],
    movement: ["walks", "climbs", "drives", "flies"],
    thought: ["thinks", "knows", "believes", "learns", "understands"]
};

const Object = {
    action: ["the ball", "the food", "a phone", "the chair", "the table", "the dog", "the cat", "a pencil", "the book"],
    creation: ["the picture", "the window", "the book", "a note", "the bag", "the chair"],
    perception: ["the clock", "the tree", "the keys", "the fish", "the shoes"],
    movement: ["the car", "the bike", "the plane", "the door", "the window"],
    thought: ["a message", "an idea", "the problem", "a solution"]
};

const Conjunctions = [
    "and", "but", "or", "so", "because", "while", "if", "before", "after"
];

function Choose(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generate() {
    let categories = ["action", "creation", "perception", "movement", "thought"];
    let sentence = '';
    for (let i = 0; i < 30; i++) {
        let category = categories[Math.floor(Math.random() * categories.length)];

        let subject = Choose(Subject);
        let verb = Choose(Verb[category]);
        let object = Choose(Object[category]);
        let conjunc = Choose(Conjunctions);

        sentence += `${subject} ${verb} ${object} ${conjunc} `;
    }
    document.getElementById("output").value = sentence.charAt(0).toUpperCase() + sentence.slice(1);
}