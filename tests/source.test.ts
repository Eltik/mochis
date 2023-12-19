import { test } from 'vitest'
import runner from "@mochiapp/runner";
import Source from "../src/module";

const source = runner(Source)

// test("provides correct search info", async () => {
//   console.log(await source.search({ query: "Test", page: "1", filters: [] }))
// })

// test("provides discover listings", async () => {
//   console.log(await source.discoverListings())
// })


// test("provides playlist details", async () => {
//   console.log(await source.playlistDetails("mushoku-tensei-ii-isekai-ittara-honki-dasu"))
// })

// test("gets the episode count", async() => {
//   console.log(JSON.stringify(await source.playlistEpisodes("how-not-to-summon-a-demon-lord-w.oz6y/ep-1")))
// })

// test("gets the episode sources", async() => {
//   console.log(JSON.stringify(await source.playlistEpisodeSources({playlistId: "how-not-to-summon-a-demon-lord-w.oz6y/ep-1", episodeId: "HTmfCcgl,HTSZA8sl,HTqXDM4m"})))
// })


test("gets an episode server", async() => {
  console.log(JSON.stringify(await source.playlistEpisodeServer({playlistId: "how-not-to-summon-a-demon-lord-w.oz6y/ep-1", episodeId: "HTmfCcgl,HTSZA8sl,HTqXDM4m", sourceId:"servers", serverId:"HzuaDc8unw=="})))
})
