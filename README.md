## What is this?

This is a demo project showing how to host and develop [ExcaliburJS](https://excaliburjs.com/docs/) games on a NextJS site.

## Breakout

[Breakout](<https://en.wikipedia.org/wiki/Breakout_(video_game)>) is an old game from 1976 and serves as the "Hello World" [project](https://excaliburjs.com/docs/getting-started) for ExcaliburJS.

## Breakout UI

The Breakout HelloWorld does not have any UI elements to go with it and it is not obvious to an _Excalibur_ newcomer how to implement UI that can hook into the game loop and game state. This sample code is intended to provide an example of how to do that using commonplace React JSX. A SolidJS version of this will be forthcoming soon.

### How does this UI hook into the game state?

To begin with, we are attempting to base our UI in React so we call `createRoot` specifying our pre-determined UI container as the root.

```typescript
const [gameState, setGameState] = createSignal({ score: 0, lives: 3 }, [
 (state, setState) => {
  ui.render(
   <UI
    gameState={state}
    setGameState={setState}
    game={game}
    actions={{ generateRandomBrick }}
   />
  );
 },
]);
```

In [the game logic](./src/app/breakout-ui/breakout-ui.tsx) we create a "GameState" that operates like a ["signal"](https://www.solidjs.com/tutorial/introduction_signals) or ["proxy"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) in which the state is only accessible via the Accessor function and only set-able via the Setter. This allows us to run arbitrary side-effects every time the state is modified. In this case, we force the UI to rerender via calling the `ui.render` function. Due to React's diffing nature, we can actually call this function arbitrarily many times and it will preserve state of the component.

## Getting Started

Clone the repo, run

```shell
npm i
```

then run

```shell
npm run dev
```
