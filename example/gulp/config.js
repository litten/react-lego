var dest = './build',
  src = './src',
  rlg = './node_modules/react-lego/src';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + '/**'
    ]
  },
  less: {
    src: src + '/less/main.less',
    watch: [
      src + '/less/**',
      rlg + '/less/**'
    ],
    dest: dest
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/index.jsx',
      dest: dest,
      outputName: 'index.js'
    },{
      entries: src + '/app/header.jsx',
      dest: dest,
      outputName: 'header.js'
    }]
  }
};
