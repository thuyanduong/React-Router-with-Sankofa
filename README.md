# React Router Lecture with Sankofa

[Slides](https://docs.google.com/presentation/d/1BNKlFYpgZb90H7eh61g3A6j66zbvDwAyP75FC58ZI7s/edit?usp=sharing)

## Review of React - 15 minutes
* Take a good look at Robodex. What is the component hiearchy?
* What state lives in Context? Why?
* What state **doesn't** live in Context? Why not?
  
## Client Side Routing - 10 minutes
* When you think **Client Side Routing**, what comes to mind?
* How is this different from backend routing? How is it similar?
* Why is client side routing important?
* What is Reatc Router so awesome and easy to use?!?!

## Coding Activity - 30 minutes

### Visualize the End Goal

Let's imagine what Robodex would look like with different client side routes (pages)!

* What features do you notice? 
* What URLs do you notice?

### Plan the Mockups and Component Hierarchy

* In our Mockups, what is the navigation flow?
* What should change about our component hierarchy?

### How will be built this out?
1. Familize ourselves with the [React Router Docs](https://reactrouter.com/en/main/start/overview)!
2. Set up React Router
3. Build our Home page and Robots page
4. Navigate between pages
5. Build our Show (single robot) page using React Router Hooks!

### Set up

```
npm install react-router-dom
```

What does this do? How can we check that this step was successful?

After you've installed but before you code, you must wrap you project in a [`<BrowserRouter/>`](https://reactrouter.com/en/main/router-components/browser-router)

```jsx
ReactDOM.render(
  <BrowserRouter>
    {/* The rest of your app goes here */}
  </BrowserRouter>,
  root
);
```

### Building our (Static) Pages and Navbar

Our Navbar component will always be a child of `<App/>`, but depending on the URL, we will see either the `<HomePage/>`, `<RobotsPage/>` or `<ShowPage/>`!

To build routes, we use a [`<Routes/>`](https://reactrouter.com/en/main/components/routes) component and have many [`<Route/>`](https://reactrouter.com/en/main/route/route) components as children!

```jsx
<Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/robots" element={<RobotsPage/>} />
</Routes>
 ```

* The [`element`](https://reactrouter.com/en/main/route/route#element) props is the JSX (content) that is rendered!

* The [`path`](https://reactrouter.com/en/main/route/route#path) prop match against the URL to determine if this route renders.

### Navigation Between Pages

* Outside of React, what HTML tag do we use to link pages together?

* The [`<Link/>`](https://reactrouter.com/en/main/components/link) component compiles down into an `<a>` tag and the `to` prop specifies that URL to link **_to_**. 

```jsx
<Link class="item" to="/">
  Home
</Link>
```

### Build the Show (Single Robot) Page

* If a path segment starts with `:` then it becomes a [dynamic segment](https://reactrouter.com/en/main/route/route#dynamic-segments). 

* In what situations would dynamic segments be useful?

```jsx
<Route path="/robots/:id" element={<ShowPage/>} />
```

* We can use the `useParams()` to grab the path parameter from the URL and store it in a variable. Then, we can make a fetch call to our API to get the robot with that id. 

```jsx
  let { id } = useParams();
  let [robot, setRobot] = useState(null)

  useEffect(() => {
    debugger
    fetch(`http://localhost:3000/robots/${id}`)
    .then(res => res.json())
    .then(bot => {
      setRobot(bot)
    })
  }, [])
```

### useNavigate Hook

Sometimes, you want to navigate to a new URL when you click on a button. The hook [`useNavigate()`](https://reactrouter.com/en/main/hooks/use-navigate) does exactly that!

```jsx
import { useNavigate } from "react-router-dom";

let navigate = useNavigate();

onClick={() => {navigate("/robots")}}
```

### Building a Catch-All Page

[Splats](https://reactrouter.com/en/main/route/route#splats), also known as "catchall" and "star" segments. If a route path pattern ends with /* then it will match any characters following the /, including other / characters.

```jsx
<Route path="*" element={<h1>404 Not Found!</h1>}/>
```



##### Navbar code:
```html
    <div>
      <div class="ui segment inverted menu">
        <a class="item">
          Home
        </a>
        <a class="item">
          Robots
        </a>
      </div>
    </div>
```

##### HomePage code:
```html
    <div>
      <div className="ui massive message">
        <div className="ui container">
          <h1 className="ui huge header">Hello, world!</h1>
          <p>
            This is a template for a robot or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.
          </p>
          <button className="ui large primary button">Learn more</button>
        </div>
      </div>
      <div className="ui container">
        <div className="ui three column stackable grid">
          <div className="column">
            <h1 className="ui header">Caston</h1>
            <img src="https://robohash.org/caston"/>
            <div className="ui small basic button">View details</div>
          </div>
          <div className="column">
            <h1 className="ui header">Ana</h1>
            <img src="https://robohash.org/ana"/>
            <div className="ui small basic button">View details</div>
          </div>
          <div className="column">
            <h1 className="ui header">Jowel</h1>
            <img src="https://robohash.org/jowel"/>
            <div className="ui small basic button">View details</div>
          </div>
        </div>
      </div>
    </div>
```

##### ShowPage code
```html
<div className="App ui container">
      <div class="ui centered card">
        <div class="ui image">
          <img src={robot.url} class="visible content"/>
        </div>
        <div class="content">
          <a class="header">{robot.name}</a>
          <div class="meta">
            <span class="date">{robot.bio}</span>
          </div>
        </div>
        <div class="extra content">
          <a>
            <i className="icon heartbeat red" />
            Level: {robot.level}
          </a>
        </div>
      </div>
      <button className="ui button">
        <Link to="/robots">
          Back to Robot Collection
        </Link>
      </button>
    </div>
```

##### NotFoundPage code
```html
    <img src="https://http.cat/404" />
```