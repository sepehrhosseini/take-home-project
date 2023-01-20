# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. At first, I switched from `let` to `const` to avoid unwanted mutations.
2. I introduced couple of new functions, which I extracted them from the main function,
which makes the code functional and simple
3. Also, this makes the code much more readable and efficient, now I believe it's much easier to read and understand.
4. In the process, I have updated the conditions, to avoid nested or unnecessary conditions, or unnecessary `else`s.
5. I've updated the test, and introduced couple of new cases, which covers the whole `dpk.js` file.
