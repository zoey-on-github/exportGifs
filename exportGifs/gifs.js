window.FrecencyUserSettings ??= webpackChunkdiscord_app.push([[Symbol()],,e=>Object.values(e.c).values().map(m=>m.exports).filter(x=>typeof x=="object"&&x!=window&&x!=DOMTokenList.prototype).flatMap(x=>[x,...Object.values(x)]).find(x=>!x?.$$loader&&x?.ProtoClass?.typeName?.endsWith(".FrecencyUserSettings"))]);

function downloadJSON(content, download) {
  const json = JSON.stringify(content, null, 2);
  Object.assign(document.createElement("a"), {
    href: URL.createObjectURL(new Blob([json], { type: "application/json" })),
    download
  }).click();
}

FrecencyUserSettings.loadIfNecessary();
downloadJSON(FrecencyUserSettings.getCurrentValue().favoriteGifs.gifs, "discord-favorite-gifs.json");