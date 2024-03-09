module.exports = {
	resolve: {
		fallback: {
			https: require.resolve('https-browserify'),
			fs: false, // или установите пакет browserify-fs
			zlib: require.resolve('browserify-zlib'),
			querystring: require.resolve('querystring-es3'),
			path: require.resolve('path-browserify'),
		},
	},
}
