module: {
  loaders: [
    {
      test: /\.jsx?/,
      include: ['.'],
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }
  ]
}