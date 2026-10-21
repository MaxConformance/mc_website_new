// Entry point for hosts that expect a root-level server.js (incl. LiteSpeed lsnode, which require()s it).
// `npm run build` bundles the Express server to dist/index.js and the client to dist/public.
// Static import only: no top-level await, so it also works when loaded through require().
process.env.NODE_ENV = process.env.NODE_ENV || "production";
import "./dist/index.js";
