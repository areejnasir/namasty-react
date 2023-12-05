this is my namasty react classes

rafce

# useEffect
    -calls after component rendered

    - if dependency array is not present => useEffect will call after every randered 
    -useEffect(()=> {

    })
    - if dependency array is present = [] => useEffect will call (only once) after conponent rendered
    -useEffect(()=> {}, [])
    -if dependency arry is not empty = [state value] => useEffect will call after when state value will be updated
    -useEffect(()=> {

    }, [state value])


# optional chaining
    -data?.data?.cart[2]?.data?.name

# conditional randring
    - bool === true ? <Home /> : <About />

# diff algorithm / reconciliation algorithm / react fiber
    -Introduced from React 16, Fiber Reconciler is the new reconciliation algorithm in React
    -old virtual DOM  ==  -new virtual DOM => check difference then update on -real DOM

# useState
    -when setState() calls whole component will render  
    -it is used to create local state variales inside your functional components       

# dummy UI
    -shimmer UI render before api data is come

# mono services / monolith architecture  
    -like java applicaion whitch have a common repo for whole application

# micro services
    -like react application which have multiple repos for multiple stacks like frontend(react js) backend(node js) DB for data storage etc.

# ways for application load
    -load page => api data => ui rander
    - load page => shimmer ui rander => api data => ui randerd (react working on it)

# data driven UI / config riven UI
    -data driven ui is UI which depends on data (what data provide from apis or backend)     

# named export and default export 
    -if i have single component i will export default => export default Home
    -if i have multiple component in one file i will named import => import {Header, Footer} from "./index.js"    

# config.js / utils.js file
    -config.js file is use for mockData or hard coded data    

# react hook
    -react hook is a simple javascript function but this is used for important cases in react  

# props
    -props is simple javascript function arguments or simple HTML attributes     

# ~tilde and ^caret    
    -tilde means exect version of package (Approximately equivalent to version)
    -caret means compatible with version (will update you to all future minor/patch versions, without incrementing the major version)

# react-router-dom / createBrowserRouter
    -this is a react router library for making routes for our application
    -first of all i will create a configuration for browser routing paths with createBrowserRouter() it takes a list of routers
    const routerConfig = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <Error />
        },
        {
            path: "/About",
            element: "<About />
        }
    ])
    -second is i will provide a routers using RouterProvider component and pass "routerConfig variable" inside the router prop  

# custon error page / useRouteError       
    -react-router-dom provides a hook calls useRouteError()
    -first import this in your custom error page from react-router-dom
    -this hook is used for detail error as an object i can use like this:
    const err = useRouterError();
    -err.status => 404
    -erro.statusText => page not found.

# nested routing / Outlet
    -outlet will replace the component according to the route
    -if i wont to different body with common header and footer then:
    -first of all i will make a children of my root path => "/"
    const routerConfig = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Body />  if i heve "/" route then show me this body otherwise don't show me 
                },
                {
                    path: "/About",
                    element: "<About />  if i heve "/about" route then show me this about body otherwise don't show me
                },
                {
                    path: "/contact",
                    element: "<Contact />  if i heve "/contact" route then show me this contact body otherwise don't show me
                }
            ]
            errorElement: <Error />
        },
    ]) 
    -after that i will import another Componet from react-router-dom, which is Outle
    -i will use this <Outlet /> on my App component between header and footer component
    -outlet component is used to get data according to route.    

# Link component
    -Link component is used to navigate the route without reload page (this is call client side routing)
    <Link to="/">Home</Link>
    -also naver use <a> tag for navigation route in react because its reload the whole page and render new page HTML (this is called server side routing) 

# dynamic routing
    -first i will create a dynamic rote like this:
    {
        path: "/restaurent/:resId",
        element: <REstaurentMenu"
    }         
    -after /restaurant/ start with : its all dynamic value 
    for example you wont to route some card detail according to its id then use this 
    -after that i will Link card to this route /restaurant/ and pass the id of restaurant like /restaurant/1
    -after this i will import a hook called useParams() hook from react-router-dom and distructure its like this
    => const {resId} = useParams()
    -and then i will set the id of params in my api where restaurant id is or where my dummy data index
    -if you have'nt api and you use dummy data then use resId like this => dymmyData[resId -1] save this data in a state then use it.


# class component works like:
    - there is two phases
    1) render phase
    2) commit phase
    -when render phase is done React update the DOM then commit phase will Approximately

    -constructor
    -render
    -React update the DOM
    -componentDidMount 

# class component works for single child
    -first of all when class component instanece is created, first constructor is call then render method is call then componentDidMount is call
    -componentDidMount is like useEffect() hook that is using in function component for api calling... 
    -if parent component is also class component then its work like this:
    -Parent constructor will calling the parent render method is call
    -but in parent render also have a child class componet then child is also part of parent render method so 
    child component instance is created like: child constructor will calling then child render is call 
    -when child stack will rendered completely global execution context return a parent component and read after child component line
    -if there is not another child and parent render method is complete properly then parent componentDidMount will calling... 

# class component work for multiple children
    -if i have multiple children then react render both child of JSX on DOM then componentDidMount will call in order list like first then second

    1) -first render phase
    -first of all parent constructor will call
    -then parent render method wil call 
    -there is two children firest and second
    -so first child constructor will call then render will call
    -then second child constructor will call then render will call
   ( when render phase will complete properly ) "DOM actually updated" 
   2) -commit phase  
   -then first child componentDidMount will call
   -then second child componentDidMount will call
   and the last parent componentDidMount will call

# class component componentDidUpdate

    -componentDidUpdate call when setState call for updated data

    -render
    -react update DOM
    -componentDidUpdate

    componentDidUpdate like after you know i made some form ander when will submit the form we have a popup like form sumbited

# componetDidUnMount
    -its will call when componet did unmount like we navigate another page before it will call


# custom hooks / utility hook
    -i want to fetch some data for my restaurant menu but i do not want to messup the code the i will create a custom hook called useResMenu()
    in another file
    -must write "use" in any name of file and hooks thats why react understand that this is a hook. 

# lazy loading
    -this lazy loading is comes from react its is also called
    -chunking
    -code splitting
    -dynamic bundling
    -on demand loading
    -dynamic import

    how its work:
    -when my applicaion is too big and cause of big bundles data applicaion performance is slow
    then we use chunking the bundles for different components. for example
    -in my application also has grocery store but i wont to load the data once i navigate this component otherwise not.

    const chunking = lazy(()=> import("./path of chunking component")) 
    -this import function is not the name import or component import, this is a different , its is a function that takes the path or lazy component.  

# suspense     
    -this is also from react library
    -basically when we call lazy compont for better performance its takes some time to load the data
    so we wrap up the lazy component in suspense tag
    -suspense take have fallback like placeholder attribute
    -in this fallback you can return some peace of jsx like <h1>Loading...</h1>
    -it h1 tag will show before lazy component will load.     

# higher order component
    -higher order componet is a simple javascript function that takes a component and return a component function
    -this component function aceept a props of higher order component and return some peace of JSX.    
    -like promoted lable component