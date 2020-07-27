(function () {
  const bookmarkUrl = window.location;
  let applicationUrl = "https://linkding.amd.host/bookmarks/new";
  applicationUrl += "?url=" + encodeURIComponent(bookmarkUrl.toString());
  applicationUrl += "&auto_close";
  window.open(applicationUrl);
})();
