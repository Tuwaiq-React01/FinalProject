import React from 'react';

const Home = () => {
    return (
        <div>
            <div class="two column stackable ui centered grid" >
                <div class="column">
                <div class="ui segment" style={{ backgroundColor: "#bf1313", color: "white" }}>
                        <h1>The Legend of Zelda: Breath of the Wild</h1>
                    </div>
                    <img class="ui huge bordered image" src="https://www.nintendo.com//content/dam/noa/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/the-legend-of-zelda-breath-of-the-wild-switch-hero.jpg" alt="botw_poster" />

                    

                    <div class="ui segment" style={{ backgroundColor: "white", color: "#1b1c1d", fontSize: "1.2em"}}>
                        <div class="two column stackable centered ui grid" style={{ marginBottom: "8px" }}>

                            <div class="column">
                                <br/>
                                <strong>STEP INTO A WORLD OF ADVENTURE</strong> <br /><br />
                                Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure. Now on Nintendo Switch, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like.
                            </div>
                            <div class="column ui centered">

                                <img class="ui medium image" src="https://assets.nintendo.com/image/upload/c_pad,f_auto,h_490,q_auto,w_360/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/description-image?v=2021062212" alt="link"/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="two column stackable ui centered grid" >
                <div class="column">
                    <div class="ui segment" style={{ backgroundColor: "#1b1c1d", color: "white", fontSize: "1.2em" }}>
                        <div class="two column stackable centered ui grid" style={{ marginBottom: "8px" }}>
                            <div class="column ui centered">

                                <img class="ui medium bordered image" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Eiji_Aonuma_at_E3_2013_%28cropped_2%29.png" alt="Eiji Aonuma" />

                            </div>
                            <div class="column">
                                "This is the new world of Zelda. It's quite a vast world isn't it? You can even reach those mountains in the distance, if you walk far enough. We couldn't create such a wide world like this in the past. As far as what you can do with such a vast field to explore, as soon as those boundaries are removed, it means you can enter any area from any direction. So the puzzle solving in this game begins the moment the player starts to think about where they want to go, how will they get there, and what they will do when they arrive. This is a clean break from the conventions of past games in the Zelda series, where you had to follow a set path, and play through the scenario in the right order. I believe this departure will create opportunities for new game-play that have not been experienced in previous Zelda games. As you can see, and as you know from the Zelda series, the world in these games can be quite peaceful. However, it is a Zelda game after all, so strong enemies will certainly appear. Even in this setting, powerful enemies appearing in such a peaceful world is one of the defining features of the Zelda series. I think that's one convention we can keep, right?"
                            </div>
                            <strong>—Eiji Aonuma</strong> first describing the game at E3 2014
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Home;
