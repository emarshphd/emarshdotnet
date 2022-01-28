module.exports = {
  meta: {
    title: "emarsh dot net",
    description: "Just messing around.",
    lang: "en",
    siteUrl: "https://emarsh.net/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "messing around",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://emarsh.net/",
    authorName: "emarsh",
    authorEmail: "erik@erikmarshall.net"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Welcome to my random site",
    description: "A place for personal things"
  }
}
