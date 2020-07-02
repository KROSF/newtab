chrome.downloads.onDeterminingFilename.addListener((item, suggestion) => {
  let folder = "";
  if (item.mime.indexOf("application/pdf") === 0) {
    folder = "pdfs/";
  }
  suggestion({ filename: folder + item.filename, conflictAction: "overwrite" });
});
