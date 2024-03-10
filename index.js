const { Client, RichPresence, CustomStatus, SpotifyRPC } = require('discord.js-selfbot-v13');
const client = new Client();
const keep_alive = require('./keep_alive.js')

const status = new RichPresence(client)
    .setApplicationId('1105428653715771442')
    .setType('PLAYING')
    .setURL('https://www.youtube.com/watch?v=5icFcPkVzMg')
    .setState('Arcade Game')
    .setName('osu!')
    .setDetails('MariannE - Yooh')
    .setParty({
      max: 8,
      current: 1,
    })
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(getExtendURL[0].external_asset_path) // https://assets.ppy.sh/beatmaps/1550633/covers/list.jpg
    .setAssetsLargeText('Idle')
    .setAssetsSmallImage('373370493127884800') // https://discord.com/api/v9/oauth2/applications/367827983903490050/assets
    .setAssetsSmallText('click the circles')
    .addButton('Beatmap', 'https://osu.ppy.sh/beatmapsets/1391659#osu/2873429');

client.login(process.env.token);
