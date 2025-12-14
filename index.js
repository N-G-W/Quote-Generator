let love_connection_quotes = {
  0: { 0: "You had me at hello.", 1: "— Jerry Maguire (movie)" },
  1: { 0: "You complete me.", 1: "— Jerry Maguire (movie)" },
  2: { 0: "I love you 3000.", 1: "— Avengers: Endgame (movie)" },
  3: { 0: "To me, you are perfect.", 1: "— Love Actually (movie)" },
  4: { 0: "I would rather share one lifetime with you than face all the ages of this world alone.", 1: "— The Lord of the Rings: The Fellowship of the Ring (movie)" },
  5: { 0: "The best love is the kind that awakens the soul and makes us reach for more.", 1: "— The Notebook (movie)" },
  6: { 0: "If you love deeply, you’re going to get hurt badly. But it’s still worth it.", 1: "— C.S. Lewis" },
  7: { 0: "Most of my life I felt alone, even when I was with people.", 1: "— Pretty Little Liars (TV)" },
  8: { 0: "Love means never having to say you’re sorry.", 1: "— Love Story (movie)" },
  9: { 0: "I’ve fallen in love. I’m an ordinary woman.", 1: "— Brief Encounter (movie)" }
};

let joy_gratitude_quotes = {
  0: { 0: "Joy is the simplest form of gratitude.", 1: "— Karl Barth" },
  1: { 0: "Gratitude turns what we have into enough.", 1: "— Aesop" },
  2: { 0: "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.", 1: "— Melody Beattie" },
  3: { 0: "Happiness cannot be traveled to, owned, earned, worn, or consumed.", 1: "— Denis Waitley" },
  4: { 0: "Be mindful. Be grateful. Be positive. Be true. Be kind.", 1: "— Roy T. Bennett" },
  5: { 0: "At times our own light goes out and is rekindled by a spark from another person.", 1: "— Albert Schweitzer" },
  6: { 0: "Life is like a box of chocolates. You never know what you’re gonna get.", 1: "— Forrest Gump (movie)" },
  7: { 0: "We learned about gratitude and humility.", 1: "— Michelle Obama" },
  8: { 0: "No one who achieves success does so without the help of others.", 1: "— Alfred North Whitehead" },
  9: { 0: "Joy is not in things; it is in us.", 1: "— Richard Wagner" }
};

let pain_loss_quotes = {
  0: { 0: "You never know how strong you are until being strong is your only choice.", 1: "— Bob Marley" },
  1: { 0: "Out of suffering have emerged the strongest souls.", 1: "— Khalil Gibran" },
  2: { 0: "Pain is inevitable. Suffering is optional.", 1: "— Buddha" },
  3: { 0: "Without pain, without sacrifice, we would have nothing.", 1: "— Fight Club (movie)" },
  4: { 0: "That’s the thing about pain, it demands to be felt.", 1: "— John Green" },
  5: { 0: "Although the world is full of suffering, it is full also of the overcoming of it.", 1: "— Helen Keller" },
  6: { 0: "It hurts because it mattered.", 1: "— John Green" },
  7: { 0: "Tears shed for another person are a sign of a pure heart.", 1: "— José N. Harris" },
  8: { 0: "The pain I feel now is the happiness I had before.", 1: "— C.S. Lewis" },
  9: { 0: "Grief is the price we pay for love.", 1: "— Queen Elizabeth II" }
};

let strength_growth_quotes = {
  0: { 0: "Be thankful for the hard times, they can only make you stronger.", 1: "— Keanu Reeves" },
  1: { 0: "Mistakes are always forgivable, if one has the courage to admit them.", 1: "— Bruce Lee" },
  2: { 0: "Failure will never overtake me if my determination to succeed is strong enough.", 1: "— Og Mandino" },
  3: { 0: "You have power over your mind — not outside events.", 1: "— Marcus Aurelius" },
  4: { 0: "Courage is not the absence of fear, but rather the judgment that something else is more important than fear.", 1: "— Ambrose Redmoon" },
  5: { 0: "The world breaks everyone, and afterward, some are strong at the broken places.", 1: "— Ernest Hemingway" },
  6: { 0: "Fall seven times, stand up eight.", 1: "— Japanese Proverb" },
  7: { 0: "Only those who dare to fail greatly can ever achieve greatly.", 1: "— Robert F. Kennedy" },
  8: { 0: "Difficulties strengthen the mind, as labor does the body.", 1: "— Seneca" },
  9: { 0: "Strength does not come from physical capacity. It comes from an indomitable will.", 1: "— Mahatma Gandhi" }
};

let reflection_truth_quotes = {
  0: { 0: "Many of the truths that we cling to depend greatly on our own point of view.", 1: "— Obi-Wan Kenobi (Star Wars)" },
  1: { 0: "No matter what anybody tells you, words and ideas can change the world.", 1: "— Dead Poets Society (movie)" },
  2: { 0: "Why do we fall? So we can learn to pick ourselves up.", 1: "— Batman Begins (movie)" },
  3: { 0: "There’s a difference between knowing the path and walking the path.", 1: "— The Matrix (movie)" },
  4: { 0: "The unexamined life is not worth living.", 1: "— Socrates" },
  5: { 0: "I think, therefore I am.", 1: "— René Descartes" },
  6: { 0: "Here’s looking at you, kid.", 1: "— Casablanca (movie)" },
  7: { 0: "May the Force be with you.", 1: "— Star Wars (movie)" },
  8: { 0: "Toto, I’ve a feeling we’re not in Kansas anymore.", 1: "— The Wizard of Oz (movie)" },
  9: { 0: "E.T. phone home.", 1: "— E.T. the Extra-Terrestrial (movie)" }
};


