const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Homepage = async () => {
  await delay(2000)
  
  return ( 
    <>
      <h1>Home Page</h1>
    </>
   )
}
 
export default Homepage