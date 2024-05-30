const { BASE_URL } = import.meta.env;

export function AboutMeClick(infoDiv : any)
{
    infoDiv!.innerHTML = `
    <p id="ReadableSize">I'm a programmer and a game designer who's looking for the next step in his career</p>
    `
    return "test";
}

export function SkillsClick(infoDiv : any)
{
    infoDiv!.innerHTML = `
    <div class="LanguageIcons">
        <img src="${BASE_URL}C_logo.png" alt="C Logo" id="ResizeableImage"/>
        <img src="${BASE_URL}C++_logo.png" alt="C++ Logo" id="ResizeableImage"/>
        <img src="${BASE_URL}C-Sharp_logo.png" alt="C# Logo" id="ResizeableImage"/>
        <img src="${BASE_URL}Java_Logo.png" alt="Java Logo" id="ResizeableImage"/>
        <img src="${BASE_URL}Python_logo.png" alt="Python Logo" id="ResizeableImage"/>
        <img src="${BASE_URL}JavaScript_logo.png" alt="Javascript Logo" id="ResizeableImage"/>
        <img src="${BASE_URL}Typescript_logo.png" alt="Typescript Logo" id="ResizeableImage"/>
        <img src="${BASE_URL}html5_logo.png" alt="HTML5 Logo" id="ResizeableImage"/>
        <img src="${BASE_URL}CSS_logo.png" alt="CSS Logo" id="ResizeableImage"/>
    </div>
    <p id="SkillsParagraphs">I built my first computer at 12 and started programming at 13. I have always 
    enjoyed learning as much as I can about computers, and gaining all the new skills that I can. Currently I
    am learning as much as I can about the process of making video games, from the inner workings of 
    game engines to using popular game engines.</p>
    <h2>Tools/Plugins</h2>
    <p id="SkillsParagraphs">I have used a number of API's and tools, and am confident I can learn anything 
    new that I need to.</p>
    <ul>
        <li>Git</li>
        <li>Slack</li>
        <li>Trello</li>
    </ul>
    <ul>
        <li>Angular</li>
        <li>PixiJS</li>
        <li>Three.js</li>
        <li>npm</li>
        <li>Postresql</li>
        <li>Figma</li>
        <li>Jira</li>
        <li>Axure</li>
        <li>Linux</li>
        <li>RedHat</li>
        <li>Vim</li>
    </ul>
    <ul>
        <li>GameMaker Studio 2</li>
        <li>Unity</li>
        <li>Unreal Engine 5</li>
        <li>Monogame</li>
        <li>Maya</li>
    </ul>
    `
    return "test";
}

export function ExperienceClick(infoDiv : any)
{
    infoDiv!.innerHTML = `
    <div class="ExperienceSection">
        <div class="ExperienceTitle">
            <h2>LightForce Orthodontics</h2>
            <img src="${BASE_URL}LightForce_logo.png" alt="LightForce Logo" id="ResizeableImage"/>
        </div>
        <small>December 2022 - May 2023<small>
        <p id="ExperienceParagraph">Helped Develop web-based 3D modeling software for orthodontists using 
        JavaScript, TypeScript, Angular, Three.js, Postgresql, and Git. It enables precise placement 
        of braces through teeth scans and 3D-printed guides. I worked with and learned from a team of
        professionals</p>
    </div>

    <div class="ExperienceSection">
        <div class="ExperienceTitle">
            <h2>Best Buy</h2>
            <img src="${BASE_URL}BestBuy_logo.png" alt="BestBuy Logo" id="ResizeableImage"/>
        </div>
        <small>August 2022 - current<small>
        <p id="ExperienceParagraph">Applied deep knowledge of Windows/Mac systems to excel in product 
        recommendations, consistently ranking as a top earner in my store. Drew from my own experiences 
        and language abilities to help customers differentiate products.</p>
    </div>

    <div class="ExperienceSection">
        <div class="ExperienceTitle">
            <h2>Code Ninja</h2>
            <img src="${BASE_URL}CodeNinjas_logo.png" alt="BestBuy Logo" id="ResizeableImage"/>
        </div>
        <small>May 2019 - May 2020<small>
        <p id="ExperienceParagraph">Interacted with kids in order to teach them some of the basics of 
        code using Scratch and Javascript, leading many of these children to become more interested in 
        computer science. Envisioned and administered events within a team, mainly Minecraft focused camps, 
        bringing adolescents into our program.
        </p>
    </div>
    `
    return "test";
}