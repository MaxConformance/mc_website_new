// Entry point for hosts that expect a root-level server.js.
// `npm run build` bundles the Express server to dist/index.js and the client to dist/public.
process.env.NODE_ENV = process.env.NODE_ENV || "production";
await import("./dist/index.js");
