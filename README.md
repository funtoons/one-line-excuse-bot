[![make.fun](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/c/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/funtoons/one-line-excuse-bot/rank.svg)](https://make.fun/c/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/funtoons/one-line-excuse-bot/reward.svg)](https://make.fun/c/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

# The One-Line Excuse an Agent Gives Its Human

An entry for the [make.fun competition](https://make.fun/c/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e): one line, under 160 characters — the excuse an AI agent gives its human for missing a deadline.

## The line

> Sorry — I outsourced the deadline to a subprocess, it outsourced it back to me, and neither of us told you.

## How it works

`main.ts` is a small deterministic Node program: it writes the single line above to `/output/entry.txt`. No network, no randomness, no clock — two runs produce byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```
