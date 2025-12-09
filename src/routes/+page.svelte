
<script>
    let currentSection = $state("overview")

</script>

<img src="top.png" aria-hidden="true" class="top-img big"/>
<img src="top_mobile.png" aria-hidden="true" class="top-img mobile">

<img src="hackclub-flag.png" aria-hidden="true" class="hackclub-flag"/>

<div class="subtitle">
    <p>Singapore &#10022; Jan 29 – Feb 2</p>
    <p><i>A game jam within a game.</i></p>
</div>

<main>
  <div class="navbar-holder">
    <navbar>
        <button onclick={() => currentSection = "overview"} class:active={currentSection === "overview"}>Overview</button>
        <button onclick={() => currentSection = "qualifying"} class:active={currentSection === "qualifying"}>Qualifying</button>
        <button onclick={() => currentSection = "event"} class:active={currentSection === "event"}>Event Details</button>
        <button onclick={() => currentSection = "game"} class:active={currentSection === "game"}>Overglade: The Game</button>
        <button onclick={() => currentSection = "travel"} class:active={currentSection === "travel"}>Travel</button>
        <button onclick={() => currentSection = "parents"} class:active={currentSection === "parents"}>For Parents</button>
    </navbar>
    </div>
    <article>

        {#if currentSection === "overview"}
        <h1>Overview: What is Overglade?</h1>
        <p>From January 29 to February 2, 40 students will gather in Singapore for a hyper-immersive game jam. Overglade is organized by <a href="https://hackclub.com" target="_blank">Hack Club</a>, a 501(c)(3) nonprofit that supports a global community of over 50,000 high school makers.</p>

        <p>Qualify via making games for ~70 hours, and you will join 40 other high schoolers in Singapore for a game jam that feels like you're playing a huge game — doing sidequests, rolling huge dice, talking to NPCs to progress. You will be challenged to create something innovative and wonderful in an extremely creative environment.</p>

        <p>Food and accommodation will be fully funded, alongside local transport and custom merchandise. There are flight stipends available, too. This program is a grant-based initiative eligible for all high/middle schoolers <b>aged 18 years old or younger</b> from all over the world.</p>

        <p>*40 is just an estimated number — there's no limit!</p>

        <h2>What is Hack Club?</h2>
        <p>Hack Club is a 501(c)(3) nonprofit (EIN: 81-2908499) that helps high school students learn to code and build projects. We’re the largest teen-led coding community, with over 50,000 students building projects with their friends in Hack Club each year.</p>
        <p>Some of our past events include:</p>
        <ul>
        <li><p><a href="https://youtu.be/Gtjyyu82pw4?si=7X2EqkbgALAiBirA" target="_blank">Juice</a>: a 2-month game jam followed by a 7-day pop-up cafe in Shanghai, China</p></li>
        <li><p><a href="https://youtu.be/kaEFv7e49mo?si=uKUrDk5aVzbaXV-6" target="_blank">Undercity</a>: a 4-day hardware hackathon in GitHub HQ, San Francisco</p></li>
        <li><p><a href="" target="_blank">Shiba</a>: a 7-day pop-up arcade in Tokyo, Japan where teenagers built their own arcade machines</p></li>
        </ul>

        <p>... and many more!</p>

        <p>To learn more about Hack Club, visit <a href="https://hackclub.com" target="_blank">the main website</a> and <a href="https://hackclub.com/philosophy" target="_blank">Hack Club Philosophy</a>.</p>

        <h2>Who can participate?</h2>
        <p>In order to be eligible for Overglade, the following criteria must be met:</p>
        <ul>
        <li><p>You must be 18 or younger for the entirety of your participation, and over 13 years old during the physical Overglade event.</p></li>
        <li><p>You must have qualified via participating through Milkyway. See the <b>Qualifying</b> tab for more information.</p></li>
        <li><p>You cannot have created fraudulent data or cheated the system to qualify.</p></li>
        </ul>

        <h2>Team & contact</h2>
        <p>Overglade's lead organizer is Tongyu, a member of Hack Club staff who has organized previous events such as Juice.  More information about the full list of organizers will be released soon!</p>
        <p>For any questions, please email <a href="mailto:overglade@hackclub.com">overglade@hackclub.com</a>.</p>

        {:else if currentSection == "qualifying"}
        <h1>Qualifying for Overglade</h1>
        <p>Participants can qualify for Overglade by acquiring a ticket from <a href="https://milkyway.hackclub.com" target="_blank">Milkyway</a>, a Hack Club game development shop.</p>
        <ol>
        <li><p>Sign up for an account on <a href="https://milkyway.hackclub.com" target="_blank">Milkyway</a>.</p></li>
        <li><p>Create a project and set up Hackatime to track the time you spend working on your project. (Follow some <a href="https://hcmilkyway.notion.site" target="_blank">Milkyway tutorials</a> if you're not sure where to start!)</p></li>
        <li><p>Spend ~70h making a high quality game. You can 'ship' in the interface at any time to get coin payouts and feedback.</p></li>
        <li><p>Polish your project, release it online for others to play, and submit your project into the Milkyway Black Hole to earn a stellar ship.</p></li>
        <li><p>Purchase an Overglade ticket from the Milkyway shop using 650 coins + 1 stellar ship to earn an invite to Overglade!</p></li>
        </ol>

        <p>You can earn the coins based off multiple projects — there's no limit to the number of projects you can make. You can even work on a project collaboratively with friends!</p>

        <h2>Timelines</h2>
        <p>The Overglade ticket will be removed from the shop on 21 January, 2026. To qualify, obtain a ticket before then.</p>
        <p>The shop will be open for another 2 weeks after Overglade — you can continue making games to earn other prizes in the shop or to acquire additional flight stipends. (For more information, see Travel tab.)</p>

        {:else if currentSection == "event"}
        <h1>Event Details</h1>
        <p>Overglade will be happening in Singapore!</p>

        <h2>Logistics</h2>
        <p>Participants are expected to arrive any time on January 29 and depart on the evening of February 2. (For more details on the travel, visit the Travel tab.) A hotel will be provided for the first day so that participants can rest after a long journey there; the rest of the event will be conducted in the hackathon venue.</p>

        <p>The venue is to be determined.</p>

        <p>Food will be provided for the duration of the event, and there will be accommodation for all dietary restrictions.</p>

        <p>Participants will sleep at the hackathon venue. They will be provided with sleeping mats — but it is also recommended for them to bring a blanket or sleeping bag!</p>

        <p>There will be background-checked adult staff for the full duration of the event.</p>

        <p>Closer to the event dates, we will be hosting event calls to update you about how it will work and run through everything together.</p>

        <details>
          <summary>Packing list!</summary>

          <p>Here is a recommended list of items that you should bring with you — the list will vary from person to person :)</p>


          <p>Life stuff</p>
          <ul>
            <li><p>Clothing for 4 days: t-shirts, thin pants/shorts, jackets — Singapore is really hot & humid, but our indoor venue will have air conditioning and is cool!</p></li>
            <li><p>Toiletries & deodorant — toothbrush, toothpaste, hygiene products. (We are aiming to find a venue with a shower.)</p></li>
            <li><p>Sleeping bag/blanket — we will be providing sleeping mats, but you are recommended to bring a blanket or sleeping bag for greater comfort!</p></li>
            <li><p>Medication, if necessary!</p></li>
            <li><p>Wallet with emergency cash — Singapore dollars if you want to purchase any souvenirs, and your home currency for when you go home!</p></li>
            <li><p>Umbrella — not compulsory, but it rains pretty often. It's good to be prepared, especially if you plan on exploring!</p></li>
            <li><p>Refillable water bottle — We will provide water at the venue, but Singapore is hot and will dehydrate you quickly.</p></li>
          </ul>

          <p>Travel stuff</p>
          <ul>
            <li><p>Passport — essential for flying and for verifying your identity when checking in.</p></li>
            <li><p>Phone — make sure you have a device that has power and can access wifi when you land. This is important as you will need to fill in an arrival card digitally in the airport!</p></li>
          </ul>

          <p>Overglade stuff</p>
          <ul>
            <li><p>Laptop, charger, drawing devices — you will be making a game during the game jam. If you draw, bring your drawing tablet/iPad etc, too!</p></li>
            <li><p>Travel adapter — Singapore uses the type G power plug. Make sure you have a travel adapter so you can charge your devices! If you are bringing other electronics, you may also need a voltage converter. Do your research on this :)</p></li>
            <li><p>Any local snacks from where you came from — to share with other Overgladers! :D</p></li>
          </ul>

        </details>

        <h2>Exploring Singapore</h2>
        <p>Singapore is a lovely city with lots of greenery. It is also one of the safest cities in the world, and has wonderful public transport options — participants will be given time to explore!</p>

        <p>There will be two kinds of waivers provided: the normal waiver and the freedom waiver. The freedom waiver allows participants to explore individually during the time that they are given. The normal waiver requires a staff member to accompany them.</p>

        <p>Participants will be given time on the first day to freely explore Singapore, if they have the freedom waiver. They will be provided with a travel card for the MRT, Singapore's metro system.</p>

        <p>Those with normal waivers will be able to explore locations in groups while being accompanied by adult staff.</p>

        <p>During the event, there will be time for participants to complete quests or activities in various areas of Singapore. These activites are optional — travel for these will be covered by the travel card provided. Participants on the normal waiver will have a staff member accompanying them.</p>

        <h2> Are parents allowed to come?</h2>
        <p>Parents will not be allowed to stay in the venue, and will not be reimbursed for travel or their stay. They may check out the venue to make sure that it is safe under the supervision of staff members for a few minutes, if necessary.</p>

        {:else if currentSection == "game"}
        <h1>Overglade: The Game</h1>

        <p>Overglade is a massive, hyper-immersive game — the moment you step into the venue, the game begins.</p>

        <p>Players will form teams of 1-3 participants (a "party") to navigate the adventure. You will make a game together with your party and solve quests together.</p>

        <p>It will have both digital and physical gameplay elements. For example, discover a quest by talking to an NPC, and solve the quest by creating music using a giant musical keyboard and including it in your game — then get rewarded by the NPC with a key to progress the story.</p>

        <p>Overglade is full of secrets. More about the game will be revealed closer to the date; many will be revealed during the event itself.</p>

        <p>To prepare for the game, all you need to do is work on your game development skills by making awesome games.</p>

        <p>See you in the Overglade.</p>

        {:else if currentSection == "travel"}

        <h1>Travelling to Overglade</h1>

        <h2>Stipends</h2>

        <p>Participants can get flight stipends from the Milkyway shop at a rate of ~12 hours for every $100 USD in flight stipends. They can stack this multiple times to cover their flights, and can also use it to cover passport/visa costs.</p>

        <p>If you reach 600 coins, you may apply for a need-based stipend. This stipend is intended for participants who are from far away and are making high quality projects — they require three stellar ships. If you fail to get three stellar ships, you can continue to purchase normal flight stipends.</p>

        <p>(If any participant is travelling via ferry, the flight stipends can cover that, too.)</p>



        <h2>Reimbursement</h2>

        <p>After qualifying for the stipends, there are three main ways to purchase your flights:</p>
        <ol>
        <li><p>Purchase the flight by yourself, and we will reimburse you</p></li>
        <li><p>Purchase the flight using a card grant on HCB, which issues you a temporary virtual debit card</p></li>
        <li><p>Hop on a call with us, and we will book your flight for you!</p></li>
        </ol>


        <h2>Flying in & out of Singapore</h2>

        <p>Singapore only has one main airport — Changi Airport (SIN). Participants should fly in on January 29 (any time).</p>

        <p>Participants can request airport pickups from staff. Closer to the date, we will put out a form for airport pickups. On January 29, they are free to explore Singapore as they'd like before resting at the hotel. If airport pickup is requested, an adult staff will bring participants in groups to the hotel and help them check in; if not, participants are responsible for their own travel and check-in to hotel.</p>

        <p>Transit around Singapore will be using the MRT, which is Singapore's metro system. We will be providing a transit card for all participants.</p>

        <p>Participants should depart on February 2 (after 4pm). Adult staff will bring participants in groups to the airport.</p>


        <h2>Visa</h2>
        <p>Most countries do not require a visa to enter Singapore.</p>

        <p>If you do need one, we will be providing a Letter of Invitation for visa applications later in December. To reduce fraud surrounding visa letters, you will need to have earned at least 350 coins on Milkyway to get a letter. We will update this page again once more detail about it is confirmed!</p>


        {:else if currentSection == "parents"}
        <h1>Info for Parents</h1>
        <p>Please visit the <a href="https://docs.google.com/document/d/1SfbDKjYIDuge61oPkUup6fgqp8I2hRCnHbR1yD09mbo/edit?usp=sharing" target="_blank">Overglade Parent's Guide</a> for more information.</p>
        {/if}

    </article>


