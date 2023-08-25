# Geaux Network's Next.js-based web application

This is the new codebase for GeauxTV.

<br>

## Todos

#### **Pages** (user interface):

- [ ] Player & guide (root)
   - (player will have desktop, tablet, mobile resolutions. there will be default mode, full screen mode and theatre mode.)
   - [x] style player and guide and make both response on mobile, tablet and desktops
   - [x] added sticky headers for each category 
   - [x] added footer
   - [ ] add social media icons
   - [x] change channel functionality
- [x] sign-in
- [x] sign-up
- [x] benefits
- [ ] change-password
- [ ] forgot-password
- [ ] profile
- [ ] reset-password
- [ ] update-email
- [ ] update-phone-number

#### **Database**:

- [x] Set Up Mongodb
   - [x] Updated the mongodb connection to use cache
- [x] Create channels collection
- [ ] Create users collection
- [ ] Add rate limiting
- [ ] Create admin dashboard for adding and removing channels

#### **Authentication**:

- [ ] Set up auth for credentials, google and phone number
- [ ] Credentials sign up
- [ ] Credentials sign in
- [ ] Google Sign up
- [ ] Google Sign in
- [ ] Phone sign up
- [ ] Phone sign in

#### **Cloud Storage**:
- [x] Set up cloud storage
- [x] Upload photos

<br>

## Technologies

1. Framework - **Next.js**
2. Language - **Typescript**
3. Styling - **Tailwind CSS**
4. Icons - **Lucide Icons**
5. Frontend library - **Radix UI**
6. Global State Management - **Zustand**
7. Database - **MongoDB**
8. Authentication - **NextAuth.js**
9. Hosting - **Vercel**
10. Testing - **Jest & React Testing Library**
11. Cloud Storage - **Digital Ocean**

<br>

## How to run the project

**note**: be sure to have the late `node.js` version install in your machine: https://nodejs.org/en

1. Clone the repository.
2. create a `.env` file and add these variables
```
NODE_ENV=development

MONGODB_URI=mongodb+srv://developers:jgsYcrDHRMkvWXbj@geauxnetwork.lhv0v42.mongodb.net/?retryWrites=true&w=majority
MONGODB_DATABASE=geaux_database
MONGODB_CHANNELS_COLLECTION=channels
```
3. Run `npm install` to install all the dependencies.
4. Run `npm run dev` to start the development server.

<br>

## How to contribute

#### **_IMPORTANT_: Do not merge anything to master branch** 

<br/>

1. Create a new branch with this format: _**user-name/add-button**_

- **user-name**: Username or first & last name.
- **/** : Separator.
- **add-button**: the feature you are working on.
   
2. Make the changes on your code
3. Push the changes to the branch.
4. Create and submit pull request.
5. Let repo manager know you submitted pull request.
6. Wait for the pull request to be reviewed and merged.

#### **_ALSO IMPORTANT_: Please do not merge your pull request** 

<br>

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

<br>


