export const manifest = {
	appDir: "_app",
	appPath: "DataVisualization/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.04d97d7f.js","app":"_app/immutable/entry/app.7a731a33.js","imports":["_app/immutable/entry/start.04d97d7f.js","_app/immutable/chunks/index.59f55ab0.js","_app/immutable/chunks/singletons.0e7cc869.js","_app/immutable/entry/app.7a731a33.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.59f55ab0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
