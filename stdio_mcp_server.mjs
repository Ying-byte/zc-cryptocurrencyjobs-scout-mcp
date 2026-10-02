#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "cryptocurrencyjobs",
  boardId: "cryptocurrencyjobs-official",
  domain: "cryptocurrencyjobs.co",
  npmName: "zc-cryptocurrencyjobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
