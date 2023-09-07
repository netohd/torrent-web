import WebTorrent from 'webtorrent'

const client = new WebTorrent()

const magnetURI = 'magnet: ...'

client.add(magnetURI, { path: './downloads/' }, function (torrent) {
  torrent.on('done', function () {
    console.log('torrent download finished')
  })
})