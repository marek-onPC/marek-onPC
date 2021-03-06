const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')


module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Description of use: https://www.npmjs.com/package/prerender-spa-plugin
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/', '/notes', '/about', '/post', '/fof'],
        captureAfterElementExists: '.v-card',
        captureAfterTime: 5000,
        postProcessHtml: function (context) {
          var titles = {
            '/': 'Home',
            '/notes': 'Notes',
            '/about': 'About',
            '/post': 'Post',
            '/fof': 'Four0Four'
          }
          return context.html.replace(
            /<title>[^<]*<\/title>/i,
            '<title>' + titles[context.route] + '</title>'
          )
        }
      })
    ],
  }
}
