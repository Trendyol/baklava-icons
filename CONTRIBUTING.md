# Adding New Icons (For Designers)

## Prerequisities

* You need to have a [GitHub account](https://github.com/signup).
* You need to be a contributor in our project. (Otherwise you can follow steps below by first forking project)

## Steps

1. Go to https://github.dev/Trendyol/baklava-icons/tree/main In your browser you'll see Visual Studio Code in your browser with `main` branch (our default branch) of Baklava Icons.
2. Use three dot menu and `Branch` -> `Create Branch` in `Source Control` tab

<img src="/docs/images/create-branch-in-vscode.png" />

3. It will ask your source branch. Pick `main`. Then press `Enter`.
4. It will ask the name of your new branch. Use `kebab-case` and give a name about what you'll add here. Example: `adding-marketing-icons` Press `Enter`
5. It will ask for a confirmation. Press `Switch to Branch`. Page will be refreshed and you'll be switched to your new branch.
6. On the `Files` tab, go to `/icons` folder. This folder is the place that we store our icon SVG files.

<img src="/docs/images/icons-folder.png" />

7. Right-click to icons folder and pick `Upload...` then pick SVG files that you exported from Figma for new icon(s).
8. New files will be visible in green. You may need to rename the file. Icon SVG files should be in `snake_case`. All lowercase and underscore for word seperators. You can right-click to file and pick `Rename` for renaming them.
9. Open the new SVG file by clicking its name and replace `fill="#{someColorCode}"` with `fill="currentColor"`. This makes icon colors customizable in web pages. **Don't change `fill="none"`. It makes that layer or background transparent.
10. Open `src/synonyms.js` file. This file is used for mapping icon names with their synonyms for better searchability. Add a new line after `export default {` for your new icon. Example: `close: ['x', 'cancel']`. This means when someone searches for `x` or `cancel` in Baklava Icons documentation, they'll find your new icon.
11. Once you are done with editing SVG files and synonyms, go to `Source Control` tab. Use `+` icon on tab to add the files you changed for committing.

<img src="/docs/images/stage-files.png" />

<img src="/docs/images/files-staged.png" />

12. Write your commit message in the Message input. We are using some [commit rules](/docs/documentation-contributing-baklava-commit-rules--documentation) so you need to follow same rules. Most of the cases for adding new icon you'll use `feat: name icon added` format. Write your message and click tick button above (or Ctrl + Enter) for sending your changes to GitHub.

<img src="/docs/images/commit-and-push.png" />

13. Then go to https://github.com/Trendyol/baklava-icons in a new tab. You'll see a notification with your new branch name like below:

<img src="/docs/images/open-pr.png" />

14. Click `Compare & pull request`.
15. Be sure `main` branch is selected in `target` dropdown above the PR creation form. PR title will automatically filled from your last commit message. Edit it if you need. Add extra information to the description if you have any more remarks. Then press `Create pull request`.

<img src="/docs/images/pr-form.png" />

16.  Now you are basically done! Some automated tests will be done. Since you added a new icon, visual regression tests will fail and asks for a design review. You can do your review in Chromatic once tests are done (usually in a few minutes) and approve them if icon looks good in test screenshots. Then you'll wait for another review from repository maintainers to be able to merge PR to `main` branch. Once PR merged to `main` branch an automatic release will be done.
