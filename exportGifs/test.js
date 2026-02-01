(async () => {
  function getSettings() {
    try {
      window.FrecencyUserSettings ??= webpackChunkdiscord_app.push([[Symbol()], , e =>
        Object.values(e.c).values()
          .map(m => m.exports)
          .filter(x => typeof x == "object" && x != window && x != DOMTokenList.prototype)
          .flatMap(x => [x, ...Object.values(x)])
          .find(x => !x?.$$loader && x?.ProtoClass?.typeName?.endsWith(".FrecencyUserSettings"))
      ]);
      FrecencyUserSettings.loadIfNecessary();
      return FrecencyUserSettings.getCurrentValue()?.favoriteGifs?.gifs;
    } catch {
      return null;
    }
  }

  // Poll until the data is ready, with a timeout
  let gifs = null;
  const timeout = Date.now() + 30000; // 30 second max wait
  while (!gifs && Date.now() < timeout) {
    gifs = getSettings();
    if (!gifs) await new Promise(r => setTimeout(r, 500)); // retry every 500ms
  }

  if (!gifs) {
    throw new Error("Timed out waiting for FrecencyUserSettings to load.");
  }

  // Download
  const json = JSON.stringify(gifs, null, 2);
  Object.assign(document.createElement("a"), {
    href: URL.createObjectURL(new Blob([json], { type: "application/json" })),
    download: "discord-favorite-gifs.json"
  }).click();
})();