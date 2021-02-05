Code Class CI & GitHub Actions
    What?
        CI: Continuous integration
            Started with developers merging master often to avoid big conflicts
            Now conveys a bunch of practices
            Automated tests ran on build servers
        CD: Continuous deployment
            Every commit can be deployed
            Deployment is automated
    Why?
        Prevent bugs
            Tests prevent regressions
            Inspect-able changes between deploys, allows for pinpointing cause of (unwanted) changes
        Shareable results
            Website preview builds
            Build failure
            Test results
    How?
        Various services: self-hosted, hosted, hybrid
        Services often offer a UI and source control integration (GitHub, GitLab, ...)
        Boils down to running scripts in a consistent environment from a commit
        Each service has their own format for running scripts
    Zoom into GH Actions
        Event: can be a push, webhook, pull request: each has it's own info payload
        Workflows: YAML file in your repository
        Jobs: each job runs in a separate environment/runner, can be parallel
        Steps: each step is either a GH Action (different from GH Actions) or a shell command
        How to name workflows and jobs?
            Naming workflows and jobs is hard this is one way
            https://github.com/Siilwyn/dotilim/blob/master/.github/workflows/ci.yaml
    Exercises
        Exercise 1
            Workflow file is run from a branch, testing with PR trigger on push
            Go through solution line by line
            See how linting output puts annotations on GH
            See how caching changes workflow duration and timings are sometimes inconsistent
        Exercise 2
            Debug logging in a GH action
            https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/enabling-debug-logging
            Remote and local actions can be docker containers or JS scripts
            Remote actions are the same as local actions, just in a different repo (with version tag)
            When using modules, like '@actions/core' it needs to be 'bundled' (in CommonJS!)
            Third party GH actions: Pin actions to a full length commit SHA for security
    Conclusion
        Our own collection of workflows, when creating a new workflow it will give it as option
        Curated list of awesome github action info and examples
        Run locally with act
        https://github.com/nektos/act
