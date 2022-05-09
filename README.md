<div>
  <h1 align="center">✨ Testing Accessibility with Marcy Sutton ✨</h1>

  <a href="https://testingaccessibility.com">
    <img
      alt="Testing Accessibility: Automated Testing by Marcy Sutton"
      src="./ta-promo-image-automated.png"
    />
  </a>

  <h2 align="center">
    Building accessible web applications with HTML, CSS, JavaScript, and React
  </h2>
  <p>
    Ensuring your frontend code is accessible requires consistent development effort and testing of inclusive markup and scripted interactions. In this workshop we’ll test an
    accessible web application using widely supported and proven tools and
    techniques. We’ll cover everything about building accessible frontend
    applications, from the absolute basics with HTML and CSS to the tricky parts you’ll run into building and testing JavaScript-heavy components.
  </p>
</div>

<hr />

<!-- prettier-ignore-start -->
[![GPL 3.0 License][license-badge]][license]
[![Code of Conduct][coc-badge]][coc]
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)
<!-- prettier-ignore-end -->

## Prerequisites

- This workshop is intended for intermediate to advanced web developers and testers.
- Experience with HTML, CSS, and JavaScript will be necessary. Experience with React will be helpful.

## Options for working with this material

- [Browser-based setup with GitPod](https://gitpod.io/from-referrer/)
  - GitPod provides a cloud-based development environment similar to VS Code  
  - Requires a login with Github
  - **Note**: GitPod may have accessibility issues
- Download a zip file for local setup
- Clone this Git repo for local setup (see instructions below)

## System Requirements for Local Setup

- [git][git] v2.13 or greater
- [NodeJS][node] `12 || 14 || 15 || 16`
- [yarn][yarn] v1

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
yarn --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

> If you want to commit and push your work as you go, you’ll want to
> [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
> first and then clone your fork rather than this repo directly.
> Be sure to fetch the latest code on the day of the workshop by [syncing your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).

After you’ve made sure to have the pre-requisites installed, you
should be able to run a few commands to get set up:

```
git clone https://github.com/testing-accessibility/workshop-automated-a11y-testing.git
cd workshop-automated-a11y-testing
yarn
```

There may be periodic changes to this repo. To update your local build, run:

```
git pull
```

Note: if you have local changes, you'll need to commit them to a branch. Here's
some extra help on using Git: [https://www.freecodecamp.org/news/git-pull-explained/]

If you get any errors when building the site, please read through them and see if
you can find out what the problem is. If you can’t work it out on your own then
please [file an issue][issue] and provide _all_ the output from the commands you ran
(even if it’s a lot).

## Running the project locally

This repo contains various workshop files and a React web application. To get the app up and running (and really see if it worked) with [Parcel](https://parceljs.org), run this command from the project’s root folder:

```shell
yarn start
```

This should start the site for your browser at the address indicated in your Terminal:
`http://localhost:1234`

You can also view a deployed version: https://workshop-automated-a11y-testing.testingaccessibility.com/

## Working through the exercises

In this workshop, we get more advanced with a React web application built out of the same monorepo. There are folders for each of the sections and the build will already be set up with the required tooling.

The URL is: `http://localhost:1234/`

**Windows note:** Jest and Puppeteer are not working on WSL for Workshop 2. This may be fixed at some point in the future, but consider it a heads up.

- [exercise0-storybook](https://github.com/testing-accessibility/workshop-automated-a11y-testing/tree/main/exercise0-storybook)
  - To start Storybook, run this command: `yarn storybook`
- [exercise1-jest](https://github.com/testing-accessibility/workshop-automated-a11y-testing/tree/main/exercise1-jest)
  - Run unit tests: `yarn test`
- [exercise2-cypress-components](https://github.com/testing-accessibility/workshop-automated-a11y-testing/tree/main/exercise1-cypress-components)
  - Run Cypress Component Tests: `yarn test:components`
- [exercise3-cypress-integration](https://github.com/testing-accessibility/workshop-automated-a11y-testing/tree/main/exercise3-cypress-integration)
  - Run Cypress integration tests: `yarn test:e2e`
- [exercise4-puppeteer](https://github.com/testing-accessibility/workshop-automated-a11y-testing/tree/main/exercise4-puppeteer)
  - Run Puppeteer with Jest: `yarn test:puppeteer`
- [exercise5-ci](https://github.com/testing-accessibility/workshop-automated-a11y-testing/tree/main/exercise5-ci)

This structure will allow you to iterate on working files with separate directories for the example sections.

The purpose of an exercise is **not** for you to work through all the material.
It’s intended to get your brain thinking about the right questions to ask as
we go through the material together.

Contributions of any kind are welcome!

## Workshop Resources

Links from this and all of the Testing Accessibility workshops have been compiled on a resources page: https://workshop-resources.testingaccessibility.com/#workshops-testing

<!-- prettier-ignore-start -->
<!-->
[yarn]: https://classic.yarnpkg.com/lang/en/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/marcysutton/testing-accessibility-demos/blob/main/LICENSE
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/marcysutton/testing-accessibility-demos/blob/main/CODE_OF_CONDUCT.md
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/marcysutton/testing-accessibility-demos/issues/new-->
<!-- prettier-ignore-end -->