</main>

<footer>
<img src="footer_temp.png" aria-hidden="true" />
<div class="subtitle-footer">
    <p>Made with ❤︎ by @<a href="https://hackclub.enterprise.slack.com/team/U07DJMFAQQP" target="_blank">tongyu</a></p>
    <p><a href="https://hackclub.com" target="_blank">Hack Club</a> · <a href="https://hackclub.com/slack" target="_blank">Slack</a> · <a href="https://hackclub.com/clubs" target="_blank">Clubs</a></p>
</div>
</footer>

<style>

    .top-img {
        width: 100%;
        object-fit: cover;
    }

    .hackclub-flag {
        position: absolute;
        top: 24px;
        left: 0;
        width: 280px;
    }

    .subtitle {
        position: absolute;
        top: 52vw;
        width: 100%;
        color: #123B49;
        font-weight: 700;
        font-size: inherit;
        text-align: center;
        padding: 32px;
        box-sizing: border-box;

    }

    .subtitle p {
        margin: 3px 0;
    }


    main {
      padding: 24px;
      position: relative;
      display: flex;
    }

    navbar {
      display: flex;
      flex-flow: column;
      width: 300px;
      text-align: right;
      gap: 16px;

      padding-right: 32px;

      border-right: 2px solid #86C38B;

      position: sticky;
      top: 30vh;
      left: 32px;
    }

    b {
      font-weight: 700;
    }

    navbar button {
        text-align: inherit;
        outline: none;
        border: none;
        background-color: transparent;
        font-family: inherit;
        color: inherit;
        font-size: inherit;
        transition: 0.2s;
    }

    navbar button:hover:not(.active) {
      font-weight: bold;
    }

    navbar button.active {
      font-weight: bold;
      color: white;
    }
    navbar button.active::before {
      content: "✦ ";
    }

    article {

        padding-left: 32px;
        max-width: 60vw;

    }

    h1 {
        margin-top: 0;
        font-size: 48px;
        margin-bottom: 8px;
        font-weight: 700;
    }

    h2 {
      margin-top: 24px;
      margin-bottom: 8px;
      font-weight: 700;
    }

    a {
      color: white;
      text-decoration-style: wavy;
    }

    a:hover {
      text-decoration: none;
    }

    footer {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      position: relative;
    }

    footer img {
      width: 100%;
      margin: 0;
      padding: 0;
      display: block;
    }

    .subtitle-footer {
      position: absolute;
      bottom: 2vw;
      width: 100%;
      color: #123B49;
      font-weight: 700;
      font-size: inherit;
      text-align: center;
      padding: 32px;
      box-sizing: border-box;
    }

    .subtitle-footer p {
        margin: 3px 0;
    }

    footer a {
      color: inherit;
    }

    .mobile {
      display: none;
    }


    @media (max-width: 800px) {
      .big {
        display: none;
      }

      .mobile {
        display: block;
      }

      .top-img.mobile {
        height: 80vh;
      }

      .subtitle {
        top: 55vh;
      }

      main {
        flex-flow: column;
      }
      navbar {
        position: relative;
        top: 0;
        border: none;
        border-bottom: 2px solid #86C38B;
        text-align: center;
        flex-flow: row wrap;
        justify-content: space-between;
        width: 100%;
        padding: 24px;
        left: 0;
        box-sizing: border-box;
      }

      article {
        max-width: 100%;
        padding: 24px;
        box-sizing: border-box;
      }

      footer img {
        height: 30vh;
        object-fit: cover;
      }

      .subtitle-footer {
        bottom: 7vh;
      }
    }


</style>