let current_index = 0
let current_category = love_connection_quotes
function update_content() {
    let quote = document.querySelector("div.quote")
    let reference = document.querySelector("div.reference")
    quote.textContent = current_category[current_index][0]
    reference.textContent = current_category[current_index][1]
    console.log("content is being updated")
}

let buttons = document.querySelectorAll("button")


buttons.forEach(
    (button) => {
        switch (button.textContent) {
            case "Previous":
                button.addEventListener(
                    "click", () => {
                        if (current_index != 0) {
                            current_index = ((current_index-1)%10)
                        }
                        else {
                            current_index = 9
                        }
                update_content()
            }
        )
                break;
            case "Next":
                button.addEventListener(
            "click", () => {
                current_index = ((current_index+1)%10)
                update_content()
            }
        )
                break;
            case "Random":
                button.addEventListener(
            "click", () => {
                current_index = Math.floor(Math.random() * 10);
                update_content()
            }
        )
                break;
            case "↑":
            button.addEventListener(
                "click", () => {
                    let quote = document.querySelector("div.quote_content")
                    let computedStyle = window.getComputedStyle(quote)
                    let font_size = computedStyle.getPropertyValue('font-size');
                    let font_integer_value = parseInt(font_size,10)
                    console.log(font_integer_value)
                    font_integer_value=font_integer_value+1
                    quote.style.fontSize = `${font_integer_value}px`;
                }
            )
                break;
            case "↓":
            button.addEventListener(
                "click", () => {
                    let quote = document.querySelector("div.quote_content")
                    let computedStyle = window.getComputedStyle(quote)
                    let font_size = computedStyle.getPropertyValue('font-size');
                    let font_integer_value = parseInt(font_size,10)
                    console.log(font_integer_value)
                    font_integer_value=font_integer_value-1
                    quote.style.fontSize = `${font_integer_value}px`;
                }
            )
                break;
        }
        
    }
)
let select_element = document.querySelector("select")
select_element.addEventListener(
    "change", () => {
        set_theme()
    }
)
function set_theme() {
    let select_element = document.querySelector("select")
    let category = select_element.value
    console.log(category)

    switch (category) {
        case "Love & Connection":
            set_theme_love_connection();
            current_category = love_connection_quotes;
            break;
        case "Joy & Gratitude":
            set_theme_joy_gratitude();
            current_category = joy_gratitude_quotes;
            break;
        case "Pain & Loss":
            set_theme_pain_loss();
            current_category = pain_loss_quotes;
            break;
        case "Strength & Growth":
            set_theme_strength_growth();
            current_category = strength_growth_quotes;
            break;
        case "Reflection & Truth":
            set_theme_reflection_truth();
            current_category = reflection_truth_quotes;
            break;
        default:
            set_theme_love_connection();
            current_category = love_connection_quotes;

    }
}

function get_theme() {
    return r = document.querySelector(':root');
}

function set_theme_love_connection() {
    let theme = get_theme()
    theme.style.setProperty("--background-color", "#FFF1E6")
    theme.style.setProperty("--header-background-color", "#F4C2C2")
    theme.style.setProperty("--header-text", "#6D1E2C")
    theme.style.setProperty("--button-background-color", "#C44569")
    theme.style.setProperty("--button-text-color","#F4C2C2")
    theme.style.setProperty("--quote-color", "#6D1E2C")
}
function set_theme_strength_growth() {
    let theme = get_theme()
    theme.style.setProperty("--background-color", "#E9D8A6")
    theme.style.setProperty("--header-background-color", "#8D6E63")
    theme.style.setProperty("--header-text", "#FFD8B5")
    theme.style.setProperty("--button-background-color", "#F4A261")
    theme.style.setProperty("--button-text-color","#FFFFFF")
    theme.style.setProperty("--quote-color", "#000000")
}

function set_theme_joy_gratitude() {
    let theme = get_theme()
    theme.style.setProperty("--background-color", "FAFAFA")
    theme.style.setProperty("--header-background-color", "#A8E6CF")
    theme.style.setProperty("--header-text", "#6E5129")
    theme.style.setProperty("--button-background-color", "#4D96FF")
    theme.style.setProperty("--button-text-color","#FFFFFF")
    theme.style.setProperty("--quote-color", "#6E5129")
}

function set_theme_reflection_truth() {
    let theme = get_theme()
    theme.style.setProperty("--background-color", "#C7D2E1")
    theme.style.setProperty("--header-background-color", "#6B6FAB")
    theme.style.setProperty("--header-text", "#1B2A41")
    theme.style.setProperty("--button-background-color", "#1B2A41")
    theme.style.setProperty("--button-text-color","#C7D2E1")
    theme.style.setProperty("--quote-color", "#1B2A41")
}


function set_theme_pain_loss() {
    
    let theme = get_theme()
    console.log(theme)
    theme.style.setProperty("--background-color", "#DADADA")
    theme.style.setProperty("--header-background-color", "#5C6B73")
    theme.style.setProperty("--header-text", "#DADADA")
    theme.style.setProperty("--button-background-color", "#7A6C8D")
    theme.style.setProperty("--button-text-color","#DADADA")
    theme.style.setProperty("--quote-color", "#666666")
}

