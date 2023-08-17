# Geaux Network's Next.js-based web application

This is the new codebase for GeauxTV.

## Technologies

1. Framework - **Next.js**
2. Language - **Typescript**
3. Styling - **Tailwind CSS and Lucide Icons**
4. Frontend library - **Radix UI**
5. Global State Management - **Zustand**
6. Database - **MongoDB**
7. Authentication - **NextAuth.js**
8. Hosting - **Vercel**
9. Testing - **Jest & React Testing Library**
10. Cloud Storage - **Google Cloud Storage**

## How to run the project

1. Clone the repository.
2. Run `npm install` to install all the dependencies.
3. Run `npm run dev` to start the development server.

## How to contribute

#### **_IMPORTANT_: Do not merge anything to master branch** 

<br/>

1. Create a new branch with the format below.

&nbsp;&nbsp;&nbsp;&nbsp;  <img src="https://github.com/GagOrderNetwork/geaux-web-next/assets/76563028/db6d880d-036d-4e50-8f0a-938a857ad9f0" width="400"/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- **user-name**: Username or first & last name.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- **/** : Separator.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- **add-button**: the feature you are working on.
   
2. Make the changes on your code
3. Push the changes to the branch.
4. Create and submit pull request.
5. Let Adam know you submitted pull request.
6. Wait for the pull request to be reviewed and merged.

#### **_ALSO IMPORTANT_: Please do not merge your pull request** 

## **Commit convention**

### **Default**

```
<type>(<optional scope>): <subject>
empty separator line
<optional body>
empty separator line
<optional footer>
```

### **Types**

- `feat` Commits, that adds a new feature
- `fix` Commits, that fixes a bug
- `refactor` Commits, that rewrite/restructure your code, however does not change any behaviour
- `perf` Commits are special refactor commits, that improve performance
- `style` Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
- `test` Commits, that add missing tests or correcting existing tests
- `docs` Commits, that affect documentation only
- `build` Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
- `ops` Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
- `chore` Miscellaneous commits e.g. modifying .gitignore
  
### **Examples**
- ```
  refactor: refactor class components to functional components
  ```

- ```
  feat(profile page): add a button
  ```

- ```
  fix(player page): add missing channel number in guide form

  The error because of new guide logic
  ```


## TODOS

#### **Pages** (user interface):

- [ ] Player (root)
- [ ] Profile
- [x] Sign up
- [x] Sign in
- [ ] Forgot password
- [ ] Benefits

#### **Database**:

- [ ] Set Up Mongodb
- [ ] Create channels collection
- [ ] Create users collection

#### **Authentication**:

- [ ] Credentials sign up
- [ ] Credentials sign in
- [ ] Google Sign up
- [ ] Google Sign in
- [ ] Phone sign up
- [ ] Phone sign in
