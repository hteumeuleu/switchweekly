/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local',
      },
      assets: {
        source: 'src/images',
        destination: 'images',
      },
    },
    components: {
      root: 'src/components',
    }
  },
  sixHex: false,
  inlineCSS: true,
  removeUnusedCSS: true,
  prettify: {
    indent_with_tabs: true,
    preserve_newlines: false,
  },
  extraAttributes: {
    table: {
      border: '0',
      cellspacing: '0',
      cellpadding: '0',
      role: 'presentation',
    },
    a: {
      target: '_blank'
    }
  },
  filters: {
    uppercase: str => str.toUpperCase(),
    formatDate: str => new Date(str).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    weekday: str => new Date(str).toLocaleDateString('en-US', { weekday: 'short' }),
    day: str => new Date(str).toLocaleDateString('en-US', { day: 'numeric' }),
  }
}
