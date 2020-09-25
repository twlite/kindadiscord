import React from "react";
import { 
  DiscordMessages, 
  DiscordMessage,
  DiscordMention, 
  DiscordEmbed, 
  DiscordEmbedFields, 
  DiscordEmbedField 
} from "@skyra/discord-components-react";

function App() {
    window.$discordMessage = {
        profiles: {
            Snowflake: {
                author: "Snowflake",
                avatar: "https://cdn.discordapp.com/avatars/480933736276426763/2ba39a4d924771f5faa76a063eb851a0.webp?size=1024",
                roleColor: "#4d5e94"
            },
            CarlBot: {
                author: "Carl-bot",
                avatar: "https://cdn.discordapp.com/avatars/235148962103951360/cececd50fdc87b29929e65c768f24ad6.webp?size=1024",
                roleColor:"#da004e",
                bot: true,
                verified: true
            }
        }
    };

    const time = () => `Today at ${new Date().getHours() + ":" + new Date().getMinutes()}`;

    return (
        <>
            <DiscordMessages>

                <DiscordMessage profile="Snowflake" timestamp={time()}>
                  <DiscordMention>Carl-bot</DiscordMention> ping
                </DiscordMessage>

                <DiscordMessage profile="CarlBot" timestamp={time()}>
                  Pong!<br/>
                  <b>Cluster 22:</b> 27.31ms (avg)<br/>
                  <b>Shard 176:</b> 16.67ms<br/>
                  <b>Node:</b> Ns106706
                </DiscordMessage>

                <DiscordMessage profile="Snowflake" timestamp={time()}>
                  {'>avatar'}
                </DiscordMessage>

                <DiscordMessage profile="CarlBot" timestamp={time()}>
                  <DiscordEmbed 
                    slot="embeds" 
                    color="#7289da" 
                    image="https://cdn.discordapp.com/avatars/480933736276426763/2ba39a4d924771f5faa76a063eb851a0.webp?size=1024"
                    embedTitle="Avatar for Snowflake#0007"
                  >
                    <DiscordEmbedFields slot="fields">
                      <DiscordEmbedField fieldTitle="Link as" inline>
                        <p><a href="https://cdn.discordapp.com/avatars/480933736276426763/2ba39a4d924771f5faa76a063eb851a0.png?size=1024">png</a> | <a href="https://cdn.discordapp.com/avatars/480933736276426763/2ba39a4d924771f5faa76a063eb851a0.jpg?size=1024">jpg</a> | <a href="https://cdn.discordapp.com/avatars/480933736276426763/2ba39a4d924771f5faa76a063eb851a0.webp?size=1024">webp</a></p> 
                      </DiscordEmbedField>
                    </DiscordEmbedFields>
                  </DiscordEmbed>
                </DiscordMessage>

                <DiscordMessage profile="Snowflake" timestamp={time()}>
                  <DiscordMention>Carl-bot</DiscordMention>
                </DiscordMessage>

                <DiscordMessage profile="CarlBot" timestamp={time()}>
                  <DiscordMention highlight>Snowflake</DiscordMention>
                </DiscordMessage>

                <DiscordMessage profile="Snowflake" timestamp={time()}>
                  kek
                </DiscordMessage>
            </DiscordMessages>

        </>
    );
}

export default App;