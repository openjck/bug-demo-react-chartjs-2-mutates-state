A demonstration of [react-chartjs-2 issue #250](https://github.com/jerairrest/react-chartjs-2/issues/250).

## Running this demo

1. Clone this repo
2. `yarn`
3. `yarn start`

## To demonstrate the bug

Click the *Toggle data object* button twice. Each time the button is clicked,
the data object that is being passed to react-chartjs-2 is toggled.

## Result

After the first button click, everything updates as expected.

After the second button click, `this.dataObject1` is overwritten with the value
of `this.datasetObject2` and, as a result, the chart does not change.
