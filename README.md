# React-Context-connect example

This repo is to play around with react context.

## Thought process on implementation

My main thought was simplicity. I didn't want to obscure too much with the react context api. So I created a way to init the providers and connect to a consumer.

All logic for this implementation is contained in `lib/` and initialization is done in `state.js`. In `state` contexts are created and the providers are exported in an object, along with a `connect` method, that is a HOC that wraps a component in the consumer you ask for.

## Would love feedback!

This wasn't designed for production but would love some insight

If you're looking for a good implementation I'd suggest taking a look at [react-contextual](https://github.com/drcmda/react-contextual)

**Bootstrapped with [create-react-app](https://github.com/facebook/create-react-app)**
