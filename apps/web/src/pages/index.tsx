import { NextPage } from "next"
import { Button } from "ui"
import { HomeLayout } from "../components"

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <h1>Kadyrovshina</h1>
      <Button>test</Button>
    </HomeLayout>
  )
}

export default Home
