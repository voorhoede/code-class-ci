# Code class CI & GitHub Actions

## [Slides](https://voorhoede.github.io/code-class-ci/)

## Setup
```sh
git clone git@github.com:voorhoede/code-class-ci.git
cd code-class-ci
```

## Exercises

### One
0. Create a new branch on this repository, open a pull request to iterate.
0. Create a worfklow with configuration to run within the exercise-1 directory.
0. Add a job, containing steps to checkout the repository and setup Node.js.
0. Add a step to run `npm run lint`.
0. Bonus: Optimize the action to finish as quick as possible.

## Solutions
To get the solution for an exercise apply the solution patch file, for example for the first exercise:
```sh
git apply exercise-1/solution.patch
```

[*<<* My previous code class, about functional JS](https://github.com/voorhoede/code-class-funfunctional-js)
