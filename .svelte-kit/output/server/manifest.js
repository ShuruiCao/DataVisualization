export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.8ee2a4cc.js","imports":["_app/immutable/entry/start.8ee2a4cc.js","_app/immutable/chunks/index.59f55ab0.js","_app/immutable/chunks/singletons.5e066882.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.ae21f468.js","imports":["_app/immutable/entry/app.ae21f468.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.59f55ab0.js"],"stylesheets":[],"fonts":[]}},
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
