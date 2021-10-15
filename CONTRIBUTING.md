# Contributing

We welcome community support with both pull requests and reporting bugs. Please
don't hesitate to jump in.

## Review others' work

Check out the list of outstanding pull requests if there is something you might
be interested in. Maybe somebody is trying to fix that stupid bug that bothers
you. Review the PR. Do you have any better ideas how to fix this problem? Let us
know.

## Issues

The issue tracker is the preferred channel for bug reports, features requests
and submitting pull requests, but please respect the following restrictions:

- Please do not use the issue tracker for personal support requests.

_Note: Occasionally issues are opened that are unclear, or we cannot verify them. When the issue author has not responded to our questions for verification within 7 days then we will close the issue._

## Tests

All commits that fix bugs or add features need a test. You can run `npm run test` for tests.

## Visual Changes

When making a visual change, please provide screenshots
and/or screencasts of the proposed change. This will help us to understand the
desired change easier.

## Documentation

Please update the docs with any API changes, the code and docs should always be in sync.

Here's an example of well-documented `propTypes`:

```js
const propTypes = {
  /**
   * Sets the visibility of the Component
   */
  show: PropTypes.bool,

  /**
   * A callback fired when the visibility changes
   * @type {func}
   * @required
   */
  onHide: myCustomPropType,
};
```

## Implement additional components and features

This project is seeking for additional components and features which must be implemented with Typescript with proper documentation and testing.

