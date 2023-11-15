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