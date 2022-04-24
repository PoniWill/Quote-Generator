 function generate() {
    let quotes = {
        "Joe Kennedy" : '" When the going gets tough, the tough get going."',
        "John Lennon" : '"Life is what happens when you’re busy making other plans."',
        "Mahatma Gandhi" : '"You must be the change you wish to see in the world."',
        "Mae West" : '" You only live once, but if you do it right, once is enough."',
        "Robert H. Schuller" : '"Tough times never last but tough people do."',
        "Stephen King" : '"Get busy living or get busy dying."',
        "Henry Ford" : '" Whether you think you can or you think you can’t, you’re right."',
        "Alrded Lord Tennyson" : '"Tis better to have loved and lost than to have never loved at all."',
        "Sir Francis Bacon" : '"A man is but what he knows."',
        "Wayne Gretzky" : '" You miss 100 percent of the shots you never take."',
        "Winston Churchill" : '"If you’re going through hell, keep going."',
        "Albert Einstein" : '"Strive not to be a success, but rather to be of value."'
    }

    let authors = Object.keys(quotes)

    let author = authors[Math.floor(Math.random() * authors.length)]


    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote
    document.getElementById('author').innerHTML = author

 }