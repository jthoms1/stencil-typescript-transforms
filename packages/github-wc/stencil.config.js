exports.config = {
  namespace: "dev-transforms",
  generateDistribution: true,
  generateWWW: false
};

exports.devServer = {
  root: 'slides',
  watchGlob: '**/**'
};
