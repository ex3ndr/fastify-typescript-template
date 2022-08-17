import { createBackoff } from "teslabot";
import { warn } from "./log";

export let backoff = createBackoff({ onError: (e) => { warn(e); } });