exports.config = {
  namespace: "github-web-components",
  generateDistribution: true,
  generateWWW: false
};

exports.devServer = {
  root: '../slides',
  watchGlob: '**/**'
};
