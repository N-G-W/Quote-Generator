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
            break;
        case "Joy & Gratitude":
            set_theme_joy_gratitude()
            break;
        case "Pain & Loss":
            set_theme_pain_loss();
            break;
        case "Strength & Growth":
            set_theme_strength_growth()
            break;
        case "Reflection & Truth":
            set_theme_reflection_truth()
            break;
        default:
            set_theme_love_connection();

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

